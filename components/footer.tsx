// Footer.tsx
import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (
    <footer >
      <div className='w-full h-1 bg-gray-200'></div>
      <div className="container mx-auto px-4 bg-white py-12">
        <div className="flex flex-col  mx-24 md:flex-row justify-between">
          <div className="mb-6 md:mb-0 mx-24">
            <h2 className="text-xl font-bold mb-2 mt-5">Funiro.</h2>
            <p className='mt-12  text-gray-400'>
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0 px-7 mr-32 ">
              <h3 className="text-lg  text-gray-400 mb-2">Links</h3>
              <ul className=" mb-7 mt-12">
                <li className=" mb-7 "><Link href="#">Home</Link></li>
                <li className=" mb-7"><Link href="#">Shop</Link></li>
                <li className=" mb-7"><Link href="#">About</Link></li>
                <li className=" mb-7 "><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 " >
              <h3 className="text-lg text-gray-400 mb-2 mr-24">Help</h3>
              <ul  className=" mb-7 mt-12">
                <li className=" mb-7 "><Link href="#">Payment Options</Link></li>
                <li className=" mb-7 "><Link href="#">Returns</Link></li>
                <li className=" mb-7 "><Link href="#">Privacy Policies</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0 mr-20">
              <h3 className="text-lg text-gray-400  ml-10 mb-2">Newsletter</h3>
              <form className="flex mb-7 mt-12">
                <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-10 py-2  underline " />
                <button className=" text-black underline  font-bold  px-4">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
        <div className='w-[85%] ml-[8%] h-1 bg-gray-200'></div>
        <div className="ml-[8%] mt-8">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;