import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import CartProduct from "../features/cart/pages/CartProduct";
const Header = () => {
  const { user } = useAppSelector((state) => state.Authentication);
  const { items } = useAppSelector((state) => state.cart);
  // console.log(user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={`flex justify-between bg-violet-200 items-center py-4 px-6 sticky top-0 left-0 right-0`}>
        <div className="">
          <Link to={`/`}>
            <i className="fas fa-car text-2xl text-violet-500"></i>
          </Link>
        </div>
        <div className="">
          <ul className="flex justify-evenly">
            <li className="py-2 px-4 text-gray-500">
              <a href="">Used Cars</a>
            </li>
            <li className="py-2 px-4 text-gray-500">
              <a href="">New Cars</a>
            </li>
            <li className="py-2 px-4 text-gray-500">
              <a href="">Autison</a>
            </li>
            <li className="py-2 px-4 text-gray-500">
              <a href="">Sell</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-3">
          <div
            className="bg-violet-500 flex items-center rounded-md gap-x-2 px-2 cursor-pointer"
            onClick={showModal}
          >
            <ShoppingCartOutlined className="text-2xl text-white " />
            <div className="text-white">{items.length}</div>
          </div>
          <div className="">
            {user ? (
              <div className="">
                <span className="font-bold">Hello: </span>
                <span className="font-bold text-violet-500">
                  {user?.username}
                </span>
              </div>
            ) : (
              <Link to={`signup`}>
                <button className="btn bg-violet-500 rounded-md p-1 text-white">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="CAR CART"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CartProduct />
      </Modal>
    </>
  );
};

export default Header;
