import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification } from "antd";
const openSuccessNotification = () => {
  notification.success({
    message: "Đăng ký thành công",
    description: "Bạn đã đăng ký thành công tài khoản.",
  });
};
const successSignin = () => {
  notification.success({
    message: "Đăng nhập thành công",
    description: "Bạn đã đăng nhập thành công tài khoản.",
  });
};
const openErrorNotification = () => {
  notification.error({
    message: "Đăng ký Thất bại",
    description: "Tài khoản đã tồn tại.",
  });
};

export const SignUp = createAsyncThunk("auth/signup", async (user) => {
  const { data } = await axios.post(`http://localhost:3000/auth/signup`, user);
  if (data) {
    openSuccessNotification();
    return data;
  } openErrorNotification();
});
export const SignIn = createAsyncThunk("auth/signin", async (user) => {
  const { data } = await axios.post(`http://localhost:3000/auth/signin`, user);
  if (data) {
    successSignin();
    return data;
  } openErrorNotification();
});
