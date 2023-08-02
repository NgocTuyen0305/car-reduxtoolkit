import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { SignIn } from "../../../actions/auth";

const Signin = () => {
  const signSchema = yup.object().shape({
    email: yup.string().required("Vui lòng nhập email").email('Email không hợp lệ'),
    password: yup.string().required("Vui lòng nhập password").min(6,"Password phải ít nhất 6 kí tự")
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signSchema)
  });
  const dispatch = useAppDispatch()
  
  
  const onHandleSubmit = async (data:any)=>{
    // console.log(data);
    await dispatch(SignIn(data));
    document.getElementById("registerForm")?.reset();
  }

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
              <a href="/signup">
                <span className="text-violet-500 font-medium">Sign up</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
