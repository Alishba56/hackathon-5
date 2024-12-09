import React from "react";
import Image from "next/image";
import background from "@/images/scandinavian-interior-mockup-wall-decal-background 1 (1).png"

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-wrap items-center justify-between bg-gray-50">
      {/* Left Section - Background with Image */}
      <div className=" sm:h-[20%]  w-full">
        <Image
          src={background}
          alt="Room and Furniture"
          className="w-full "
        />
      </div>

      {/* Right Section - Content Card */}
      <div className="absolute ml-[60%] w-[35%] bg-[#FFF3E3] p-8 rounded-lg shadow-md">
        <p className="text-sm font-semibold text-black uppercase">New Arrival</p>
        <h1 className="mt-4 text-4xl font-bold text-yellow-700 leading-tight">
          Discover Our New Collection
        </h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-10 py-4 text-white bg-yellow-700 hover:bg-yellow-600 font-medium rounded">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
