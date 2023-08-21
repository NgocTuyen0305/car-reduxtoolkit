import React, { useEffect } from "react";
import AOS from "aos";
const Slide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      // ... các tùy chọn khác
    });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center pt-8 my-5">
        <div className="text-2xl text-gray-300 py-2">Meet you new car</div>
        <div className="font-bold text-4xl py-2" data-aos="fade-up">
          Honda Civic Type R
        </div>
        <div className="py-2">
          <button
            className="mx-3 py-2 px-4 rounded-sm bg-gray-200 shadow-md"
            data-aos="fade-up"
          >
            More Details
          </button>
          <button
            className="mx-3 py-2 px-4 rounded-sm bg-violet-500 text-white shadow-md"
            data-aos="fade-up"
          >
            Test Drive
          </button>
        </div>
        <div className="">
          <img
            src="images/honda-civic-2023-1.png"
            alt=""
            className="w-[500px]"
            data-aos="fade-up"
          />
        </div>
      </div>
    </>
  );
};

export default Slide;
