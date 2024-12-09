import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PiCirclesFourFill } from "react-icons/pi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";


const lable = () => {
  return (
    <div className="flex items-center justify-around  bg-[#F9F1E7] p-4">
    <div className="flex items-center gap-4">
      <button className="text-gray-500 flex  hover:text-gray-700">
        <  HiAdjustmentsHorizontal className="w-6 h-6" />
         
        <span className="ml-2">Filter</span>
      </button>
      <button className="text-gray-500 hover:text-gray-700">
      <PiCirclesFourFill />
      </button>
      <button className=" flex  items-center text-gray-500 hover:text-gray-700">
      <TbLayoutDistributeHorizontal/>|
      </button>
    </div>

    <div className="text-xl text-gray-500">
      Showing 1-16 of 32 results
    </div>

    <div className="flex gap-5">
      <button className=''>Show  <span className="border border-gray-300 p-2 text-gray-500 bg-gray-100 rounded hover:bg-gray-100">16</span></button>
      <button >Short by <span className="border border-gray-300 p-2 rounded text-gray-500 bg-gray-100 hover:bg-gray-100">Default</span></button>
  
    </div>
  </div>
  )
}

export default lable
