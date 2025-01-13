import img from '@/images/Group 95.png'
import img3 from "@/images/Images (7).png"
import img9 from "@/images/Images (5).png"
import img1 from "@/images/Images (4).png"


import img5 from "@/images/Images (1).png"
import img6 from '@/images/Images (8).png'
import img7 from "@/images/Images (3).png"
import img8 from "@/images/Images (2).png"
import img2 from "@/images/Images (6).png"
import { StaticImageData } from 'next/image'

export interface Product {
  id: number;
    slug: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    reviews: number;
    quantity: number;
    sku: string;
    offPrice?: number,
    isNew?: boolean,
    discount?: number;
    category: string;
    tags: string[];
    sizes: string[];
    colors: string[];
    imageSrc: StaticImageData;
    thumbnails: StaticImageData[];
  }
  
  export const Products = [
   
  {
    id:1,
    slug: 'syltherine',
    link: 'singlepage/syltherrine',
    name: 'Syltherine',
    price: 2500000,
    description: 'Sofa cafe chair',
    rating: 4.5,
    offPrice: 3500000,
    discount: 30,
    reviews: 5,
    quantity:1,
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    sizes: ['L', 'XL', 'XS'],
    colors: ['purple', 'black', 'yellow'],
    imageSrc: img5,
    thumbnails: [img2, img3,img9,img5],
  
  },
  {
    id:2,
    slug: 'leviosa',
    name: 'Leviosa',
    link: 'singlepage/leviosa',
    price: 2500,
    description: 'Stylish cafe chair',
    rating: 4.5,
    reviews: 5,
    quantity:1,
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    sizes: ['L', 'XL', 'XS'],
    colors: ['purple', 'black', 'yellow'],
    imageSrc: img6,
    thumbnails: [img6, img6,img6,img6],
  },
  {
    id:3,
    slug: 'lolito',
    name: 'Lolito',
    link: 'singlepage/lolito',
    description: 'Big sofa',
    price: 7000,
    rating: 4.5,
    reviews: 5,
    quantity:1,
    sku: 'SS001',
    offPrice: 14000000,
    discount: 50,
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    sizes: ['L', 'XL', 'XS'],
    colors: ['purple', 'black', 'yellow'],
    imageSrc: img7,
    thumbnails: [img7, img7,img7,img7],
  },
  
  {
    id:4,
    slug: 'respira',
    name: 'Respira',
    link: 'singlepage/respira',
    price: 500,
    description: 'Outdoor bar table',
    rating: 4.5,
    reviews: 5,
    quantity:1,
    isNew: true,
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    sizes: ['L', 'XL', 'XS'],
    colors: ['purple', 'black', 'yellow'],
    imageSrc: img8,
    thumbnails: [img8, img8,img8,img8],
  },
  {
    id:5,
    slug: 'grifo',
    name: 'Grifo',
    link: 'singlepage/grifo',
    price: 1500000,
    description:'Night lamp',
    rating: 4.5,
    reviews: 5,
    quantity:1,
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
    sizes: ['L', 'XL', 'XS'],
    colors: ['purple', 'black', 'yellow'],
    imageSrc: img3,
    thumbnails: [img3, img3,img3,img3],
  },
{
  id:6,
  slug: 'muggo',
  name: 'Muggo',
  link: 'singlepage/muggo',
  price: 150000,
  description:'Small mug',
  rating: 4.5,
  reviews: 5,
  quantity:1,
  isNew: true,
  sku: 'SS001',
  category: 'Sofas',
  tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  sizes: ['L', 'XL', 'XS'],
  colors: ['purple', 'black', 'yellow'],
  imageSrc: img2,
  thumbnails: [img2, img2,img2,img2],
},
{
  id:7,
  slug: 'pingky',
  name: 'Pingky',
  link: 'singlepage/pingky',
  price: 150000,
  description: 'Cute bed set',
  rating: 4.5,
  reviews: 5,
  offPrice: 14000000,
  discount: 50,
  quantity:1,
  sku: 'SS001',
  category: 'Sofas',
  tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  sizes: ['L', 'XL', 'XS'],
  colors: ['purple', 'black', 'yellow'],
  imageSrc: img1,
  thumbnails: [img1, img1,img1,img1],
},

{
  id:8,
  slug: 'potty',
  name: 'Potty',
  link: 'singlepage/potty',
  price: 500000,
  description: 'Minimalist flower pot',
  rating: 4.5,
  isNew: true,
  reviews: 5,
  quantity:1,
  sku: 'SS001',
  category: 'Sofas',
  tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  sizes: ['L', 'XL', 'XS'],
  colors: ['purple', 'black', 'yellow'],
  imageSrc: img9,
 thumbnails: [img9, img9,img9,img9],
},
{
  id:9,
  slug: 'asgaard-sofa',
  name: 'Asgaard sofa',
  price: 250000,
  description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
  rating: 4.5,
  reviews: 5,
  quantity:1,
  sku: 'SS001',
  category: 'Sofas',
  tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  sizes: ['L', 'XL', 'XS'],
  colors: ['purple', 'black', 'yellow'],
  imageSrc: img,
  thumbnails: [img, img,img,img],
},


]