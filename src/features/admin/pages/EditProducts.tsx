import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { IProduct } from "../../../interfaces/products";
import { useParams, useNavigate } from "react-router-dom";
import { useAddProductMutation, useGetProductByIdQuery } from "../productApi";

const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const { data: productData, isLoading } = useGetProductByIdQuery(id);
  // console.log(productData);

  const [updateProduct, { isLoading: isUpdateLoading }] =
    useAddProductMutation();
  const [form] = Form.useForm();
  const newData = productData?.find((item: IProduct) => item.id == id);
  useEffect(() => {
    form.setFieldsValue({
      name: newData?.name,
      price: newData?.price,
      miles: newData?.miles,
      images: newData?.images,
      desc: newData?.desc,
    });
  }, [newData]);
  const onFinish = (values: any) => {
    updateProduct(values)
      // console.log(values);
      .unwrap()
      .then(() => {
        return navigate(`/admin/product`);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        form={form}
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
    </div>
  );
};

export default EditProducts;
