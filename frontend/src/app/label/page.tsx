/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Checkbox, Radio, Spin } from "antd";
import {
  changeAnswer,
  getUserDataByUserIdAndDataId,
  markAsLabelled,
} from "@/api/user-data";
import { useAtom } from "jotai";
import Navbar from "@/components/navbar";
import {
  UserData,
  dataAtom,
  labelledDataAtom,
  unlabelledDataAtom,
} from "@/atom/data-atom";
import { useRouter } from "next/navigation";
import { getMe } from "@/api/user";

const LabelPage: React.FC = () => {
  const router = useRouter();
  const defaultSelectedLabel = ["no", "no", "no", "no"];
  const [selectedLabel, setSelectedLabel] =
    useState<string[]>(defaultSelectedLabel);
  const [unlabelledData, setUnlabelledData] = useAtom(unlabelledDataAtom);
  const [labelledData, setLabelledData] = useAtom(labelledDataAtom);
  const [userId, setUserId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useAtom(dataAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    id: "",
    userId: "",
    dataId: "",
    isLabelled: false,
    answers: [],
  });

  // const answerOptions = ["inside", "near", "far", "front"];
  // const answerOptionsShow = ["in", "near", "far from", "in front of"];
  const answerOptions = ["next", "at", "outside", "adjacent", "within", "around", "by"];
  const answerOptionsShow = ["next to", "at", "outside", "adjacent to", "within", "around", "by"];
  const handleOptionChange = (optionIndex: number, value: string) => {
    setSelectedLabel((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected[optionIndex] = value;
      return newSelected;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("isLogin")) {
        router.push("/login");
      }
    }
    if (!data) {
      router.push("/data");
    }
  }, [data, router]);

  const fetchMe = useCallback(async () => {
    try {
      setIsLoading(true);
      const user = await getMe();
      setUsername(user.data.username);
      setUserId(user.data.id);
      const userData = await getUserDataByUserIdAndDataId(
        user.data.id,
        data ? data.id : ""
      );

      setUserData(userData.data);
      if (userData.data.isLabelled) {
        userData.data.answers.forEach((answer: string) => {
          const index = answerOptions.indexOf(answer);
          if (index !== -1) {
            setSelectedLabel((prevSelected) => {
              const newSelected = [...prevSelected];
              newSelected[index] = "yes";
              return newSelected;
            });
          }
        });
      }
      setIsLoading(false);
    } catch (error) {
      router.push("/data");
    }
  }, [data, router]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const handleSubmit = async () => {
    try {
      console.log("submit");
      if (data) {
        let labelAnswers: string[] = [];
        for (let i = 0; i < selectedLabel.length; i++) {
          if (selectedLabel[i] === "yes") {
            labelAnswers.push(answerOptions[i]);
          }
        }

        if (userData.isLabelled) {
          await changeAnswer(labelAnswers, userId, data.id);
          router.push("/data");
        } else {
          await markAsLabelled(labelAnswers, userId, data.id);

          // remove data from unlabelled data
          const newUnlabelledData = unlabelledData.filter(
            (d) => d.id !== data.id
          );

          const newLabelledData = [...labelledData, data];
          setUnlabelledData(newUnlabelledData);
          setLabelledData(newLabelledData);
          if (newUnlabelledData.length > 0) {
            setData(newUnlabelledData[0]);
            setSelectedLabel(defaultSelectedLabel);

            // router.push("/label");
          } else {
            router.push("/data");
          }
        }
      }
    } catch (error) {
      console.error("Failed to submit label:", error);
    }
  };

  const handleBackClick = () => {
    router.push("/data");
  };

  return (
    <div>
      <Navbar username={username} />
      <Card className="flex justify-center items-center p-8 rounded-none ">
        {isLoading ? (
          <Spin />
        ) : (
          <>
            <div className="flex flex-col text-center">
              <div>
                **Please read the instruction and the examples carefully.**
              </div>
              <div className="flex flex-row justify-between items-center">
                <Button onClick={handleBackClick}>Main Page</Button>
                <h1>{labelledData.length}/30 labelled</h1>
              </div>
            </div>
            <div className="relative">
              <img
                src={data?.url}
                width={400}
                height={400}
                alt="Labelled Image"
                className="block w-[400px] h-[400px] object-cover border border-gray-300 "
              />

              <div
                style={{
                  top: `${data ? data.coordinateY * 400 : 0}px`,
                  left: `${data ? data.coordinateX * 400 : 0}px`,
                }}
                className="absolute w-1 h-1 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
              <div
                style={{
                  top: `${0.8 * 400}px`,
                  left: `${0.2 * 400}px`,
                }}
                className="absolute w-12 h-8 border-green-600  transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.125 * 400}px`,
                }}
                className="absolute w-[100px] h-[40px] bg-white transform border border-gray-300 -translate-x-1/2 -translate-y-1/2 "
              ></div>
              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.125 * 400}px`,
                }}
                className="absolute w-[24px] h-[1px] bg-black transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.125 * 400}px`,
                }}
                className="absolute w-[1px] h-[1px] bg-black transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.115 * 400}px`,
                }}
                className="absolute w-[1px] h-[3px] bg-black transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.135 * 400}px`,
                }}
                className="absolute w-[1px] h-[3px] bg-black transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.095 * 400}px`,
                }}
                className="absolute w-[1px] h-[3px] bg-black transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.95 * 400}px`,
                  left: `${0.155 * 400}px`,
                }}
                className="absolute w-[1px] h-[3px] bg-black transform -translate-x-1/2 -translate-y-1/2"
              />

              <div
                style={{
                  top: `${0.925 * 400}px`,
                  left: `${0.175 * 400}px`,
                  fontSize: "10px",
                }}
                className="absolute w-[100px] h-[2px]transform -translate-x-1/2 -translate-y-1/2"
              >
                30 m (98 ft)
              </div>

              <div
                style={{
                  top: `${0.975 * 400}px`,
                  left: `${0.16 * 400}px`,
                  fontSize: "10px",
                }}
                className="absolute w-[100px] h-[2px]transform -translate-x-1/2 -translate-y-1/2"
              >
                3 School Buses
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              {answerOptionsShow.map((option, index) => (
                // eslint-disable-next-line react/jsx-key
                <div className="flex flex-row border-b-2 my-2 p-1">
                  <div className="pr-6 w-28">{option}</div>
                  <Radio.Group
                    key={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    value={selectedLabel[index]}
                  >
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                  </Radio.Group>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button
                onClick={handleSubmit}
                disabled={selectedLabel?.length === 0}
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default LabelPage;
