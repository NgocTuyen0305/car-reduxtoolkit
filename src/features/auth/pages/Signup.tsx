
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useSignupMutation } from "../authApi";
import { Spin } from "antd";
import { notification } from "antd";
import { Link } from "react-router-dom";
import { singupSchema } from "../../../schemas/authSchema";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(singupSchema),
  });
  const [singup, { isLoading, error }] = useSignupMutation();
  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-xl">Đợi tao chút...</span>
        <Spin />
      </div>
    );
  const successSignup = () => {
    notification.success({
      message: "Đăng kí thành công",
      description: "Bạn đã đăng kí thành công tài khoản.",
    });
  };
  if (error) {
    notification.error({
      message: "Đăng kí thất bại",
      description: "Email hoặc username đã tồn tại",
    });
  }
  const onSubmit = async (data: any) => {
    await singup(data)
      .unwrap()
      .then(() => {
        successSignup();
        document.getElementById("registerForm")?.reset();
      });
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
              <Link to={`/signin`}>
                <span className="text-violet-500 font-medium">Sign in</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
