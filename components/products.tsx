import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {  Products } from '@/data/appproducts';

const ProductCard: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">Our Products</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {Products.map((product, index) => (index <= 7 &&
          <Link key={index} href={`singlepage/${product.slug}`}>
            <div className="bg-gray-200 w-full sm:w-1/2 md:w-1/3  p-4 lg:w-[300px] rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image src={product.imageSrc} alt={product.name} className="w-full h-56 object-cover" />
                {product.discount && (
                  <div className="absolute top-0 right-0 mt-4 mr-4 border rounded-full bg-red-500 text-white py-2 px-2 text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
                {product?.isNew && (
                  <div className="absolute top-0 left-0 mt-4 ml-4 rounded-full bg-green-500 text-white py-2 px-2 text-sm font-bold">
                    New
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{product.description}</p>
                <div className="flex gap-4">
                  <p className="text-gray-600">{product.price.toLocaleString('id-ID')}</p>
                  {product.offPrice && (
                    <p className="text-gray-600 line-through">{product.offPrice.toLocaleString('id-ID')}</p>
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
