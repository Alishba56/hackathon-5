
import Image from 'next/image';
import React from 'react';
// import img from '@/images/Group 95.png';
import { AiFillDelete } from "react-icons/ai";
import { Products } from '@/data/appproducts';
import Features from '../shop/banner';
import Page from '../carts/cartspage';
import Link from 'next/link';

const Cart = () => {
  // const cartItems = [
  //   {
  //     name: 'Asgaard sofa',
  //     price: 250000,
  //     quantity: 1,
  //     image: img, 
  //   },
  // ];

  const total = Products .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="">
      <Page />

      <div className="flex flex-col lg:flex-row gap-8 mx-4 h-[40%]">
        <div className=" w-full lg:w-2/3 rounded p-4">
          <div className="flex h-14 bg-[#F9F1E7] items-center justify-between mb-4">
            <p className="font-semibold">Product</p>
            <p className="font-semibold hidden md:block">Price</p>
            <p className="font-semibold hidden md:block">Quantity</p>
            <p className="font-semibold hidden md:block">Subtotal</p>
            <p className="font-semibold hidden md:block"></p>
          </div>
          
          {Products .map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center mb-4 p-4 bg-white rounded">
              <div className="flex items-center  w-full md:w-auto mb-4 md:mb-0">
                <Image src={item.imageSrc} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <p>{item.name}</p>
              </div>
              <p className="w-full md:w-auto mb-2 md:mb-0">Rs. {item.price.toFixed(2)}</p>
              <p className="w-full md:w-auto mb-2 md:mb-0">{item.quantity}</p>
              <p className="w-full md:w-auto mb-2 md:mb-0">Rs. {(item.price * item.quantity).toFixed(2)}</p>
              <button className="text-red-500 hover:text-red-700"><AiFillDelete /></button>
            </div>
          ))}
        </div>

        <div className="bg-[#F9F1E7] h-[100%] w-full lg:w-1/3 p-6 rounded">
          <h2 className="text-xl font-semibold text-center mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4 font-bold">
            <p>Total</p>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          <Link href="/checkout">
            <button className="block w-full py-2 border border-black text-black font-bold rounded mt-4 hover:bg-black hover:text-white transition-colors">
              Check Out
            </button>
          </Link>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Cart;
