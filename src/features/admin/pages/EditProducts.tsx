// import React, { useEffect } from "react";
// import { Button, Form, Input } from "antd";
// import { IProduct } from "../../../interfaces/products";
// import { useParams } from "react-router-dom";
// import { useAddProductMutation, useGetProductByIdQuery } from "../productSlice";
// const EditProducts = () => {
//   const { idProduct } = useParams<{ idProduct: string | number }>();
//   const { data: productData, isLoading } = useGetProductByIdQuery(
//     idProduct || ""
//   );
//   const [updateProduct, { isLoading: isUpdateLoading }] =
//     useAddProductMutation();
//   const [form] = Form.useForm();
//   useEffect(() => {
//     form.setFieldValue({
//       name: productData?.name,
//       price: productData?.price,
//       miles: productData?.miles,
//       images: productData?.images,
//       desc: productData?.desc,
//     });
//   }, [productData]);
//   const onFinish = (values: any) => {
//     // addProduct(values)
//     // console.log(values);
//     // .unwrap()
//     // .then(() => {
//     //   return document.querySelector("#form-add")?.reset();
//     // });
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };
//   return (
//     <div>
//       <Form
//         form={form}
//         name="basic"
//         labelCol={{ span: 4 }}
//         wrapperCol={{ span: 18 }}
//         style={{ maxWidth: 600 }}
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//         id="form-add"
//       >
//         <Form.Item<IProduct>
//           label="Name"
//           name="name"
//           rules={[{ required: true, message: "Vui lòng nhập trường name" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item<IProduct>
//           label="Price"
//           name="price"
//           rules={[{ required: true, message: "Vui lòng nhập trường price!" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item<IProduct>
//           label="Miles"
//           name="miles"
//           rules={[{ required: true, message: "Vui lòng nhập trường miles!" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item<IProduct>
//           label="Images"
//           name="images"
//           rules={[{ required: true, message: "Vui lòng nhập trường images!" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item<IProduct>
//           label="Description"
//           name="desc"
//           rules={[{ required: true, message: "Vui lòng nhập trường desc!" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button className="bg-bule-500" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default EditProducts;
