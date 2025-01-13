'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { IoMenu, IoSearchOutline} from "react-icons/io5";
import logo from '../images/Logos.png'
import { RxCross2 } from "react-icons/rx";
import { FaRegHeart} from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ShoppingCart from './shoppingcarts';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [attr, setAttr] = useState('hidden')
  const [attr2, setAttr2] = useState('block')
  const [isOpen2, setIsOpen2] = useState(false)
  const [open, setOpen] = useState('hidden')
  const toggleBtn = () =>{
    setOpen(isOpen2? 'hidden' : 'block')
    setIsOpen2(!isOpen2)
  }
  const handleToggle = () => {
    setAttr(isOpen? 'hidden' : 'block')
    setAttr2(isOpen? 'block' : 'hidden')
    setIsOpen(!isOpen)
  }
  return (
    <>
    <nav className="relative flex justify-around md:justify-around items-center px-3 py-4">
         <div className='flex items-center'>
         <IoMenu onClick={handleToggle} className={`${attr2} md:hidden text-3xl mr-3`}/>
         <RxCross2 onClick={handleToggle} className={`${attr} md:hidden text-3xl mr-3}`}/>

        <Link href="/"><h1 className='w-32 sm:flex   gap-3 text-2xl font-bold items-center sm:w-32'>
          <Image src={logo} alt="Logo" className="w-7 md:w-12"/>
            Furniro
          </h1>
        </Link>
        </div>
        <div>
        <ul className={`${attr} w-[100vw] md:hidden left-0 top-20 absolute bg-white z-20  text-center space-x-6 space-y-3 text-xl  py-4 font-medium }`}>
        <li>
            <Link href="/" className="hover:text-yellow-500 block py-2 sm:py-0">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-500 block py-2 sm:py-0">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-500 block py-2 sm:py-0">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500 block py-2 sm:py-0">
              Contact
            </Link>
          </li>
      </ul>
        </div>
      <ul className="hidden space-x-20 text-sm font-medium lg:flex">
      <li>
            <Link href="/" className="hover:text-yellow-500 block py-2 sm:py-0">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-500 block py-2 sm:py-0">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-yellow-500 block py-2 sm:py-0">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500 block py-2 sm:py-0">
              Contact
            </Link>
          </li>
      </ul>

      <div className="flex items-center sm:space-x-9 space-x-2">
        <Link href="/contact" className="hover:text-yellow-500">
          <FiUser size={20} />
        </Link>
          <Link href="/search" className="hover:text-yellow-500">
            <IoSearchOutline />
          </Link>
          <Link href="/wishlist" className="hover:text-yellow-500">
            <FaRegHeart />
          </Link>
          <Link href="" className="hover:text-yellow-500">
            <AiOutlineShoppingCart onClick={toggleBtn}/>
          </Link>
      </div>
            <div className={`${open} fixed z-50 top-0 `}>
                <ShoppingCart toggleBtn={toggleBtn}/>
            </div>
    </nav>
    </>
  )
}

export default Header