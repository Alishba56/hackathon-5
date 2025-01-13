"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Products } from '../../data/appproducts';
import Features from '../shop/banner';
import Page from '../carts/cartspage';
import Link from 'next/link';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(Products);

  const deleteProduct = (productId: number) => {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  };

  const total = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="">
      <Page />

      <div className="flex flex-col md:flex-row gap-10 md:mx-20 mt-16 ">
        <div className=" w-full lg:w-2/3  rounded ">
          <div className="flex h-14 bg-[#F9F1E7] items-center justify-evenly sm:gap-20 sm:justify-center mb-4">
            <p className="font-semibold">Product</p>
            <p className="font-semibold ">Price</p>
            <p className="font-semibold ">Quantity</p>
            <p className="font-semibold ">Subtotal</p>
            <p className="font-semibold "></p>
          </div>
          
          {cartProducts.map((item, index) => (index <= 3 &&
            <div key={index} className="flex  items-center mb-4  bg-white rounded justify-start">
              <div className="sm:flex hidden flex-wrap items-center ">
                <Image src={item.imageSrc} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              </div>
              <div className='flex justify-between w-full'>
                <p>{item.name}</p>
          <p className="  mb-2 md:mb-0">Rs. {item.price.toFixed(2)}</p>

              <p className=" mb-2 md:mb-0">{item.quantity}</p>
              <p className=" mb-2 md:mb-0">Rs. {(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => deleteProduct(item.id)} className="text-red-500 hover:text-red-700"><AiFillDelete /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F9F1E7] sm:h-[300px]  h-[200px] w-80  p-6 rounded  justify-around py-7">
          <h2 className="text-xl font-semibold text-center  mb-4">Cart Totals</h2>
          <div>
          <div className="flex flex-wrap justify-between mb-6 px-8">
            <p>Subtotal</p>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          <div className="flex flex-wrap justify-between mb-4 font-bold px-8">
            <p>Total</p>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          </div>
          <Link href="/checkout" className='flex justify-center'>
            <button className=" block w-40 py-2 border border-black text-black font-bold rounded-lg mt-4 hover:bg-black hover:text-white transition-colors">
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