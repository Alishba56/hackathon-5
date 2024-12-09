import React from 'react';
import Image from 'next/image';
import img from "@/images/Rectangle 1.png"


const page = () => {
  return (
    <div>
        <div className="w-full h-full">
        <Image
        className="relative  container"
        src={img}
        alt="backgroud"
        />
      <div className="container mx-auto top-48 absolute">
        <h1 className="text-4xl font-bold  text-center mb-4">Cart</h1>
        <p className="text-gray-600 text-center text-2xl">Home &gt; Cart</p>
      </div> 
      </div>
      
    </div>
  )
}

export default page
