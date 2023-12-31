import React, { useEffect } from "react";
import { Button, Form, Input, Select, Spin, notification } from "antd";
import { IProduct } from "../../../interfaces/products";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../productApi";
import { Option } from "antd/es/mentions";
import { useGetCategoriesQuery } from "../../categories/categoriesApi";

const EditProducts = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { data: productById, isLoading, error } = useGetProductByIdQuery(id);
  const { data: category, isLoading: loadingCategory } =
    useGetCategoriesQuery();
  const [updateProduct, { isLoading: isUpdateLoading, error: errorUpdate }] =
    useUpdateProductMutation();
  // const productById = data?.product;
  // console.log(productById);

  useEffect(() => {
    form.setFieldsValue({
      name: productById?.name,
      price: productById?.price,
      images: productById?.images,
      persons: productById?.persons,
      calendar: productById?.calendar,
      petrol: productById?.petrol,
      anchor: productById?.anchor,
      categoryId: productById?.categoryId,
    });
  }, [productById]);

  if (isUpdateLoading)
    return (
      <div className="flex justify-center items-center">
        Loading...
        <Spin />
      </div>
    );
    if (errorUpdate) {
      notification.warning({
        message: "Bạn không có quyền truy cập!",
      });
    }

  const onFinish = (values: any) => {
    // console.log(values);
    updateProduct({ ...values, id })
      .unwrap()
      .then(() => {
        return notification.success({
          message: "Cập nhật thành công"
        });
      }).then(()=>{
        navigate(`/admin/products`)
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
          rules={[
            { required: true, message: "Vui lòng nhập trường calendar!" },
          ]}
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
          label="Category"
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
    </div>
  );
};

export default EditProducts;
