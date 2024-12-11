"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Products } from "@/data/appproducts"
import { PiLineVerticalThin } from 'react-icons/pi';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import Link from 'next/link';




const ProductDetails=() => {
  const [selectedImage, setSelectedImage] = useState(Products.imageSrc);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Images */}
        <div className="flex  items-center justify-between lg:items-start lg:w-1/2">
        <div className="flex flex-col gap-5 ">
            {Products.thumbnails.map((thumb: string, index: number) => (
              <Image
                key={index}
                src={thumb}
                alt={`${Products.name} thumbnail ${index + 1}`}
                className="w-28 ml-5  bg-[#F9F1E7]  h-24 object-cover cursor-pointer rounded"
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>    
          <Image src={selectedImage} alt={Products.name} className="w-[60%] mr-20 h-[80%] mb-4 rounded" />
          
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 mt-20 lg:pl-8">
          <h1 className="sm:text-4xl text-2xl font-bold mb-2">{Products.name}</h1>
          <div className="text-3xl text-gray-300  mb-4">Rs. {Products.price.toLocaleString()}</div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">{`⭐`.repeat(Math.floor(Products.rating))}</span>
            <span className="ml-2 text-gray-300 items-center flex"><PiLineVerticalThin className='text-gray-300 text-4xl'/> {Products.reviews} Costomer Reviews</span>
          </div>
          <p className="text-gray-800 mb-4 pr-32">{Products.description}</p>
          
          <div className="mb-4">
            <h1 className=" text-gray-700">Size:</h1>
            <button  className="mt-1  mx-2  w-[5%] py-2 px-3 border border-gray-300 bg-white rounded-md">
             {Products.sizes[0]} </button>
             <button  className="mt-1 mx-1  w-[6%] py-2 px-3 border border-gray-300 bg-white rounded-md">
             {Products.sizes[1]} </button>
             <button  className="mt-1 mx-1  w-[6%] py-2 px-3 border border-gray-300 bg-white rounded-md">
             {Products.sizes[2]} </button>
          </div>
          <div className="mb-4">
            <h1 className=" text-gray-700">Color:</h1>
            <button className="mt-1  w-10 h-10 py-2 px-3 border border-gray-300 bg-purple-900 rounded-full">
           
            </button>
            <button className="mt-1  w-10 h-10 py-2 px-3 border border-gray-300 bg-black rounded-full">
           
            </button>
            <button className="mt-1  w-10 h-10 py-2 px-3 border border-gray-300 bg-[#B88E2F] rounded-full">
           
            </button>
          </div>
          <div className="mb-4 flex items-center gap-10">
            <h1 className=' border py-3 w-24 flex justify-around  items-center border-gray-300 rounded-md '>- <span className=''>{Products.quantity}</span> +</h1>

           <Link href="/carts"> <button className="bg-white text-black py-3 px-12 rounded-md border border-black">Add to Cart</button></Link>
            <button className="bg-white text-black py-3 px-12 rounded-md border border-black">+ Compare</button>
          </div>
          <hr className='my-10'/>
          <div className="mt-4">
            <div className="text-gray-400 items-center mt-2 ">SKU : <span className='pl-16'> {Products.sku}</span></div>
            <div className="text-gray-400 mt-2">Category: <span className='pl-12 '> {Products.category}</span></div>
            <div className="text-gray-400 mt-2">Tags: <span className='pl-20 '> {Products.tags.join(', ')}</span></div>
          </div>
          <div className=" flex space-x-4">
            <h1 className="text-gray-400 mt-2">Share : </h1>
            <button className="pl-14"><FaFacebook/></button>
            <button className=""><FaLinkedin /></button>
            <button className=""><IoLogoTwitter /></button>
          </div>
        </div>
      </div>
      <hr className='my-10'/>
    </div>
  );
};

export default ProductDetails;
