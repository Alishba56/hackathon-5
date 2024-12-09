import img1 from "@/images/Images (1).png"
import img3 from '@/images/Images (3).png'
import img2 from "@/images/Images (8).png"

import img4 from "@/images/Images (2).png"
import img5 from "@/images/Images (7).png"
import img6 from "@/images/Images (6).png"
import img7 from "@/images/Images (4).png"
import img8 from "@/images/Images (5).png"





export  const products = [
  {
    
    name: 'Syltherine',
    describe: 'Sofa cafe chair',
    imageSrc: img1,
    price: 2500000,
    offPrice: 3500000,
    discount: 30,
  },
  {
    name: 'Leviosa',
    describe : 'Stylish cafe chair',
    imageSrc: img2,
    price: 2500,
  },
  {
    id: 3,
    name: 'Lolito',
    describe: 'Luxury big sofa',
    price: 7000,
    offPrice: 14000000,
    discount: 50,
    imageSrc: img3,
  },
  {
    id: 4,
    name: 'Respira',
    describe: 'Outdoor bar table ',
    price: 500,
    isNew: true,
    imageSrc: img4,
  },

   {
    name: 'Grifo',
    describe: 'Night lamp',
    imageSrc: img5,
    price: 1500000,
    
  },
  {
    name: 'Muggo',
    describe: 'Small mug',
    imageSrc: img6,
    price:150000,
    isNew: true,
  },
  {
    name: 'Pingky',
    describe: 'Cute bed set',
    imageSrc: img7,
    price: 7000000,
    offPrice: 14000000,
    discount: 50,
  },
  {
    name: 'Potty',
    describe: 'Minimalist flower pot',
    imageSrc: img8,
    price: 500000,
    isNew: true,
   
  },
  // ...other products
];

