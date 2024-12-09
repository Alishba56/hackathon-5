import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/images/Logos.png"

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-around px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <span className=" flex text-2xl  font-bold text-gray-900">
          <span className="text-yellow-500 text-1xl"><Image src={logo}
          alt="" /></span > Furniro
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-20 text-sm font-medium text-gray-700">
        <li>
          <Link href="#" className="hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shopheader" className="hover:text-yellow-500">
            Shop
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-yellow-500">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-yellow-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex space-x-10 text-gray-700 text-xl">
        <Link href="#" className="hover:text-yellow-500">
          <i className="fas fa-user"></i>
        </Link>
        <Link href="#" className="hover:text-yellow-500">
          <i className="fas fa-search"></i>
        </Link>
        <Link href="#" className="hover:text-yellow-500">
          <i className="fas fa-heart"></i>
        </Link>
        <Link href="#" className="hover:text-yellow-500">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
