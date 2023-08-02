import React from "react";

const Filter = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <div className="text-2xl font-bold my-4">
          Which vehicle you are looking for?
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Type"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
          />
          <input
            type="number"
            min={2000}
            max={2023}
            placeholder="Year"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
          />
          <input
            type="text"
            placeholder="Model"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
          />
          <input
            type="number"
            placeholder="Price"
            className="mx-3 outline-1 outline-violet-500 p-1 border border-gray-300 rounded-md text-violet-500"
          />
          <button className="btn bg-violet-500 text-white py-1 px-4 rounded-md">
            <i className="fas fa-search text-base mr-2"></i>Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
