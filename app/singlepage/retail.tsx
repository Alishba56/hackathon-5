import { StaticImageData } from 'next/image';
import React from 'react'
import img from "@/images/Mask Group (1).png"
import Image from 'next/image';

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
  
  const retailProduct: Product[] = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      price: 2500,
      originalPrice: 3500,
      discount: '-30%',
      imageSrc: img,
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      price: 2500,
      imageSrc: img,
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      price: 7000,
      originalPrice: 14000,
      discount: '-50%',
      imageSrc: img,
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 500,
      isNew: true,
      imageSrc: img,
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
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}
          </span>
        )}
        {isNew && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
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
  
const productsList = () => {
 
    <div className="flex justify-center  flex-wrap gap-16">
    {retailProduct.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))} 
    
  </div>
}

export default productsList  ;
