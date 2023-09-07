import { Button, Popconfirm, Select, Space, Table, notification,Modal } from "antd";
import React, { useState } from "react";
import { AiFillDelete, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery, useRemoveCategoryMutation } from "../categoriesApi";
import { Option } from "antd/es/mentions";
import AddCategory from "./AddCategory";
const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError } = useGetCategoriesQuery();
  const [removeCategory,{isLoading:loadingRemove, isSuccess}] = useRemoveCategoryMutation()
  // console.log(data);
  if(isSuccess){
    notification.success({
      message: "Xóa thành công!"
    })
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: (data, record) => (
        // console.log(record)
        
        <Select
          placeholder="Select categories"
        >
          {record?.products?.map(product => {
            return <Option value={product}>{product}</Option>
          })}
        </Select>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: ({ key: id }: any) => (
        <Space size="middle">
          <Popconfirm
            placement="topLeft"
            title={"Bạn có muốn xóa?"}
            onConfirm={() => removeCategory(id)}
            okText="Yes"
            cancelText="No"
            id="form-add"
          >
            <Button danger>
              {loadingRemove ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <AiFillDelete className="text-xl" />
              )}
            </Button>
          </Popconfirm>
          <Button type="link" className="ml-2">
            <Link to={`/admin/categories/${id}`}>
              <FaEdit className="text-xl" />
            </Link>
          </Button>
        </Space>
      ),
    },
  ];
  const dataSource = data?.map(({ _id, name,icon, products }) => {
    return {
      key: _id,
      name: name,
      icon: icon,
      products: products,
    };
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="my-6">
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
              title="Add New Category"
              open={isModalOpen}
              onCancel={handleCancel}
            >
              <AddCategory />
            </Modal>
          </div>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Categories;
