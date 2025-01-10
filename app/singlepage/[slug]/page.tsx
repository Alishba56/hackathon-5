
import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { PiLineVerticalThin } from "react-icons/pi";
import ProductDetails from './details';
import ProductDescription from './describtion';
import ProductCard from '@/components/products';
import { Products } from '@/data/appproducts';
async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const product = Products.filter((item) => item.slug === slug)[0]
  if(product) {
    return (
      <div>
      <div className="flex items-center w-full h-20 sm:pl-20 pl-0   bg-[#F9F1E7] ">
  <h1 className='flex gap-4   text-gray-400 items-center'>Home <SlArrowRight className='text-black'/></h1>
  <h1 className='flex gap-4   text-gray-400 items-center'>Shop <SlArrowRight className='text-black'/></h1>
  <h1 className='flex gap-4 items-center  '>  <PiLineVerticalThin className='text-black text-4xl'/>  {props.name}</h1>
  
      </div>
      <ProductDetails props={product}/>
     
      <ProductDescription/>
     <ProductCard/> 
     
      </div>
    )
  }else{
    return <h1>Product not found</h1>
  }
}

export default page
