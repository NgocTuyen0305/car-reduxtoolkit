import React from "react";

const Slide = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-8 my-5">
        <div className="text-2xl text-gray-300 py-2">Meet you new car</div>
        <div className="font-bold text-4xl py-2">Honda Civic Type R</div>
        <div className="py-2">
          <button className="mx-3 py-2 px-4 rounded-sm bg-gray-200 shadow-md">More Details</button>
          <button className="mx-3 py-2 px-4 rounded-sm bg-violet-500 text-white shadow-md">Test Drive</button>
        </div>
        <div className="">
          <img src="images/honda-civic-2023-1.png" alt="" className="w-[500px]"/>
        </div>
      </div>
    </>
  );
};

export default Slide;
