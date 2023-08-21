import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetProductsQuery } from "../../admin/productApi";
import { useAppDispatch } from "../../../app/hooks";
import { filterProduct, setProduct } from "../filterSlice";
import AOS from "aos";
const Filter = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // ... các tùy chọn khác
    });
  }, []);
  useEffect(() => {
    dispatch(setProduct(products));
  }, [dispatch, products]);
  const filterSubmit = (data: any) => {
    const { name, calendar, petrol, price } = data;
    dispatch(
      filterProduct({
        name,
        calendar,
        petrol,
        price,
      })
    );
  };
  return (
    <>
      <div className="flex flex-col items-center mt-12" data-aos="fade-up">
        <div className="text-2xl font-bold my-4">
          Which vehicle you are looking for?
        </div>
        <form className="my-4" onSubmit={handleSubmit(filterSubmit)} >
          <input
            type="text"
            placeholder="Type"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
            {...register("name")}
          />
          <input
            type="number"
            min={2000}
            max={2023}
            placeholder="Year"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
            {...register("calendar")}
          />
          <input
            type="text"
            placeholder="Fuel"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
            {...register("petrol")}
          />
          <input
            type="text"
            placeholder="Price"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
            {...register("price")}
          />
          <button className="btn bg-violet-500 text-white py-1 px-4 rounded-md">
            <i className="fas fa-search text-base mr-2"></i>Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Filter;
