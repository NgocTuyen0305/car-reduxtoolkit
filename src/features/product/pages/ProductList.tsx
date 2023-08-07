
import { useGetProductsQuery } from "../../admin/productApi";
import { IProduct } from "../../../interfaces/products";
import { Button, Result, Spin } from "antd";
import { useAppSelector } from "../../../app/hooks";

const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const { filterProduct } = useAppSelector((state) => state.filterProduct);
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
    <div className="max-w-6xl mx-auto my-20 grid grid-cols-3 gap-6">
      {(filterProduct.length == 0 ? products : filterProduct)?.map((item: IProduct) => {
        return (
          <div
            className=" hover:bg-violet-200 p-6 rounded-lg transition-all"
            key={item.id}
          >
            <div className="h-[350px] flex flex-col justify-between gap-y-3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
              <div className="">
                <div className="">
                  <img src={`${item.images}`} alt="" className="rounded-md" />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl">{item.name}</h2>
                  <span className="text-gray-500">{item.miles} Miles</span>
                </div>
              </div>
              <div className="">
                <div className="">
                  <h3 className="font-bold">{item.desc}</h3>
                </div>
                <div className="">
                  <button className="bg-violet-300 text-violet-600 py-2 px-4 rounded-sm mr-2 font-bold">
                    {item.price}
                  </button>
                  <button className="text-gray-600 bg-gray-300 hover:bg-violet-300 hover:text-violet-600 transition-all py-2 px-4 rounded-sm ml-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
