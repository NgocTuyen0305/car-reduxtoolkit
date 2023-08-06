import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
const Header = () => {
  const { user } = useAppSelector((state) => state.Authentication);
  // console.log(user);

  return (
    <>
      <div className="flex justify-between bg-violet-200 items-center py-4 px-6">
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
        <div className="">
          {user ? (
            <div className="">
              <span className="font-bold">Hello: </span>
              <span className="font-bold text-violet-500">{user.username}</span>
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
    </>
  );
};

export default Header;
