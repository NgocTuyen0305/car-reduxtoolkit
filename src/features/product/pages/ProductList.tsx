import {
  BsPersonFill,
  BsFillCalendarEventFill,
  BsFuelPumpDieselFill,
  BsFillCartFill,
} from "react-icons/bs";
import { FaAnchor } from "react-icons/fa";
import { useGetProductsQuery } from "../../admin/productApi";
import { Button, Result, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addItemCart } from "../../cart/cartSlice";
import AOS from 'aos';
import { useEffect } from "react";
const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const { filterProduct } = useAppSelector((state) => state.filterProduct);
  const dispatch = useAppDispatch();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      // ... các tùy chọn khác
    });
  }, []);
  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="text-xl">Loading...</span>
        <Spin />
      </div>
    );
  if (error)
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
   
  return (
    <div className="max-w-6xl mx-auto my-20">
      <div className="text-center my-6">
        <h3 className="text-slate-800 text-3xl font-bold">Car Catalogue</h3>
        <p className="text-gray-500 text-xl my-4">
          Explore car that you might like!
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-6">
        {(filterProduct.length == 0 ? products : filterProduct)?.map(
          (product) => {
            return (
              <div
                className="flex flex-col justify-between h-[420px] p-2 hover:bg-violet-200 rounded-md"
                data-aos="fade-up"
                key={product.id}
              >
                
                <div className="">
                  <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                    <img src={product.images} alt="" />
                  </div>
                  <div className="my-3">
                    <p className="text-2xl font-bold">{product.name}</p>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2 gap-y-5">
                      <div className="flex gap-x-3 items-center">
                        <BsPersonFill className="text-2xl text-gray-400" />
                        <p className="text-gray-400 ">
                          {product.persons} persons
                        </p>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <FaAnchor className="text-2xl text-gray-400" />
                        <p className="text-gray-400 ">{product.anchor}</p>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <BsFillCalendarEventFill className="text-2xl text-gray-400" />
                        <p className="text-gray-400 ">{product.calendar}</p>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <BsFuelPumpDieselFill className="text-2xl text-gray-400" />
                        <p className="text-gray-400 ">{product.petrol}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-bold text-lg">$ {product.price}</div>
                  <div className="">
                    <button
                      className="px-4 py-1 bg-violet-500 text-white rounded-sm flex gap-x-2 items-center"
                      onClick={() =>
                        dispatch(
                          addItemCart({...product, quantily: 1})
                        )
                      }
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
  );
};

export default ProductList;
