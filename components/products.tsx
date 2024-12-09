// ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { products } from '@/data/products';



const ProductCard = () => {
  return (
    <div className="max-w-7xl  mx-auto">
    <h1 className=' justify-center text-5xl font-bold my-20'>Our product</h1>
    <div className='flex flex-wrap gap-10 justify-between'>
       
    {products.map((product, index)=>(
        <div key={index} className="bg-gray-200 w-[18%] h-[10%]  rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <Image src={product.imageSrc} alt={product.name} className="w-[100%] h-56 object-cover" />
        {product.discount && (
          <div className="absolute top-0 right-5 mt-6 rounded-full bg-red-500 text-white  py-2 px-1 font-bold">
            -{product.discount}%
          </div>
        )}
        {product?.isNew && (
          <div className="absolute top-0 right-5 mt-6 rounded-full bg-green-500 text-white py-2 px-1 font-bold">
            New
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
        <h3 className="text-lg text-gray-400 mb-2 ">{product.describe}</h3>
<div className='flex gap-4'> 
        <p className="text-gray-600 ">{product.price.toLocaleString('id-ID')}</p>
        <p className="text-gray-600 line-through">{product.offPrice?.toLocaleString('id-ID') }</p>
        </div>
      </div>
    </div>
    ))}
      
    </div>
      <button
          className="bg-white ml-[45%] border  border-[#B88E2F] text-[#B88E2F] font-bold py-3 px-10 rounded mt-10">
          Add to Cart
        </button> 
    </div>
    
  );
};

export default ProductCard;