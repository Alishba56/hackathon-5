// // HeroSection.tsx
// import React from 'react';
// import Image from 'next/image';
// import { heroData } from '@/data/herodata';
// import Link from 'next/link';


// const HeroSection = () => {
//   return (
//     <section className="bg-[#FCF8F3] my-10 pt-0 h-screen ">
//       <div className="container mx-auto ">
//         <div className="flex flex-col md:flex-row  ">
        
//           <>
//           <div className=" items-center w-full pt-52 mx-16 md:w-[50%]">
//             <h1 className="text-5xl font-bold mb-4">{heroData.title}</h1>
//             <p className="text-2xl mb-9">{heroData.description}</p>
//             <Link
//               href={heroData.buttonLink}
//               className="bg-[#B88E2F] hover:bg-[#B88E2F] text-white font-bold py-5 px-7  rounded"
//             >
//               {heroData.buttonText}
//             </Link>
//           </div>
//           <div className="w-full h-full md:w-[60%] pt-10 flex  flex-wrap gap-8">
//             <div className="relative  gap-5 flex ">
//               <div className='relative'>
//               <Image
//                 src={heroData.images[0]} alt="Hero Image" className="-shadow-md w-[100%] h-[100%]"/>
//                 <h1 className=' bg-white opacity-70  absolute top-[70%] bott px-7 py-12 ml-8' >01 <span className=''>____ </span> Bed Room  <br /><span className='font-bold text-black  text-2xl mt-3'> Inner peace </span></h1>
//                   </div>
//                  <Image
//                 src={heroData.images[1]} alt="Hero Image" className=" shadow-md w-[40%] mt-10 h-[80%]"/>
//                   </div>
//           </div>
//           </>
        
//         </div>
    
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from 'react';
import Image from 'next/image';
import { heroData } from '@/data/herodata';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3] my-10 pt-0 h-screen">
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
          <div className="w-full md:w-1/2 pt-10 flex flex-wrap gap-8 px-8 md:px-16">
            <div className="relative w-full md:w-auto flex gap-5">
              <div className="relative w-1/2 md:w-full">
                <Image
                  src={heroData.images[0]} alt="Hero Image" className="shadow-md w-full h-auto"/>
                <h1 className="bg-white opacity-70 absolute bottom-4 left-4 px-4 py-2 text-black text-xl">
                  01 <span className="text-gray-500">____</span> Bed Room <br />
                  <span className="font-bold text-2xl">Inner peace</span>
                </h1>
              </div>
              <div className="w-1/2 md:w-auto">
                <Image
                  src={heroData.images[1]} alt="Hero Image" className="shadow-md w-full h-auto mt-4 md:mt-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
