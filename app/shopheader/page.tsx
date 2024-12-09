import React from 'react';
import Image from 'next/image';
import img from "@/images/Rectangle 1.png"

import Lable from './lable';
import Products from './products';
import Features from './banner';



const ShopHeader = () => {
  return (
   <div className="w-full h-full">
        <Image
        className="relative  container"
        src={img}
        alt="backgroud"
        />
      <div className="container mx-auto top-48 absolute">
        <h1 className="text-4xl font-bold  text-center mb-4">Shop</h1>
        <p className="text-gray-600 text-center text-2xl">Home &gt; Shop</p>
      </div> 
<Lable/>
<Products/>
<Features/>
     
</div>

  );
};

export default ShopHeader;