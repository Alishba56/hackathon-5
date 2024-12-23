import HeroSection from '@/components/heroSection'
import BrowseRange from '@/components/range'
import Second from '@/components/second'
import React from 'react'
import ImageGallery from '@/components/imageGallery'

import ProductCard from '@/components/products'

const Page = () => {
  return (
    <div>
   
      <Second/>
      <BrowseRange/>
    <ProductCard/>
      <HeroSection/>
      <ImageGallery/>

    </div>
  )
}

export default Page
