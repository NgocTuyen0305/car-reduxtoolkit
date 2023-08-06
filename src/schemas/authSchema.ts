import * as yup from "yup";
export const signSchema = yup.object().shape({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email không hợp lệ"),
  password: yup
    .string()
    .required("Vui lòng nhập password")
    .min(6, "Password phải ít nhất 6 kí tự"),
});
export const singupSchema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập tên đăng nhập."),
  email: yup
    .string()
    .required("Vui lòng nhập email.")
    .email("Email không hợp lệ."),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu.")
    .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự."),
  confirmPassword: yup
    .string()
    .required("Vui lòng xác nhận mật khẩu.")
    .oneOf(
      [yup.ref("password")],
      "Mật khẩu xác nhận phải giống với mật khẩu đã nhập."
    ),
});
