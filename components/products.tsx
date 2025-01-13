import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {  Products } from '@/data/appproducts';
import { CiShare2 } from 'react-icons/ci';
import { MdCompareArrows } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

const ProductCard: React.FC = () => {
  return (
    <div className="p-4 px-10 my-16">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">Our Products</h1>
      <div className="flex  lg:flex-wrap gap-5 justify-around overflow-x-scroll hide-scrollbar  ">
        {Products.map((product, index) => (index <= 7 &&
          <Link key={index} href={`/singlepage/${product.slug}`} className='relative group'>

            <div className="hidden group-hover:block  sm:w-[250px] md:w-[300px]  lg:w-[300px] duration-500 z-20 w-full h-full justify-center absolute    ">
              <div className='w-full h-full top-0  bg-gray-900  opacity-50'></div>
              <div className=' absolute z-30 top-0 w-full h-full'>
                <Link href='/carts'>
                <button className='bg-white text-yellow-700 font-bold py-3 text-2xl  mt-28 sm:ml-12 ml-5   px-7'>Add to Carts</button>

                </Link>
           
            
             <div className="flex mt-10 justify-around ">
                 <button className=' text-white font-bold gap-2 flex items-center opacity-100'><CiShare2 /> Share</button>
                 <button className=' flex text-white font-bold gap-2 items-center '> <MdCompareArrows /> Compare</button>
                 <Link href=''>  <button className=' text-white flex font-bold gap-2 items-center'>  <FaRegHeart /> Like</button> </Link>
             </div>
             </div>
            </div>

            <div className="bg-gray-200 w-[250px] sm:w-[250px] md:w-[300px]  lg:w-[300px]  shadow-md overflow-hidden">
              <div className="relative">
                <Image src={product.imageSrc} alt={product.name} className="w-full h-72 object-cover" />
                {product.discount && (
                  <div className="absolute top-0 right-8 mt-4 border rounded-full bg-red-500 text-white h-10 w-10 flex justify-center items-center text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
                {product?.isNew && (
                  <div className="absolute top-0 right-8 mt-4  rounded-full bg-green-500 text-white h-10 w-10 text-sm font-bold flex justify-center items-center">
                    New
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{product.description}</p>
                <div className="flex gap-4">
                  <p className="text-gray-600">${product.price.toLocaleString('id-ID')}</p>
                 {product.offPrice && (
                    <p className="text-gray-600 line-through">${product.offPrice.toLocaleString('id-ID')}</p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/shop">
          <button className="bg-white border border-[#B88E2F] text-[#B88E2F] font-bold py-3 px-10 rounded">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
