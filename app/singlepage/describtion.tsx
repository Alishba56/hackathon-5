import Image from 'next/image';
import React, { useState } from 'react';
import img from "@/images/Images (3).png"

const ProductDescription: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Description');

  const tabs = ['Description', 'Additional Information', 'Reviews [5]'];

  const renderContent = () => {
    switch (selectedTab) {
      case 'Description':
        return (
          <div className="  mx-[9%]">
            <p className="mb-4">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="mb-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
        );
      case 'Additional Information':
        return <div className="text-left max-w-2xl mx-auto">Additional Information Content</div>;
      case 'Reviews':
        return <div className="text-left max-w-2xl mx-auto">Reviews Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className=" mx-auto p-4">
      <div className="">
        <ul className="flex justify-center space-x-16 mb-14">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer text-2xl  ${selectedTab === tab ? 'text-black ' : 'text-gray-400'}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        {renderContent()}
        <div className="flex flex-col md:flex-row  w-full justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <Image src={img} alt="Sofa 1" className=" w-full md:w-1/2 lg:w-[45%] rounded" />
          <Image src={img}alt="Sofa 2" className="w-full md:w-1/2 lg:w-[45%] rounded" />
        </div>
      </div>
      <hr className='my-10'/>
    </div>
  );
};

export default ProductDescription;
