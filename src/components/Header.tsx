import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Modal, Popconfirm } from "antd";
import CartProduct from "../features/cart/pages/CartProduct";
import { AiOutlineLogout } from "react-icons/ai";
import { logout, setToken, setUser } from "../features/auth/authSlice";
const Header = () => {
  const { user } = useAppSelector((state) => state.Authentication);
  const { items } = useAppSelector((state) => state.cart);
  // console.log(user);
  const dispatch = useAppDispatch();
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
      <div
        className={` bg-violet-200  py-4 px-6 sticky top-0 left-0 right-0`}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="">
            <Link to={`/`}>
              {user ? (
                <span className="text-xl font-bold text-violet-500">
                  {user?.name}
                </span>
              ) : (
                <span className="text-xl font-bold text-violet-500">
                  CarHome
                </span>
              )}
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
          <div className="flex items-center gap-x-4">
            <div className="" onClick={showModal}>
              <Badge count={items.length}>
                <ShoppingCartOutlined className="text-xl" />
              </Badge>
            </div>
            <div className="">
              {user ? (
                <div className="">
                  <Popconfirm
                    title="Đăng xuất tài khoản?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => {
                      dispatch(logout());
                      dispatch(setUser(null));
                      dispatch(setToken(null));
                    }}
                  >
                    <button className="flex items-center text-lg font-normal text-violet-500">
                      <AiOutlineLogout />
                      Logout
                    </button>
                  </Popconfirm>
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
