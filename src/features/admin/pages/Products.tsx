import React, { useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../interfaces/products";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Button, Modal } from "antd";
import AddProducts from "./AddProduct";
interface DataType {
  key: string;
  name: string;
  images: string;
  price: string;
  miles: number;
  desc: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Images",
    dataIndex: "images",
    key: "images",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Miles",
    dataIndex: "miles",
    key: "miles",
  },
  {
    title: "Desc",
    dataIndex: "desc",
    key: "desc",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];


const data: IProduct[] = [];
const Products = () => {
  // const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: any) => state.productsAdmin);
  console.log(products);
//addPRODUCT
const [isModalOpen, setIsModalOpen] = useState(false);

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Button type="primary" onClick={showModal} className="bg-violet-500 mt-6">
        ADD NEW
      </Button>
      <Modal
        title="Add New Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddProducts/>
      </Modal>
    </>
  );
};

export default Products;
