

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import img1 from "@/images/Images (1).png"
import img3 from '@/images/Images (3).png'
import img2 from "@/images/Images (8).png"
import img4 from "@/images/Images (2).png"
import Link from 'next/link';
import { CiShare2 } from 'react-icons/ci';
import { MdCompareArrows } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  isNew?: boolean;
  imageSrc: StaticImageData;
  link:string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500,
    originalPrice: 3500,
    discount: '-30%',
    imageSrc: img1,
    link: 'singlepage/syltherine',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500,
    imageSrc: img2,
    link: 'singlepage/leviosa',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000,
    originalPrice: 14000,
    discount: '-50%',
    imageSrc: img3,
    link: 'singlepage/lolito',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500,
    isNew: true,
    imageSrc: img4,
    link: 'singlepage/respira',
  },
];

const ProductCard: React.FC<Product> = ({
  name,
  description,
  price,
  originalPrice,
  discount,
  isNew,
  imageSrc,
  link,
}) => (
  <div className="relative group">

    <Link href={link}>
      <div className="hidden group-hover:block  sm:w-1/3 md:w-[300px] lg:w-[300px]  duration-500 z-20 w-full h-full justify-center absolute    ">
              <div className='absolute z-20 w-full h-[91%] top-0  bg-gray-900  opacity-50'></div>
              <div className=' absolute z-30 top-0 w-full h-full'>
                <Link href='/carts'>
                <button className='bg-white text-yellow-700 font-bold py-3 text-2xl  mt-28 md:ml-12 ml-9  px-7'>Add to Carts</button>

                </Link>
           
            
             <div className="flex mt-10  gap-7 md:ml-4 ml-0">
                 <button className=' text-white font-bold gap-2 flex items-center opacity-100'><CiShare2 /> Share</button>
                 <button className=' flex text-white font-bold gap-2 items-center '> <MdCompareArrows /> Compare</button>
                 <Link href=''>  <button className=' text-white flex font-bold gap-2 items-center'>  <FaRegHeart /> Like</button> </Link>
             </div>
             </div>
            </div>
  <div className="bg-gray-200  sm:w-1/ md:w-[300px] mb-10  p-4 lg:w-[300px]  shadow-md overflow-hidden">

        <Image src={imageSrc} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
        {discount && (
          <span className="absolute top-0 right-8 mt-4 border rounded-full bg-red-500 text-white h-10 w-10 flex justify-center items-center text-sm font-bold">
            {discount}
          </span>
        )}
        {isNew && (
          <span className="absolute top-0 right-8 mt-4  rounded-full bg-green-500 text-white h-10 w-10 text-sm font-bold flex justify-center items-center">
            New
          </span>
        )}
    
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold">${price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
            </div>
        </div>
      </div>
    </Link>
  </div>
);

const ProductList: React.FC = () => (
  <div className=" mx-auto p-4">
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div> <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
    <div className="flex justify-center mt-10">
      <button className="px-4 py-2 mx-1 bg-[#B88E2F] text-white rounded ">1</button>
      <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded">2</button>
      <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded">3</button>
      <button className="px-4 py-2 mx-1 bg-[#F9F1E7] rounded">Next</button>
    </div>
  </div>
);

export default ProductList;
