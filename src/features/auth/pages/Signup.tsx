   
import { SignUp } from "../../../actions/auth";
import { useAppDispatch } from "../../../app/hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Signup = () => {
  const singupSchema = yup.object().shape({
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(singupSchema),
  });

  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {
    await dispatch(SignUp(data));
    document.getElementById("registerForm")?.reset();
  };
  return (
    <>
     <div className="max-w-lg mx-auto my-12 flex flex-col gap-y-8 ">
        <div className="">
          <h1 className="font-bold text-2xl">Sign In</h1>
        </div>
        <form
          action=""
          className=""
          onSubmit={handleSubmit(onSubmit)}
          id="registerForm"
        >
          <div className="flex flex-col gap-y-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="border-2 rounded-sm outline-violet-500 py-1 pl-2 text-violet-500"
              {...register("username")}
              placeholder="name..."
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3 mt-6">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="border-2 rounded-sm outline-violet-500 py-1 pl-2 text-violet-500"
              {...register("email")}
              placeholder="email..."
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3 mt-6">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="border-2 rounded-sm outline-violet-500 py-1 pl-2 text-violet-500"
              {...register("password")}
              placeholder="password..."
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-y-3 mt-6">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              className="border-2 rounded-sm outline-violet-500 py-1 pl-2 text-violet-500"
              {...register("confirmPassword")}
              placeholder="confirmPassword..."
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              className="border border-violet-500 rounded-sm py-1 px-4 bg-violet-500 text-white hover:bg-gray-100 hover:text-violet-500 transition-all"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <div className="">
              <span>Already have an account?</span>
              <a href="/signin">
                <span className="text-violet-500 font-medium">Sign in</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
