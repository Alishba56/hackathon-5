import Image from 'next/image';
import img from "@/images/Rectangle 68.png"
import img2 from "@/images/Rectangle 68 (1).png"
import img3 from "@/images/Rectangle 68 (2).png"


import React from 'react';
import Link from 'next/link';
import logo from "@/images/Logos.png"

import Features from '../shop/banner';

import tumb from "@/images/Rectangle 1.png"

const Blog = () => {
  const posts = [
    {
      title: 'Going all-in with Millenial Design',
      image: img, 
      date: 'August 23, 2023',
      author: 'Nest',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Exploring New Ways of Decorating',
      image: img2, 
      date: 'August 20, 2023',
      author: 'Layla',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Handmade Pieces that Took Time to Make',
      image: img3, 
      date: 'August 17, 2023',
      author: 'Nest',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
  ];

  const categories = ['Crafts', 'Design', 'Homemade' ,'Interior', 'Wood'];

  const recentPosts = posts.slice(0, 3);

  return (
    <div> 
        <div className="w-full h-full">
    <Image
    className="relative  container"
    src={tumb}
    alt="backgroud"
    />
  <div className="container mx-auto top-48 absolute">
  <Image className='ml-[48%] mb-5'
   src={logo}
          alt="" />
    <h1 className="text-4xl font-bold  text-center mb-4">Blog</h1>
    <p className="text-gray-600 text-center text-2xl">Home &gt; Blog</p>
  </div> 
  </div>
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 px-40 py-10">
          {posts.map((post, index) => (
            <div key={index} className="mb-8">
              <Image src={post.image} alt={post.title} className="w-full h-96 object-cover mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center mb-4">
              </div>
              <button className=" text-black underline font-bold py-2 px-4 rounded">Read More</button>
            </div>
          ))}

          <div className="flex items-center justify-center mt-8">
            <button className="border border-gray-300 p-2 rounded hover:bg-gray-100">1</button>
            <button className="border border-gray-300 p-2 rounded hover:bg-gray-100">2</button>
            <button className="border border-gray-300 p-2 rounded hover:bg-gray-100">3</button>
            <button className="border border-gray-300 p-2 rounded hover:bg-gray-100">Next</button>
          </div>
        </div>

        <div className="lg:col-span-1 py-10 ">
            <input type="text" placeholder=" Search" className='border py-2 rounded-1xl px-7'  />
          <h2 className="text-2xl font-semibold mt-10 mb-10">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-10">
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Posts</h2>
          {recentPosts.map((post, index) => (
            <div key={index} className="mb-10 flex ">
                
              <Image src={post.image} alt={post.title} className="w-24 h-24 object-cover mb-2" />
              <div className=" ml-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link href="#" className="text-gray-600 hover:text-blue-500">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600">{post.date}</p>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
    <Features/>
    </div>
  );
};

export default Blog;