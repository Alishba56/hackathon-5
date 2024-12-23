import img1 from "@/images/Images (1).png"
import img2 from "@/images/Images (8).png"
import { TbShoppingCartCancel } from "react-icons/tb";
import Image from "next/image";

import Link from "next/link";



  
  const products= [
    {
      id: 1,
      name: 'Syltherine',
      price: 2500,
      imageSrc: img1,
      link: 'singlepage/syltherine',
      quantity: 1,
    },

    {
      id: 2,
      name: 'Leviosa',
      price: 2500,
      imageSrc: img2,
      link: 'singlepage/leviosa',
      quantity: 1,
    },
  ];
  
const ShoppingCart = () => {

  return (
    <div className=" bg-[#c8c5c5] h-[100vh] flex justify-end w-[100vw]">
        <div className="h-[550px] bg-white w-[25vw] top-0 p-10">
      <h2 className="text-xl flex items-center justify-between  font-bold mb-4">Shopping Cart <TbShoppingCartCancel/>
</h2>
      <div className="divide-y divide-gray-200">
        {products.map((item , index) => (
          <div  key={index} className="flex items-center justify-between py-4">
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
             
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-32 text-lg font-bold py-4 border-t border-gray-200">
        <span>Subtotal</span>
        <span>Rs. 520,000.00</span>
      </div>
      <div className="flex gap-4 mt-4">

        <button className="flex-1  bg-gray-200 hover:bg-gray-300 text-sm font-medium py-2 rounded-lg">
                <Link href='/carts'>

          Cart
                  </Link>

        </button>
        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-lg">
        <Link href='/checkout'>
          Checkout
          </Link>
        </button>
        <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-sm font-medium py-2 rounded-lg">
        <Link href='/productcomparison'>
          Comparison
          </Link>
        </button>
      </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

