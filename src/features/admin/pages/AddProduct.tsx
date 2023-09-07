import React from "react";
import { Button, Form, Input, Select, notification } from "antd";
import { IProduct } from "../../../interfaces/products";
import { useAddProductMutation } from "../productApi";
import { Option } from "antd/es/mentions";
import { useGetCategoriesQuery } from "../../categories/categoriesApi";
const AddProducts = () => {
  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const { data: category, isLoading: loadingCategory } =
    useGetCategoriesQuery();
  if (error) {
    notification.warning({
      message: "Bạn không có quyền truy cập!",
    });
  }
  const onFinish = (values: any) => {
    // console.log(values);
    addProduct(values)
      .unwrap()
      .then(() => {
        return notification.success({
          message: "Cập nhật thành công",
        });
      })
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
        label="Images"
        name="images"
        rules={[{ required: true, message: "Vui lòng nhập trường images!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IProduct>
        label="Persons"
        name="persons"
        rules={[{ required: true, message: "Vui lòng nhập trường persons!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<IProduct>
        label="Calendar"
        name="calendar"
        rules={[{ required: true, message: "Vui lòng nhập trường calendar!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IProduct>
        label="Petrol"
        name="petrol"
        rules={[{ required: true, message: "Vui lòng nhập trường petrol!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<IProduct>
        label="Anchor"
        name="anchor"
        rules={[{ required: true, message: "Vui lòng nhập trường anchor!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="categoryId"
        label="CategoryId"
        rules={[{ required: true }]}
      >
        <Select placeholder="Vui lòng chọn hãng xe hơi" allowClear>
          {category?.map((item) => {
            return (
              <Option value={item.categoryId} key={item._id}>
                {item.name}
              </Option>
            );
          })}
        </Select>
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
