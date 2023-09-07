import React, { useState } from "react";
import { Popconfirm, Result, Skeleton, Space, Table, notification } from "antd";

import { Button, Modal } from "antd";
import AddProducts from "./AddProduct";
import { useGetProductsQuery, useRemoveProductMutation } from "../productApi";
import { AiFillDelete, AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IProduct } from "../../../interfaces/products";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, isLoading } = useGetProductsQuery();
  const [removeProduct, { isLoading: isRemoveLoading, error: errorRemove }] =
    useRemoveProductMutation();
  // console.log(data);
  if (!data)
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
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
  if(errorRemove){
    notification.warning({
        message: "Bạn không có quyền truy cập!"
      })
  }
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
      title: "Persons",
      dataIndex: "persons",
      key: "persons",
    },
    {
      title: "Calendar",
      dataIndex: "calendar",
      key: "calendar",
    },
    {
      title: "Petrol",
      dataIndex: "petrol",
      key: "petrol",
    },
    {
      title: "Anchor",
      dataIndex: "anchor",
      key: "anchor",
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
                <AiFillDelete className="text-xl" />
              )}
            </Button>
          </Popconfirm>
          <Button type="link" className="ml-2">
            <Link to={`/admin/products/${id}`}>
              <FaEdit className="text-xl" />
            </Link>
          </Button>
        </Space>
      ),
    },
  ];
  const dataSoucre = data?.map(
    ({ _id, name, persons, calendar, images, price, petrol, anchor }) => {
      return {
        key: _id,
        name,
        persons,
        calendar,
        images,
        price,
        petrol,
        anchor,
      };
    }
  );
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
