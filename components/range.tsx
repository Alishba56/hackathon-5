import Image from "next/image";
import React from "react";
import Img1 from "@/images/Mask Group (1).png";
import Img2 from "@/images/Image-living room.png";
import Img3 from "@/images/Mask Group.png";

const BrowseRange = () => {
  return (
    <section className="py-12  bg-white">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl mt-10 font-bold text-gray-800 sm:text-3xl">
          Browse The Range
        </h2>
        <p className="mt-2  text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-20 flex flex-wrap gap-6">
          {/* Dining Card */}
          <div className="mt-10 sm:mt-0 ">
            <Image src={Img1} alt="Dining" className="h-[100%] " />

            <div className=" text-center">
              <h3 className="text-lg font-semibold mt-5 text-gray-800 ">Dining</h3>
            </div>
          </div>

          {/* Living Card */}
          <div className=" mt-10 sm:mt-0">
            <Image src={Img2} alt="Dining" className="h-[100%] " />

            <div className=" text-center">
              <h3 className="text-lg font-semibold mt-5 text-gray-800">Living</h3>
            </div>
          </div>

          {/* Bedroom Card */}
          <div className=" mt-10 sm:mt-0 ">
            <Image src={Img3} alt="Dining" className="h-[100%] " />

            <div className=" text-center">
              <h3 className="text-lg font-semibold mt-5 text-gray-800">Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
