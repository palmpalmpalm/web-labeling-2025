"use client";
import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { login } from "@/api/auth";
import { useRouter } from "next/navigation";
import InstructionButton from "@/components/instruction-button";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await login(values);
      setLoginError(null);
      localStorage.setItem("isLogin", "true");
      router.push("/data");
    } catch (error) {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Form
        form={form}
        name="login"
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
        {loginError && (
          <Alert
            message={loginError}
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
          rules={[{ required: true, message: "Please enter your password!" }]}
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
            style={{ width: "100%" }}
          >
            Login
          </Button>
        </Form.Item>
        <div className="text-center mt-4">
          <p>Do not have an account?</p>
          <a className="text-blue-500 underline" onClick={handleRegisterClick}>
            Register here
          </a>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
