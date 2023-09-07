import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useAddCategoryMutation } from "../categoriesApi";
const AddCategory = () => {
  const [addCategory, { isLoading, isSuccess }] = useAddCategoryMutation();
  const onFinish = (values: any) => {
    addCategory(values)
      .unwrap()
      .then(() =>
        notification.success({
          message: "Thêm category thành công!",
        })
      ).then(() => {
        return document.querySelector("#form-add")?.reset();
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        id="form-add"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Icon"
          name="icon"
          rules={[{ required: true, message: "Please input your icon!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
