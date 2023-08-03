import React from "react";
import { Button, Form, Input } from "antd";
import { IProduct } from "../../../interfaces/products";
import { useAddProductMutation } from "../productSlice";
const AddProducts = () => {
  const [addProduct, { isLoading }] = useAddProductMutation();

  const onFinish = (values: any) => {
    addProduct(values)
    // console.log(values);
    
      .unwrap()
      .then(() => {
        return document.querySelector("#form-add")?.reset();
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
      <Form.Item<IProduct>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập trường name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<IProduct>
        label="Price"
        name="price"
        rules={[{ required: true, message: "Vui lòng nhập trường price!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IProduct>
        label="Miles"
        name="miles"
        rules={[{ required: true, message: "Vui lòng nhập trường miles!" }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item<IProduct>
        label="Images"
        name="images"
        rules={[{ required: true, message: "Vui lòng nhập trường images!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IProduct>
        label="Description"
        name="desc"
        rules={[{ required: true, message: "Vui lòng nhập trường desc!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="bg-bule-500" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProducts;
