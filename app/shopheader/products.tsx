import React from 'react';
import Image, { StaticImageData } from 'next/image';
import img1 from "@/images/Images (1).png"
import img3 from '@/images/Images (3).png'
import img2 from "@/images/Images (8).png"

import img4 from "@/images/Images (2).png"

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  isNew?: boolean;
  imageSrc: StaticImageData;
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
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500,
    imageSrc: img2,
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000,
    originalPrice: 14000,
    discount: '-50%',
    imageSrc: img3,
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500,
    isNew: true,
    imageSrc: img4,
  },
  // Add more products as needed
];

const ProductCard: React.FC<Product> = ({
  name,
  description,
  price,
  originalPrice,
  discount,
  isNew,
  imageSrc,
}) => (
  <div className="border rounded-lg  w-[17%] mt-6 h-full shadow-lg">
    <div className="relative ">
      <Image
       src={imageSrc}
        alt={name}
         className="w-[100%] h-52 object-cover" />
      {discount && (
        <span className="absolute top-0 right-5 mt-6 rounded-full bg-red-500 text-white  py-2 px-1 font-bold">
          {discount}
        </span>
      )}
      {isNew && (
        <span className="absolute top-0 right-5 mt-6 rounded-full bg-green-500 text-white py-2 px-1 font-bold">
          New
        </span>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="mt-2">
        <span className="text-xl font-bold">${price.toLocaleString()}</span>
        {originalPrice && (
          <span className="text-gray-500 line-through ml-2">
            ${originalPrice.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ProductList: React.FC = () => (
  <div className=" mx-auto p-4">
    <div className="flex justify-center  flex-wrap gap-16">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))} 
      
    </div>
    <div className="flex justify-center  flex-wrap gap-16">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))} 
      
    </div>
    <div className="flex justify-center  flex-wrap gap-16">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))} 
      
    </div>

    <div className="flex justify-center  flex-wrap gap-16">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))} 
      
    </div>
    <div className="flex justify-center my-10">
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">1</button>
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">2</button>
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">3</button>
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">Next</button>
    </div>
  </div>
);

export default ProductList;

