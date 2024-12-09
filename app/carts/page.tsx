import Image from 'next/image';
import React from 'react';
import img from"@/images/Images (5).png"
import { AiFillDelete } from "react-icons/ai";
import Features from '../shopheader/banner';
import Page from '../carts/cartspage';


const Cart = () => {
  const cartItems = [
    {
      name: 'Asgaard sofa',
      price: 250000,
      quantity: 1,
      image: img, // Replace with your image path
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="">
      <Page/>

      <div className="gap-8 ">
        <div className="bg-[#F9F1E7]  w-[60%] rounded">
          <div className="flex h-14  items-center justify-between mb-4">
            <p className="font-semibold">Product</p>
            <p className="font-semibold">Price</p>
            <p className="font-semibold">Quantity</p>
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold"></p>
          </div>
          </div>

          <div className=' flex items-center gap-2'>

          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center w-[50%] mb-4">
              <div className="flex " >
                <Image src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                <p>{item.name}</p>
              </div>
              <p>Rs. {item.price.toFixed(2)}</p>
              <p>{item.quantity}</p>
              <p>Rs. {(item.price * item.quantity).toFixed(2)}</p>
              <button className="text-red-500 hover:text-red-700"> <AiFillDelete/> </button>
            </div>
          ))}
        </div>

        <div className="bg-[#F9F1E7]  w-[25%] p-6 rounded">
          <h2 className="text-xl font-semibold ml-24 mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>Rs. {total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="font-bold">Total</p>
            <p className="font-bold">Rs. {total.toFixed(2)}</p>
          </div>
          <button className="  border ml-20  border-black text-back font-bold py-2 px-4 rounded mt-4">Check Out</button>
        </div>
      </div>
      <Features/>
    </div>
  );
};

export default Cart;