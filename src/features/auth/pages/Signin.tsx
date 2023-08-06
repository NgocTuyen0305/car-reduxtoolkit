import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link,useNavigate } from "react-router-dom";
import { useSigninMutation } from "../authApi";
import { Spin, notification } from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { setToken, setUser } from "../authSlice";
import { signSchema } from "../../../schemas/authSchema";
const Signin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signSchema),
  });
  const [signin, { isLoading, error, data }] = useSigninMutation();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-xl">Đợi tao chút...</span>
        <Spin />
      </div>
    );
  const successSignin = () => {
    notification.success({
      message: "Đăng nhập thành công",
      description: "Bạn đã đăng nhập thành công tài khoản.",
    });
  };
  const errorSignin = () => {
    notification.error({
      message: "Đăng nhập thất bại",
      description: "Vui lòng đăng nhập lại.",
    });
  };
  if (error) errorSignin();

  const onHandleSubmit = async (data: any) => {
    const reponse = await signin(data).unwrap();
    successSignin();
    document.getElementById("registerForm")?.reset()
    if(reponse.accsetToken){
      dispatch(setToken(reponse.accsetToken));
      dispatch(setUser(reponse.user));
      // navigate(`/admin`)
    }
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
          onSubmit={handleSubmit(onHandleSubmit)}
          id="registerForm"
        >
          <div className="flex flex-col gap-y-3">
            <label htmlFor="">Email</label>
            <input
              type="Email"
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
          <div className="mt-6 flex justify-between items-center">
            <button
              className="border border-violet-500 rounded-sm py-1 px-4 bg-violet-500 text-white hover:bg-gray-100 hover:text-violet-500 transition-all"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <div className="">
              <span>Don't have account?</span>
              <Link to={`/signup`}>
                <span className="text-violet-500 font-medium">Sign up</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
