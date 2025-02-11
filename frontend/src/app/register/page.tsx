"use client";
import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { register } from "@/api/auth";
import { useRouter } from "next/navigation";
import InstructionButton from "@/components/instruction-button";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      if (values.password.length < 6) {
        throw new Error("Password should be at least 6 characters long.");
      }

      if (values.username !== values.password) {
        throw new Error("Username and password should be the same.");
      }

      await register(values);
      localStorage.setItem("isLogin", "true");
      router.push("/data");
      setRegistrationError(null);
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationError("Username already exists. Please try again.");
    }
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        form={form}
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="bg-white shadow-md rounded px-8 py-6"
        style={{ width: 300 }}
      >
        <div className="flex flex-col  text-center">
          <div>**Please read the instruction and the examples carefully.**</div>
          <div className="mt-2 mb-4 flex justify-end ">
            <InstructionButton />
          </div>
        </div>
        {registrationError && (
          <Alert
            message={registrationError}
            type="error"
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input
            placeholder="Username (Prolific ID)"
            className="border rounded w-full py-2 px-3"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              min: 6,
              message: "Password should be at least 6 characters long.",
            },
          ]}
        >
          <Input.Password
            placeholder="Password (Prolific ID)"
            className="border rounded w-full py-2 px-3"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline mt-1"
            style={{ width: "100%" }}
          >
            Register
          </Button>
        </Form.Item>
        <div className="text-center mt-4">
          <a className="text-blue-500 underline" onClick={handleLoginClick}>
            Login here
          </a>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
