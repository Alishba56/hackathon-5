import React from 'react';
import Image from 'next/image';
import img from "@/images/Rectangle 1.png"
import logo from "@/images/Logos.png";
import Link from 'next/link';



const page = () => {
  return (
    <div>
       <div className="relative w-full h-64 md:h-96">
        <Image className="w-full h-full object-cover" src={img} alt="background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image className="mb-5" src={logo} alt="logo" width={80} height={80} />
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Cart</h1>
          <p className="text-gray-600 text-center text-sm md:text-2xl"><Link href="/">Home</Link> <span>&gt;</span>Cart</p>
        </div>
      </div>
      
    </div>
  )
}

export default page
