import React, { useState } from "react";
import { Popconfirm, Result, Skeleton, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button, Modal } from "antd";
import AddProducts from "./AddProduct";
import { useGetProductsQuery, useRemoveProductMutation } from "../productSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import EditProducts from "./EditProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();
  const [removeProduct, { isLoading: isRemoveLoading }] =
    useRemoveProductMutation();
  // console.log(error);

  if (isLoading) return <Skeleton />;
  if (error)
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      render: ({ key: id }: any) => (
        <Space size="middle">
          <Popconfirm
            placement="topLeft"
            title={"Bạn có muốn xóa?"}
            onConfirm={() => removeProduct(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              {isRemoveLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                "Delete"
              )}
            </Button>
          </Popconfirm>
          <Button type="link" className="ml-2">
            <Link to={`/admin/product/${id}/edit`}>Edit</Link>
          </Button>
        </Space>
      ),
    },
  ];
  const dataSoucre = data?.map(({ id, name, miles, desc, images, price }) => {
    return {
      key: id,
      name,
      miles,
      desc,
      images,
      price,
    };
  });
  // console.log(dataSoucre);
  //addPRODUCT

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center my-6">
          <div className="">
          <span className="text-2xl font-bold">Product Management</span>
          </div>
          <div className="">
          <Button
          type="primary"
          onClick={showModal}
          className="bg-violet-500 mt-6"
        >
          ADD NEW
        </Button>
        <Modal
          title="Add New Product"
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <AddProducts />
        </Modal>
          </div>
        </div>
        <Table columns={columns} dataSource={dataSoucre} />
        
      </div>
    </>
  );
};

export default Products;
