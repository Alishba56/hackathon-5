
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <hr  className='py=10'/>
      <div className="container mx-auto px-4 bg-white py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Funiro.</h2>
            <p className='mt-4 text-gray-400'>
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg text-gray-400 mb-2">Links</h3>
              <ul className="space-y-2">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Shop</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg text-gray-400 mb-2">Help</h3>
              <ul className="space-y-2">
                <li><Link href="#">Payment Options</Link></li>
                <li><Link href="#">Returns</Link></li>
                <li><Link href="#">Privacy Policies</Link></li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg text-gray-400 mb-2">Newsletter</h3>
              <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
                <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border border-gray-300 rounded-md" />
                <button className="ml-0 sm:ml-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
        <div className='w-full h-1 bg-gray-200 mt-8'></div>
        <div className="mt-8 text-center">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
