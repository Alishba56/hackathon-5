import React from 'react';
import Image from 'next/image';
import img from "@/images/Rectangle 1.png"
import Link from 'next/link';
import Features from '../shopheader/banner';


const page = () => {
  return (
    <div>
        <div className="w-full h-full">
        <Image
        className="relative  container"
        src={img}
        alt="backgroud"
        />
      <div className="container mx-auto top-48 absolute">
        <h1 className="text-4xl font-bold  text-center mb-4">Checkout</h1>
        <p className="text-gray-600 text-center text-2xl">Home &gt; Checkout</p>
      </div> 
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between p-4 mx-24">
         <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Billing details</h2>
           <form className="space-y-4"> 
            <div className="flex space-x-4"> 
          <h1 className="mb-5"> FirstName <br/><input type="text" placeholder="" className=" p-2 h-16 border rounded-2xl " /></h1> 
          <h1 className="mb-5"> LastName <br/><input type="text" placeholder="" className=" p-2 h-16 border rounded-2xl " /></h1> 
              </div>
              <h1 className="mb-5"> Company Name (optinal) <br/><input type="text" placeholder="" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> Country/Region <br/><input type="text" placeholder="Sri Lanka" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> Street address <br/><input type="text" placeholder="" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> Town / City <br/><input type="text" placeholder="" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> Province<br/><input type="text" placeholder="Western Province" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> ZIP code <br/><input type="text" placeholder="" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> Phone <br/><input type="text" placeholder="" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <h1 className="mb-5"> Email address <br/><input type="text" placeholder="" className=" p-8 w-[72%] h-16 border rounded-2xl " /></h1> 
              <input type="text" placeholder="Additional information" className=" p-8 w-[72%] h-16 border rounded-2xl " />
                  </form> 
                  </div> 
                  <div className="w-full lg:w-1/2 p-4"> 
                  <h2 className="text-2xl font-bold mb-4">Product</h2> 
                  <div className=" p-4 rounded mb-4">
                     <div className="flex justify-between mb-2">
                         <span>Asgaard sofa x 1</span>
                          <span>Rs. 250,000.00</span> 
                          </div>
                           <div className="flex justify-between mb-2"> <span>Subtotal</span> 
                           <span>Rs. 250,000.00</span> 
                           </div>
                            <div className="flex justify-between font-bold text-lg"> <span>Total</span>
                             <span className="text-yellow-500">Rs. 250,000.00</span> 
                             </div> 
                             <hr className='my-10'/>
                             </div> 
                             <div className="mb-4"> 
                                <h3 className="text-lg font-bold mb-4"> Direct Bank Transfer</h3>
                               
                                      <p className="text-sm text-gray-600 mb-4"> Make your payment directly into our bank account. Please use your Order 
                                        ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. </p> 
                                      <label className="flex items-center mb-2"> <input type="radio" name="payment" className="mr-2" /> Cash On Delivery </label>
                                      <label className="flex items-center mb-2">
                                      <input type="radio" name="payment" className="mr-2" checked /> Direct Bank Transfer </label>
                                       </div>
                                        <p className="text-sm text-gray-600 mb-4"> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                                             <Link href="#" className="text-blue-500">privacy policy</Link>. </p>
                                              <button className="w-[50%] ml-32 mt-5 p-2 border-black border text-black rounded">Place order</button> 
                                              </div> 
                                              </div>
                                              <Features/>

    </div>
  )
}

export default page
