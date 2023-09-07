// import React from "react";

import {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
} from "../features/categories/categoriesApi";
// import { message } from "antd";
// import {
//   BsFillCalendarEventFill,
//   BsFillCartFill,
//   BsFuelPumpDieselFill,
//   BsPersonFill,
// } from "react-icons/bs";
// import { FaAnchor } from "react-icons/fa";
import {SiHyundai, SiMercedes, SiToyota, SiVolkswagen} from 'react-icons/si'
import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { addItemCart } from "../features/cart/cartSlice";
import { getIdCategory } from "../features/categories/categoriesSlice";
import {
  BsPersonFill,
  BsFillCalendarEventFill,
  BsFuelPumpDieselFill,
  BsFillCartFill,
} from "react-icons/bs";
import { Spin, message } from "antd";
import { FaAnchor } from "react-icons/fa";
import { addItemCart } from "../features/cart/cartSlice";
const Categories = () => {
  const dispatch = useAppDispatch();
  const { idCategory } = useAppSelector((state) => state.categoryId);
  const { data: Categories, isLoading, error } = useGetCategoriesQuery();
  const {
    data: Category,
    isLoading: loadingCateById,
    error: errorCategory,
  } = useGetCategoryByIdQuery(idCategory);
  // console.log(Category?.products);
  
  if (loadingCateById)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-xl">Loading...</span>
      <Spin />
    </div>
  );
  const mapIcon = (icon)=>{
    switch (icon) {
      case "SiToyota":
        return <SiToyota />;
      case "SiMercedes":
        return <SiMercedes />;
      case "SiVolkswagen":
        return <SiVolkswagen />;
      case "SiHyundai":
        return <SiHyundai />;
    
      default:
        break;
    }
  }
  return (
    <div className="max-w-6xl mx-auto my-20 flex flex-col gap-y-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold my-3">Popular Cars On Sale</h3>
        <span className="">
          Welcome to the most trusted car discovery portal in India and is
          visited by millions of verified car buyers every month
        </span>
      </div>
      <div className="flex flex-col gap-y-14">
        <div className="grid grid-cols-4 gap-x-6">
          {Categories?.map((category) => {
            return (
              <button
                className="flex justify-center items-center p-1 bg-gray-100 hover:bg-violet-400 hover:text-white transition-all"
                key={category._id}
                onClick={() => {
                  // console.log(category._id);
                  dispatch(getIdCategory(category._id));
                }}
              >
                <span>{mapIcon(category.icon)}</span>
                <span className="text-lg ml-3">{category.name}</span>
              </button>
            );
          })}
        </div>
        <div className=" grid grid-cols-4 gap-6">
        {(Category?.products)?.map(
          (product) => {
            return (
              <div
                className="flex flex-col justify-between h-[350px] p-2 hover:bg-violet-200 rounded-md shadow-md"
                data-aos="zoom-in-down"
                key={product._id}
              >
                <div className="">
                  <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <img src={product.images} alt="" />
                  </div>
                  <div className="my-3">
                    <p className="text-xl font-bold">{product.name}</p>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 gap-y-5">
                      <div className="flex gap-x-3 items-center">
                        <BsPersonFill className="text-xl text-gray-400" />
                        <p className="text-gray-400 ">
                          {product.persons} persons
                        </p>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <FaAnchor className="text-xl text-gray-400" />
                        <p className="text-gray-400 ">{product.anchor}</p>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <BsFillCalendarEventFill className="text-xl text-gray-400" />
                        <p className="text-gray-400 ">{product.calendar}</p>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <BsFuelPumpDieselFill className="text-xl text-gray-400" />
                        <p className="text-gray-400 ">{product.petrol}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-lg">$ {product.price}</div>
                  <div className="">
                    <button
                      className="px-3 py-1 bg-violet-500 text-white rounded-sm flex gap-x-2 items-center"
                      onClick={() => {
                        dispatch(addItemCart({ ...product, quantily: 1 }));
                        message.success("Đã thêm vào giỏ hàng!");
                      }}
                    >
                      Add to cart <BsFillCartFill />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      </div>
    </div>
  );
};

export default Categories;
