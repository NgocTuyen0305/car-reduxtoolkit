import React from "react";
import Slide from "../components/Slide";
import Filter from "../components/Filter";
import ProductList from "../features/product/pages/ProductList";


const Homepage = () => {
  return (
    <>
     <div className="">
      <Slide/>
      <Filter/>
      <ProductList/>
      </div>
    </>
  );
};

export default Homepage;
