import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { IProduct } from "../../../interfaces/products";
import {
  BsArrowUpSquareFill,
  BsFillArrowDownSquareFill,
  BsFillCalendarEventFill,
  BsFuelPumpDieselFill,
  BsPersonFill,
} from "react-icons/bs";
import { FaAnchor } from "react-icons/fa";
import { decrease, increase } from "../cartSlice";
import { AiFillDollarCircle, } from "react-icons/ai";
import { notification } from "antd";

const CartProduct = () => {
  const { items } = useAppSelector((state) => state.cart);
  const {isLoggedIn} = useAppSelector((state)=> state.Authentication)
  const dispatch = useAppDispatch()
  // console.log(items);

  return (
    <div>
      <div className="">
        {items?.map((item) => {
          return (
            <div className="flex justify-between bg-gray-100 rounded-md items-center p-2 my-2" key={item.id}>
              <div className="">
                <img src={item.images} alt="" className="w-24" />
              </div>
              <div className="">
                <div className="flex justify-between gap-x-3 items-center text-center my-2">
                  <h3 className="text-base font-bold">{item.name}</h3>
                  <span className="flex items-center">{item.price * item.quantily}<AiFillDollarCircle className="text-lg text-green-500"/></span>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex gap-x-3 items-center">
                    <BsPersonFill className=" text-gray-400" />
                    <p className="text-gray-400 ">{item.persons} persons</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <FaAnchor className=" text-gray-400" />
                    <p className="text-gray-400 ">{item.anchor}</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <BsFillCalendarEventFill className=" text-gray-400" />
                    <p className="text-gray-400 ">{item.calendar}</p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <BsFuelPumpDieselFill className=" text-gray-400" />
                    <p className="text-gray-400 ">{item.petrol}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex justify-between">
                  <button onClick={()=> dispatch(increase(item.id))}>
                    <BsArrowUpSquareFill className="text-2xl text-blue-500" />
                  </button>
                  <p>{item.quantily}</p>
                  <button onClick={()=> dispatch(decrease(item.id))}>
                    <BsFillArrowDownSquareFill className="text-2xl text-red-500" />
                  </button>
                </div>
                <div className="">
                  <button className="bg-violet-200 px-3 py-1 rounded-sm" onClick={()=> {
                    if(!isLoggedIn){
                      return notification.warning({
                        message: "Bạn chưa đăng nhập không thể thực hiện chức năng",
                      })
                    }
                  }}>
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartProduct;
