import React from "react";
import img from "@/images/Rectangle 1.png";
import img3 from "@/images/Group 94.png";
import logo from "@/images/Logos.png";

import Image from "next/image";
import { PiLineVerticalThin } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";
import img2 from "@/images/Group 95.png";
import Features from "../shop/banner";
 const page = () => {
  return (
    <div>
      <div className="relative w-full h-64 md:h-96">
        <Image className="w-full h-full object-cover" src={img} alt="background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image className="mb-5" src={logo} alt="logo" width={80} height={80} />
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Comparison</h1>
          <p className="text-gray-600 text-center text-sm md:text-2xl">Home &gt; Comparison</p>
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap justify-around mt-10">
        <div className="mt-20">
          <h1 className="text-2xl font-bold ">
            Go to Product <br />page for more <br />Products
          </h1>
          <button className="  border-b-[3px] border-gray-500   mb-10 mt-10 text-2xl">
            View More 
          </button>
        </div>
        <div className="flex space-y-6 flex-col justify-center">
          <Image
            className=""
            src={img2}
            height={100}
            width={200}
            alt="Product Comparison"
      
          />
          <h1 className="mt-4 text-2xl font-bold">Asgaard Sofa</h1>
          <h1 className="text-2xl font-bold">Rs. 250,000.00</h1>
          <h1 className="flex ">
            {" "}
            4.7 ⭐⭐⭐⭐{" "}
            <PiLineVerticalThin className="text-gray-300 text-4xl" /> 204
            Reviews{" "}
          </h1>
        </div>
        <div className=" items-center space-y-6">
          <Image
            className=""
            src={img3}
            height={100}
            width={200}
            alt="Product Comparison"
          />
          <h1 className=" mt-4 text-2xl font-bold">Outdoor Sofa set</h1>
          <h1 className="text-2xl font-bold">Rs. 224,000.00</h1>
            <div className="flex items-center mb-4">
                      <span className="text-yellow-500 text-2xl">
                        
                      </span>
                      <span className="ml-2 text-gray-300 items-center flex">
                        <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
                     Costomer Reviews
                      </span>
                    </div>
        </div>
        <div className=" mt-20">
          <h1 className="text-2xl font-bold ">Add A Product</h1>
          <button className="flex items-center gap-10 bg-[#B88E2F] p-2 px-8 rounded-1xl mt-2">
         
            Choose a Product <SlArrowDown />
          </button>
        </div>
      </div>
      <div className="">
        <hr className="py-4" />
        <div className="flex flex-wrap">
          <div className=" m-20">
            <h1 className="font-bold text-2xl ml-5">General</h1>

            <h1 className="p-4">Sales Package</h1>
            <h1 className="p-4">Model Number</h1>
            <h1 className="p-4">Secondary Material</h1>
            <h1 className="p-4">Configuration</h1>
            <h1 className="p-4">Upholstery Material</h1>
            <h1 className="p-4">Upholstery Color</h1>
          </div>
          <div className=" m-20 mt-32">
            <h1 className="p-4">1 sectional sofa</h1>
            <h1 className="p-4">TFCBLIGRBL6SRHS</h1>
            <h1 className="p-4">Secondary Material</h1>
            <h1 className="p-4">L-shaped</h1>
            <h1 className="p-4">Fabric + Cotton</h1>

            <h1 className="p-4">Bright Grey & Lion</h1>
          </div>
          <div className=" m-20 mt-32">
            <h1 className="p-4">1 Three Seater, 2 Single Seater</h1>
            <h1 className="p-4">DTUBLIGRBL568</h1>

            <h1 className="p-4">Solid Wood</h1>
            <h1 className="p-4">L-shaped</h1>
            <h1 className="p-4">Fabric + Cotton</h1>
            <h1 className="p-4">Bright Grey & Lion</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[25] m-24">
            <h1 className="font-bold text-2xl ml-5">Product </h1>
            <h1 className="p-4">Filling Material</h1>
            <h1 className="p-4">Finish Type</h1>
            <h1 className="p-4">Adjustable Headrest</h1>
            <h1 className="p-4">Maximum Load Capacity</h1>
            <h1 className="p-4">Origin of Manufacture</h1>
          </div>{" "}
          <div className="w-[25] m-24 mt-32">
            <h1 className="p-4">Foam</h1>
            <h1 className="p-4">Bright Grey & Lion</h1>
            <h1 className="p-4">No</h1>
            <h1 className="p-4">280 KG</h1>
            <h1 className="p-4">India</h1>
          </div>{" "}
          <div className="w-[25] m-24 mt-32">
            <h1 className="p-4">Matte</h1>
            <h1 className="p-4">Bright Grey & Lion</h1>
            <h1 className="p-4">yes</h1> <h1 className="p-4">300 KG</h1>
            <h1 className="p-4">India</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[25] m-24">
            <h1 className="font-bold text-2xl ml-5">Dimensions</h1>
            <h1 className="p-4">Width</h1>
            <h1 className="p-4">Height</h1>
            <h1 className="p-4">Depth</h1>
            <h1 className="p-4">Weight</h1>
            <h1 className="p-4">Seat Height</h1>
            <h1 className="p-4">Leg Height</h1>
          </div>
          <div className="w-[25] m-24 mt-32">
            <h1 className="p-4">265.32 cm</h1>
            <h1 className="p-4">76 cm</h1> <h1 className="p-4">167.76 cm</h1>{" "}
            <h1 className="p-4">45 KG</h1> <h1 className="p-4">41.52 cm</h1>{" "}
            <h1 className="p-4">5.46 cm</h1>{" "}
          </div>{" "}
          <div className="w-[25] m-24 mt-32">
            {" "}
            <h1 className="p-4">265.32 cm</h1> <h1 className="p-4">76 cm</h1>{" "}
            <h1 className="p-4">167.76 cm</h1> <h1 className="p-4">45 KG</h1>{" "}
            <h1 className="p-4">41.52 cm</h1> <h1 className="p-4">5.46 cm</h1>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Features />{" "}
    </div>
  );
};
export default page;