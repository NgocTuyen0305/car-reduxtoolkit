import React from "react";
import { useAppSelector } from "../app/hooks";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth.users);
  // const name = users.user.username;
  // console.log(user);
  return (
    <>
      <div className="flex justify-between bg-violet-200 items-center py-4 px-6">
        <div className="">
          <a href="/">
            <i className="fas fa-car text-2xl text-violet-500"></i>
          </a>
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
        <div className="">
          {user ? (
            <div className="">
              <span className="font-bold">Hello: </span>
              <span className="font-bold text-violet-500">{user.username}</span>
            </div>
          ) : (
            <a href="signup">
              <button className="btn bg-violet-500 rounded-md p-1 text-white">
                Sign Up
              </button>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
