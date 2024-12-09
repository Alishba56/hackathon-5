
import HeroSection from '@/components/heroSection'
import Products from '@/components/products'
import BrowseRange from '@/components/range'
import Second from '@/components/second'
import React from 'react'
import ImageGallery from '@/components/imageGallery'

const Page = () => {
  return (
    <div>
   
      <Second/>
      <BrowseRange/>
      <Products/>
      <HeroSection/>
      <ImageGallery/>

    </div>
  )
}

export default Page
