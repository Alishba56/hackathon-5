"use client"
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import img from '@/images/Group 95.png'
import img1 from '@/images/Group 94.png'
import img2 from '@/images/Mask group (2).png'
import img3 from '@/images/Mask group (3).png'
import img4 from '@/images/Mask group (4).png'

import { PiLineVerticalThin } from 'react-icons/pi';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";



interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  quantity: number;
  sku: string;
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  imageSrc: StaticImageData;
  thumbnails: StaticImageData[];
}

const product: Product = {
  name: 'Asgaard sofa',
  price: 250000,
  description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
  rating: 4.5,
  reviews: 5,
  quantity:1,
  sku: 'SS001',
  category: 'Sofas',
  tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  sizes: ['L', 'XL', 'XS'],
  colors: ['purple', 'black', 'yellow'],
  imageSrc: img,
  thumbnails: [img1, img2,img3,img4],
};

const ProductDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(product.imageSrc);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Images */}
        <div className="flex  items-center justify-between lg:items-start lg:w-1/2">
        <div className="flex flex-col gap-5 ">
            {product.thumbnails.map((thumb, index) => (
              <Image
                key={index}
                src={thumb}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-28 ml-5  bg-[#F9F1E7]  h-24 object-cover cursor-pointer rounded"
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>    
          <Image src={selectedImage} alt={product.name} className="w-[60%] mr-20 h-[80%] mb-4 rounded" />
          
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 mt-20 lg:pl-8">
          <h1 className="sm:text-4xl text-2xl font-bold mb-2">{product.name}</h1>
          <div className="text-3xl text-gray-300  mb-4">Rs. {product.price.toLocaleString()}</div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">{`⭐`.repeat(Math.floor(product.rating))}</span>
            <span className="ml-2 text-gray-300 items-center flex"><PiLineVerticalThin className='text-gray-300 text-4xl'/> {product.reviews} Costomer Reviews</span>
          </div>
          <p className="text-gray-800 mb-4 pr-32">{product.description}</p>
          
          <div className="mb-4">
            <h1 className=" text-gray-700">Size:</h1>
            <button  className="mt-1  mx-2  w-[5%] py-2 px-3 border border-gray-300 bg-white rounded-md">
             {product.sizes[0]} </button>
             <button  className="mt-1 mx-1  w-[6%] py-2 px-3 border border-gray-300 bg-white rounded-md">
             {product.sizes[1]} </button>
             <button  className="mt-1 mx-1  w-[6%] py-2 px-3 border border-gray-300 bg-white rounded-md">
             {product.sizes[2]} </button>
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
            <h1 className=' border py-3 w-24 flex justify-around  items-center border-gray-300 rounded-md '>- <span className=''>{product.quantity}</span> +</h1>

            <button className="bg-white text-black py-3 px-12 rounded-md border border-black">Add to Cart</button>
            <button className="bg-white text-black py-3 px-12 rounded-md border border-black">+ Compare</button>
          </div>
          <hr className='my-10'/>
          <div className="mt-4">
            <div className="text-gray-400 items-center mt-2 ">SKU : <span className='pl-16'> {product.sku}</span></div>
            <div className="text-gray-400 mt-2">Category: <span className='pl-12 '> {product.category}</span></div>
            <div className="text-gray-400 mt-2">Tags: <span className='pl-20 '> {product.tags.join(', ')}</span></div>
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
