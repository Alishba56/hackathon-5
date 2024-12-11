import React from "react";
import Image from "next/image";
import img from "@/images/Rectangle 1.png";
import Link from "next/link";
import Features from "../shop/banner";
import logo from "@/images/Logos.png";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-64 md:h-96">
        <Image className="w-full h-full object-cover" src={img} alt="background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image className="mb-5" src={logo} alt="logo" width={80} height={80} />
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">CheckOut</h1>
          <p className="text-gray-600 text-center text-sm md:text-2xl">Home &gt; checkOut</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between p-4 mx-4 lg:mx-24">
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Billing details</h2>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div className="flex flex-col w-full sm:w-1/2 mb-5">
                {" "}
                <label htmlFor="firstName" className="mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder=""
                  className="p-2 h-12 border rounded-2xl"
                />
              </div>{" "}
              <div className="flex flex-col w-full sm:w-1/2 mb-5">
                <label htmlFor="lastName" className="mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder=""
                  className="p-2 h-12 border rounded-2xl"
                />
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col mb-5">
              <label htmlFor="companyName" className="mb-2">
                Company Name (optional)
              </label>
              <input
                id="companyName"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <label htmlFor="country" className="mb-2">
                Country/Region
              </label>
              <input
                id="country"
                type="text"
                placeholder="Sri Lanka"
                className="p-2 h-12 border rounded-2xl"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <label htmlFor="streetAddress" className="mb-2">
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-5">
              {" "}
              <label htmlFor="city" className="mb-2">
                Town / City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="province" className="mb-2">
                Province
              </label>
              <input
                id="province"
                type="text"
                placeholder="Western Province"
                className="p-2 h-12 border rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="zip" className="mb-2">
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>{" "}
            <div className="flex flex-col mb-5">
              <label htmlFor="phone" className="mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="additionalInfo" className="mb-2">
                Additional Information
              </label>
              <input
                id="additionalInfo"
                type="text"
                placeholder=""
                className="p-2 h-12 border rounded-2xl"
              />
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Product</h2>
          <div className="p-4 bg-white rounded mb-4 shadow-md">
            <div className="flex justify-between mb-2">
              <span>Asgaard sofa x 1</span> <span>Rs. 250,000.00</span>
            </div>{" "}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span> <span>Rs. 250,000.00</span>
            </div>{" "}
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-yellow-500">Rs. 250,000.00</span>
            </div>
            <hr className="my-10" />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-4">Direct Bank Transfer</h3>
            <p className="text-sm text-gray-600 mb-4">
              {" "}
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.{" "}
            </p>
            <label className="flex items-center mb-2">
              {" "}
              <input type="radio" name="payment" className="mr-2" />
              Cash On Delivery{" "}
            </label>
            <label className="flex items-center mb-2">
              {" "}
              <input
                type="radio"
                name="payment"
                className="mr-2"
                checked
              />{" "}
              Direct Bank Transfer{" "}
            </label>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {" "}
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <Link href="#" className="text-black font-bold">
              {" "}
              privacy policy
            </Link>
            .{" "}
          </p>
          <button className="w-full lg:w-1/2 p-2 border border-black text-black rounded  mt-5">
            {" "}
            Place order{" "}
          </button>{" "}
        </div>{" "}
      </div>

      <Features />
    </div>
  );
};

export default page;
