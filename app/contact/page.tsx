import React from "react";
import img from "@/images/Rectangle 1.png";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="w-f h-full">
        <Image className="relative  container" src={img} alt="backgroud" />
        <div className="container mx-auto top-48 absolute">
          <h1 className="text-4xl font-bold  text-center mb-4">Checkout</h1>
          <p className="text-gray-600 text-center text-2xl">
            Home &gt; Checkout
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center  py-2 bg-white">
        <div className="bg-white p-8  w-[50%] ">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Get In Touch With Us
          </h2>
          <p className="text-center text-gray-600 mb-8 p-10">
            {" "}
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!{" "}
          </p>
          <div className="mb-6 ">
            <h3 className="text-lg font-semibold">Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>{" "}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Abc"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Abc@def.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="This is an optional"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Hi! I'd like to ask about"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
