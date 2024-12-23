
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    // <footer>
    //   <hr  className='py=10'/>
    //   <div className="container mx-auto px-4 bg-white py-12">
    //     <div className="flex flex-col md:flex-row justify-between">
    //       <div className="mb-6 md:mb-0">
    //         <h2 className="text-xl font-bold mb-2">Funiro.</h2>
    //         <p className='mt-4 text-gray-400'>
    //           400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
    //         </p>
    //       </div>
    //       <div className="flex flex-col md:flex-row md:space-x-8">
    //         <div className="mb-6 md:mb-0">
    //           <h3 className="text-lg text-gray-400 mb-2">Links</h3>
    //           <ul className="space-y-2">
    //             <li><Link href="/">Home</Link></li>
    //             <li><Link href="/shop">Shop</Link></li>
    //             <li><Link href="/blog">Blog</Link></li>
    //             <li><Link href="contact">Contact</Link></li>
    //           </ul>
    //         </div>
    //         <div className="mb-6 md:mb-0">
    //           <h3 className="text-lg text-gray-400 mb-2">Help</h3>
    //           <ul className="space-y-2">
    //             <li><Link href="#">Payment Options</Link></li>
    //             <li><Link href="#">Returns</Link></li>
    //             <li><Link href="#">Privacy Policies</Link></li>
    //           </ul>
    //         </div>
    //         <div className="mb-6 md:mb-0">
    //           <h3 className="text-lg text-gray-400 mb-2">Newsletter</h3>
    //           <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
    //             <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
    //             <button className="ml-0 sm:ml-4 px-4 py-2 bg-black text-white font-bold rounded-md">SUBSCRIBE</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='w-full h-1 bg-gray-200 mt-8'></div>
    //     <div className="mt-8 text-center">
    //       <p>© 2023 Funiro. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>
    <footer >
    <div className='w-full h-1 bg-gray-200'></div>
    <div className=" sm:mx-auto mx-0 sm:px-4 bg-white sm:py-12 py-0">
      <div className="flex flex-col  mx-24 md:flex-row justify-between">
        <div className="mb-6 md:mb-0 mx-0 sm:mx-24">
          <h2 className="text-xl font-bold mb-2 mt-5">Funiro.</h2>
          <p className='mt-12  text-gray-400'>
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="mb-6 md:mb-0 px-7 mr-32">
            <h3 className="text-lg  text-gray-400 mb-2">Links</h3>
            <ul className=" mb-7 mt-12">
              <li className=" mb-7 "><Link href="#">Home</Link></li>
              <li className=" mb-7"><Link href="/shop">Shop</Link></li>
              <li className=" mb-7"><Link href="/blog">Blog</Link></li>
              <li className=" mb-7 "><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 " >
            <h3 className="text-lg text-gray-400 mb-2 sm:mr-24 mr-32 ">Help</h3>
            <ul  className=" mb-7 mt-12">
              <li className=" mb-7 "><Link href="#">Payment Options</Link></li>
              <li className=" mb-7 "><Link href="#">Returns</Link></li>
              <li className=" mb-7 "><Link href="#">Privacy Policies</Link></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0 sm:mr-20 flex flex-wrap mr-32">
            <h3 className="text-lg text-gray-400  sm:ml-10 ml-0 mb-2">Newsletter</h3>
            <form className="flex  flex-wrap  mb-7 mt-12">
              <input type="email" placeholder="Enter Your Email Address" className="flex sm:mb-5  mb-0 py-2  underline " />
              <button className=" text-black underline  font-bold  px-4">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
      <hr className='my-10'/>
      <div className="ml-[8%] mt-8">
        <p>© 2023 Funiro. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
