// import Link from "next/link";
"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/Logos.png";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
            <Link href="/" className="hover:text-yellow-500">
          <span className="text-2xl font-bold text-gray-900 flex items-center">
            <Image src={logo} alt="Logo" className="mr-2" width={40} height={40} />
            Furniro
          </span>
                </Link>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-20 text-sm font-medium text-gray-700 ${menuOpen ? "flex" : "hidden"}`}>
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex space-x-10 text-gray-700 text-xl">
          <Link href="/contact" className="hover:text-yellow-500">
            <FaRegUser />
          </Link>
          <Link href="/search" className="hover:text-yellow-500">
            <IoSearchOutline />
          </Link>
          <Link href="/wishlist" className="hover:text-yellow-500">
            <FaRegHeart />
          </Link>
          <Link href="/shopcarts" className="hover:text-yellow-500">
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
