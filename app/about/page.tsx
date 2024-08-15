'use client'
import React, { useEffect, useState } from 'react';
import VisionMission from './VisionMission';
import MainImage from "@/public/aboutus/main.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Hero1 from '@/components/Hero1';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Controls the delay between each letter's animation
    },
  },
};

const bounceVariants = {
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
  const [blur, setBlur] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setBlur(false)
    }, 1700)
  }, [])


  return (
    <div className='px-2 mx-auto max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl'>
  <div className='my-6 relative mb-20'>
    <Image
      priority
      src={MainImage}
      alt='Trucks'
      className={cn(
        'w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] object-cover rounded-sm',
        blur ? 'blur-sm' : 'blur-none'
      )}
    />
    <motion.div
      className='absolute left-4 sm:left-10 md:left-14 top-10 sm:top-14 md:top-20 flex space-x-2'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider'
          variants={bounceVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  </div>
  <VisionMission />

  <div className='mt-10'>
    <Hero1 />
  </div>
</div>

  );
}

export default AboutUs;
