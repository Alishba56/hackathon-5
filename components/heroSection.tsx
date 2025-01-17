
import React from 'react';
import Image from 'next/image';
import { heroData } from '@/data/herodata';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3] my-10 pt-0 h-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pt-20 px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{heroData.title}</h1>
            <p className="text-lg md:text-2xl mb-9">{heroData.description}</p>
            <Link
              href={heroData.buttonLink}
              className="bg-[#B88E2F] hover:bg-[#B88E2F] text-white font-bold py-3 px-6 md:py-5 md:px-7 rounded"
            >
              {heroData.buttonText}
            </Link>
          </div>
          <div className="w-full md:w-1/2   pt-10 flex flex-wrap gap-8  overflow-x-scroll hide-scrollbar">

            <div className="relative w-[1300px]  flex gap-8 ">
              <div className="relative w-[800px]">
                <Image
                  src={heroData.images[0]} alt="Hero Image" className="shadow-md w-full h-auto"/>

                <h1 className="bg-white opacity-70 absolute bottom-4 left-4 px-4 py-8 text-black text-xl">
                  01 <span className="text-gray-500">____</span> Bed Room <br />
                  <span className="font-bold text-2xl">Inner peace</span>
                </h1>
              </div>
              <FaArrowRight   className='bg-[#B88E2F] text-5xl absolute bottom-4 left-[220px] px-2 py-2 text-white  '/>
                {heroData.images.map((image, index) => (
                  <div key={index} className="w-[600px]">

                    <Image
                    
                      src={image} alt="Hero Image" className="shadow-md w-full h-auto mt-4 md:mt-0"/>
                  </div>
                ))}
             
             <SlArrowRight />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
