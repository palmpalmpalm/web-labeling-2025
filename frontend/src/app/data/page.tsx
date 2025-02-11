"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Table, Button, Card, Divider, Typography, Spin, Modal } from "antd";
import {
  getLabelledDataByUsername,
  getMe,
  getRedeemCode,
  getUnlabelledDataByUsername,
} from "@/api/user";
import Navbar from "@/components/navbar";
import { useAtom } from "jotai";
import {
  DataItem,
  RedeemCode,
  dataAtom,
  labelledDataAtom,
  unlabelledDataAtom,
} from "@/atom/data-atom";
import moment from "moment";
import { ColumnType } from "antd/lib/table";

const { Title } = Typography;

const paginationConfig = {
  pageSize: 5,
};

const DataPage: React.FC = () => {
  const router = useRouter();
  const [unlabelledData, setUnlabelledData] = useAtom(unlabelledDataAtom);
  const [labelledData, setLabelledData] = useAtom(labelledDataAtom);
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useAtom(dataAtom);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [redeemCodes, setRedeemCodes] = useState<RedeemCode[]>([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onStartLabelingClickHandler = () => {
    if (unlabelledData?.length > 0) {
      setData(unlabelledData[0]);
      router.push("/label");
    } else {
      alert("No more data to label.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("isLogin")) {
        router.push("/login");
      }
    }
  }, [router]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const res = await getMe();
        setUsername(res.data.username);

        const unlabelledData = await getUnlabelledDataByUsername(
          res.data.username
        );
        setUnlabelledData(unlabelledData.data);

        const labelledData = await getLabelledDataByUsername(res.data.username);
        setLabelledData(labelledData.data);

        const redeemCodes = await getRedeemCode(res.data.id);
        setRedeemCodes(redeemCodes.data);

        setIsLoading(false);
      } catch {
        router.push("/login");
      }
    };

    fetchAllData();
  }, [router]);

  const handleLabelData = (dataItem: DataItem) => {
    setData(dataItem);
    router.push("/label");
  };

  const handleEditLabelData = (dataItem: DataItem) => {
    setData(dataItem);
    router.push("/label");
  };

  // const unlabelledDataColumns: ColumnType<DataItem>[] = [
  //   { title: "Data Id", dataIndex: "title", key: "title", width: "10%" },
  //   {
  //     title: "URL",
  //     dataIndex: "url",
  //     key: "url",
  //     width: "20%",
  //     render: (url: string) => (
  //       // eslint-disable-next-line @next/next/no-img-element
  //       <img src={url} width={100} height={100} alt="Unlabelled Image" />
  //     ),
  //   },
  //   {
  //     title: "Coordinate X",
  //     dataIndex: "coordinateX",
  //     key: "coordinateX",
  //     width: "5%",
  //   },
  //   {
  //     title: "Coordinate Y",
  //     dataIndex: "coordinateY",
  //     key: "coordinateY",
  //     width: "5%",
  //   },
  //   {
  //     title: "Created At",
  //     dataIndex: "createdAt",
  //     key: "createdAt",
  //     width: "20%",
  //     render: (createdAt: string) =>
  //       moment(createdAt).format("YYYY-MM-DD HH:mm:ss"),
  //   },
  //   {
  //     title: "Updated At",
  //     dataIndex: "updatedAt",
  //     key: "updatedAt",
  //     width: "20%",
  //     render: (updatedAt: string) =>
  //       moment(updatedAt).format("YYYY-MM-DD HH:mm:ss"),
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     width: "20%",
  //     render: (data: DataItem) => (
  //       <Button type="link" onClick={() => handleLabelData(data)}>
  //         Label
  //       </Button>
  //     ),
  //   },
  // ];

  const labelledDataColumns: ColumnType<DataItem>[] = [
    // { title: "Data Id", dataIndex: "title", key: "title", width: "10%" },
    {
      title: "Image",
      dataIndex: "url",
      key: "url",
      width: "50%",
      render: (url: string) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} width={200} height={200} alt="Labelled Image" />
      ),
    },
    // {
    //   title: "Coordinate X",
    //   dataIndex: "coordinateX",
    //   key: "coordinateX",
    //   width: "5%",
    // },
    // {
    //   title: "Coordinate Y",
    //   dataIndex: "coordinateY",
    //   key: "coordinateY",
    //   width: "5%",
    // },
    // {
    //   title: "Created At",
    //   dataIndex: "createdAt",
    //   key: "createdAt",
    //   width: "20%",
    //   render: (createdAt: string) =>
    //     moment(createdAt).format("YYYY-MM-DD HH:mm:ss"),
    // },
    // {
    //   title: "Updated At",
    //   dataIndex: "updatedAt",
    //   key: "updatedAt",
    //   width: "20%",
    //   render: (updatedAt: string) =>
    //     moment(updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    // },
    {
      title: "Action",
      key: "action",
      width: "50%",
      render: (data: DataItem) => (
        <Button type="link" onClick={() => handleEditLabelData(data)}>
          Edit Label
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div>
        <Navbar username={username} />
        <Card className="flex justify-center items-center p-8 rounded-none">
          <>
            <div className="flex flex-col  text-center">
              <div>
                **Please read the instruction and the examples carefully.**
              </div>
              <div className="flex justify-between relative items-end">
                <Button onClick={showModal}>Redeem Code</Button>
                <div className="flex flex-col">
                  <span>{labelledData.length}/30 labeled</span>
                  <Button
                    className="bg-blue-500"
                    type="primary"
                    onClick={onStartLabelingClickHandler}
                  >
                    Start Labeling
                  </Button>
                </div>
              </div>
            </div>
            <Modal
              title="Redeem Code"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{
                style: { backgroundColor: "#1890ff", borderColor: "#1890ff" },
              }}
            >
              {redeemCodes.map((redeemCode) => (
                <p key={redeemCode.code}>{redeemCode.code}</p>
              ))}
            </Modal>
          </>
          {/* <div className="text-center mb-6">
            <Title level={4}>Unlabelled Data</Title>
          </div>
          {isLoading ? (
            <Spin />
          ) : (
            <Table
              columns={unlabelledDataColumns}
              dataSource={unlabelledData}
              rowKey="id"
              pagination={paginationConfig}
            />
          )}

          <Divider /> */}

          <div className="text-center mt-6">
            <Title level={4}>Labeled Data</Title>
          </div>
          {isLoading ? (
            <Spin />
          ) : (
            <Table
              columns={labelledDataColumns}
              dataSource={labelledData}
              rowKey="id"
              pagination={paginationConfig}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default DataPage;
