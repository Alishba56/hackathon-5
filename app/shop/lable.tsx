
import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PiCirclesFourFill } from "react-icons/pi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";

const Lable: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F1E7] p-4">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <button className="text-gray-500 flex items-center hover:text-gray-700">
          <HiAdjustmentsHorizontal className="w-6 h-6" />
          <span className="ml-2">Filter</span>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <PiCirclesFourFill />
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <TbLayoutDistributeHorizontal />|
        </button>
      </div>

      <div className="text-lg md:text-xl text-gray-500 mb-4 md:mb-0">
        Showing 1-16 of 32 results
      </div>

      <div className="flex gap-2 md:gap-5">
        <button className="flex items-center gap-1">
          Show <span className="border border-gray-300 p-2 text-gray-500 bg-gray-100 rounded hover:bg-gray-200">16</span>
        </button>
        <button className="flex items-center gap-1">
          Sort by <span className="border border-gray-300 p-2 rounded text-gray-500 bg-gray-100 hover:bg-gray-200">Default</span>
        </button>
      </div>
    </div>
  );
}

export default Lable;
