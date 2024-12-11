

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import img1 from "@/images/Images (1).png"
import img3 from '@/images/Images (3).png'
import img2 from "@/images/Images (8).png"
import img4 from "@/images/Images (2).png"
import Link from 'next/link';

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
  <div className="border rounded-lg w-full sm:w-[20%] md:w-1/3 lg:w-[300px] p-4 shadow-lg">
    <Link href={link}>
      <div className="relative">
        <Image src={imageSrc} alt={name} className="w-full h-52 object-cover rounded-t-lg" />
        {discount && (
          <span className="absolute top-2 right-2 rounded-full bg-red-500 text-white py-1 px-2 text-xs font-bold">
            {discount}
          </span>
        )}
        {isNew && (
          <span className="absolute top-2 left-2 rounded-full bg-green-500 text-white py-1 px-2 text-xs font-bold">
            New
          </span>
        )}
      </div>
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
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">1</button>
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">2</button>
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">3</button>
      <button className="px-4 py-2 mx-1 bg-gray-200 rounded">Next</button>
    </div>
  </div>
);

export default ProductList;
