import React from "react";
import img from "@/images/Rectangle 1.png";
import Image from "next/image";
import logo from "@/images/Logos.png";
import Features from "../shop/banner";

const Page: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-64 md:h-96">
        <Image className="w-full h-full object-cover" src={img} alt="background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image className="mb-5" src={logo} alt="logo" width={80} height={80} />
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Contact</h1>
          <p className="text-gray-600 text-center text-sm md:text-2xl">Home &gt; Contact</p>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-center py-8 bg-white">
        <div className="bg-white p-8 w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-center">Get In Touch With Us</h2>
          <p className="text-center text-gray-600 mb-8">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
              <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Abc" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Abc@def.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="This is optional" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Hi! I'd like to ask about"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">Submit</button>
          </form>
        </div>
      </div>
      
      <Features />
    </div>
  );
};

export default Page;
