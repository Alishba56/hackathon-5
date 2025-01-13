"use client"
import React, { useState } from "react";
import Image from "next/image";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Link from "next/link";
import { Product } from "@/data/appproducts";

const ProductDetails = ({ props }: { props: Product }) => {
  const [quantity, setQuantity] = useState(props.quantity); // State for quantity
  const [selectedSize, setSelectedSize] = useState(props.sizes[0]); // State for selected size
  const [totalPrice, setTotalPrice] = useState(props.price * props.quantity); // State for total price

  const sizePriceMap: { [key: string]: number } = {
    [props.sizes[0]]: 1, // No price adjustment for the base size
    [props.sizes[1]]: 1.2, // 20% price increase for the second size
    [props.sizes[2]]: 1.5, // 50% price increase for the third size
  };

  const updatePrice = (newSize: string) => {
    const multiplier = sizePriceMap[newSize];
    setSelectedSize(newSize);
    setTotalPrice(multiplier * props.price * quantity);
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => {
        const newQuantity = prev + 1;
        setTotalPrice(sizePriceMap[selectedSize] * props.price * newQuantity);
        return newQuantity;
      });
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        setTotalPrice(sizePriceMap[selectedSize] * props.price * newQuantity);
        return newQuantity;
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between lg:items-start lg:w-1/2">
          <div className="flex flex-col gap-5 w-[10%] sm:ml-10 ml-1 ">
            {props.thumbnails.map((item, index) => (
              <Image key={index} src={item} alt="adf" />
            ))}
          </div>
          <Image
            src={props.imageSrc}
            alt={props.name}
            className="w-[60%] sm:mr-20 mr-10 h-[80%] mb-4 rounded"
          />
        </div>
        <div className="lg:w-1/2 mt-20 lg:pl-8">
          <h1 className="sm:text-4xl text-2xl font-bold mb-2">{props.name}</h1>
          <div className="text-3xl text-gray-300 mb-4">
            Rs. {totalPrice.toLocaleString()}
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">
              {`⭐`.repeat(Math.floor(props.rating))}
            </span>
            <span className="ml-2 text-gray-300 items-center flex">
              <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
              {props.reviews} Customer Reviews
            </span>
          </div>
          <p className="text-gray-800 mb-4 pr-32">{props.description}</p>
          <div className="mb-4">
            <h1 className=" text-gray-700">Size:</h1>
            {props.sizes.map((size, index) => (
              <button
                key={index}
                className={`mt-1 mx-1 sm:w-[8%] w-[13%] py-2 px-3 border ${
                  selectedSize === size
                    ? "border-black bg-[#B88E2F]"
                    : "border-gray-300 bg-[#F9F1E7]"
                } rounded-md`}
                onClick={() => updatePrice(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="mb-4 space-x-2">
            <h1 className=" text-gray-700">Color:</h1>
            <button className="mt-1 w-10 h-10 py-2 px-3 border border-gray-300 bg-purple-900 rounded-full"></button>
            <button className="mt-1 w-10 h-10 py-2 px-3 border border-gray-300 bg-black rounded-full"></button>
            <button className="mt-1 w-10 h-10 py-2 px-3 border border-gray-300 bg-[#B88E2F] rounded-full"></button>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-10">
            <div className="border py-3 w-32 flex justify-around items-center border-gray-300 rounded-md">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="text-2xl font-bold"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="text-2xl font-bold"
              >
                +
              </button>
            </div>
            <div className="flex gap-6">
              <Link href="/carts">
                <button className="bg-white text-black py-3 px-6 rounded-md border border-black">
                  Add to Cart
                </button>
              </Link>
              <button className="bg-white text-black py-3 px-6 rounded-md border border-black">
                + Compare
              </button>
            </div>
          </div>
          <hr className="my-10" />
          <div className="mt-4">
            <div className="text-gray-400 items-center mt-2 ">
              SKU : <span className="pl-16"> {props.sku}</span>
            </div>
            <div className="text-gray-400 mt-2">
              Category: <span className="pl-12 "> {props.category}</span>
            </div>
            <div className="text-gray-400 mt-2">
              Tags: <span className="pl-20 "> {props.tags.join(", ")}</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <h1 className="text-gray-400 mt-2">Share : </h1>
            <button className="pl-14">
              <FaFacebook />
            </button>
            <button className="">
              <FaLinkedin />
            </button>
            <button className="">
              <IoLogoTwitter />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default ProductDetails;
