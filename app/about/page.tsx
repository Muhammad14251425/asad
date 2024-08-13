'use client'
import React, { useEffect, useState } from 'react';
import VisionMission from './VisionMission';
import MainImage from "@/public/aboutus/main.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Controls the delay between each letter's animation
    },
  },
};

export const bounceVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 20,
    },
  },
};
const AboutUs = () => {
  const text = "About Us";
  const [blur , setBlur] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setBlur(false)
    },1700)
  },[])


  return (
    <div className='max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl px-2 mx-auto'>
      <div className='my-6 relative mb-20'>
        <Image priority src={MainImage} alt='Trucks' className={cn('h-[500px] object-cover rounded-sm w-full', blur ? "blur-sm" : "blur-none" )} />
        <motion.div
          className='absolute left-14 top-20 flex space-x-2'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className='text-white text-9xl font-bold tracking-[15px]'
              variants={bounceVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <VisionMission />
      {/* <div className="h-[600px]">
        <LayoutGrid cards={cards} />
        </div> */}
    </div>
  );
}

export default AboutUs;
