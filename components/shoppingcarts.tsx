"use client"
import { TbShoppingBagX } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Products } from '../data/appproducts';
import { FaTimesCircle } from "react-icons/fa";



const ShoppingCart = ({toggleBtn}: {toggleBtn: ()=> void}) => {
  const [cartProducts, setCartProducts] = useState(Products);


  const deleteProduct = (productId: number) => {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  };

  return (
    <div className=" z-50 bg-[#c8c5c5] h-[100vh] flex  justify-end w-[100vw] left-0 top-0">
      <div className="h-[550px] bg-white w-full sm:w-[25vw] top-0 p-10">
        <h2 className="text-xl flex items-center justify-between font-bold mb-4">
          Shopping Cart <TbShoppingBagX onClick={toggleBtn} className="cursor-pointer"/>
        </h2>
        <div className="divide-y divide-gray-200">
          {cartProducts.map((item, index) => (index  <= 1 &&
            <div key={index} className="flex items-center justify-between py-4">
              <Image
                src={item.imageSrc}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1 ml-4">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x Rs. {item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => deleteProduct(item.id)}
                className=" hover:text-red-500 text-xl"
              >
              <FaTimesCircle />

              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-32 text-lg font-bold py-4 border-t border-gray-200">
          <span>Subtotal</span>
          <span>Rs. {cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</span>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm font-medium py-2 rounded-lg">
            <Link href='/carts'>Cart</Link>
          </button>
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-lg">
            <Link href='/checkout'>Checkout</Link>
          </button>
          <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm font-medium py-2 rounded-lg">
            <Link href='/comparison'>Comparison</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;