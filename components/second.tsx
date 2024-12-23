
import React from "react";
import Image from "next/image";
import background from "@/images/scandinavian-interior-mockup-wall-decal-background 1 (1).png";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-10">
      {/* Background with Image */}
      <div className="w-full h-72 md:h-[50%] lg:h-[70vh] overflow-hidden">
        <Image
          src={background}
          alt="Room and Furniture"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content Card */}
      <div className="absolute  bottom-10 flex h-[60%] items-center justify-center md:justify-start lg:ml-[50%] p-4 md:p-8 lg:w-[40%] bg-[#FFF3E3] bg-opacity-90 rounded-lg shadow-md">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-black uppercase">New Arrival</p>
          <h1 className="mt-4 text-2xl md:text-4xl font-bold text-yellow-700 leading-tight">
            Discover Our New Collection
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href='/shop'>
          <button className="mt-6 px-6 md:px-10 py-3 md:py-4 text-white bg-yellow-700 hover:bg-yellow-600 font-medium rounded">
            Buy Now
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

