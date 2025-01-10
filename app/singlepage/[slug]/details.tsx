import React from 'react';
import Image from 'next/image';
import { PiLineVerticalThin } from 'react-icons/pi';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoTwitter } from 'react-icons/io5';
import Link from 'next/link';
import { Product } from '@/data/appproducts';

interface ProductDetailsProps {
  props: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ props }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between lg:items-start lg:w-1/2">
          <div className="flex flex-col gap-5 w-[10%] ml-10">
            {props.thumbnails.map((item, index) => (
              <Image key={index} src={item} alt="adf" className="w-full" /> 
            ))}
          </div>
          <Image
            src={props.imageSrc}
            alt={props.name}
            className="w-full lg:w-3/4 h-auto max-h-96 object-contain rounded" 
          />
        </div>
        <div className="lg:w-1/2 mt-20 lg:pl-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{props.name}</h1>
          <div className="text-2xl text-gray-300 mb-4">
            Rs. {props.price.toLocaleString()}
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-2xl">
              {`⭐`.repeat(Math.floor(props.rating))}
            </span>
            <span className="ml-2 text-gray-300 items-center flex">
              <PiLineVerticalThin className="text-gray-300 text-4xl" />{' '}
              {props.reviews} Costomer Reviews
            </span>
          </div>
          <p className="text-gray-800 mb-4">{props.description}</p>

          <div className="mb-4">
            <h1 className="text-gray-700">Size:</h1>
            {props.sizes.map((size) => (
              <button 
                key={size} 
                className="mt-1 mx-2 py-2 px-3 border border-gray-300 bg-white rounded-md"
              >
                {size}
              </button>
            ))}
          </div>
          <div className="mb-4">
            <h1 className="text-gray-700">Color:</h1>
            {props.colors.map((color) => ( 
              <button 
                key={color} 
                className={`mt-1 w-10 h-10 py-2 px-3 border border-gray-300 rounded-full ${color}`} 
              />
            ))}
          </div>
          <div className="mb-4 flex items-center gap-10">
            <div className="flex items-center border py-3 w-24 border-gray-300 rounded-md">
              <button className="p-2">-</button>
              <span className="mx-2">{props.quantity}</span>
              <button className="p-2">+</button>
            </div>

            <Link href="/carts">
              <button className="bg-white text-black py-3 px-12 rounded-md border border-black">
                Add to Cart
              </button>
            </Link>
            <button className="bg-white text-black py-3 px-12 rounded-md border border-black">
              + Compare
            </button>
          </div>
          <hr className="my-10" />
          <div className="mt-4">
            <div className="text-gray-400">
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
