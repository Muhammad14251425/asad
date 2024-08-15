'use client'
import { useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';
import { cn } from '@/lib/utils';
const imageData = [
    {
        heading: "Reliable Long-Haul Solutions",
        text: "Our advanced fleet ensures your goods are delivered on time, every time. We drive your business forward with unmatched reliability.",
        image: '/mainHero/truck.jpeg',
        color: "black"
    },
    {
        heading: "Reliable Courier Services",
        text: "We ensure your packages are handled with care and delivered on time. Our team works efficiently to load and unload goods, guaranteeing safe and timely deliveries every time.",
        image: '/mainHero/Loading.jpeg',
        color: "white"
    },
    {
        heading: "Seamless Rail Logistics",
        text: "Our rail freight services move your cargo efficiently across vast distances. Trust us for cost-effective and reliable logistics solutions.",
        image: '/mainHero/trainView.jpeg',
        color: "black"
    },
]
const HeroClient = () => {
    const [checkIndex, setCheckIndex] = useState(1)
    return (
        <div className='mt-10 text-center w-full px-2 sm:max-w-[500px] md:max-w-[760px] 992:max-w-[965px] 1098:max-w-[1080px] xl:max-w-7xl mx-auto'>
            <h2 className='text-3xl font-semibold'>Delivering your promises, with precision and care</h2>
            <p className='text-lg lg:max-w-4xl mx-auto font-medium mt-4'>Our courier services ensure timely and safe delivery of goods across the globe, using trucks, lorries, and trains. Trust us to move your business forward with unmatched reliability.</p>
            <div className='flex-col md:flex-row gap-3 lg:gap-8 xl:gap-14 2xl:gap-14 mt-8 hidden md:flex'>
                {imageData.map((item, index) => (
                    <div key={index} className='relative' onClick={() => setCheckIndex(index)}>
                        <motion.div
                            initial={{ opacity: 0, y: -50, z: -10 }}
                            animate={{ opacity: checkIndex === index ? 1 : 0, y: checkIndex === index ? 0 : -50, z: checkIndex === index ? 0 : -10 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`absolute cursor-pointer top-20 left-2 space-y-4 text-${item.color} z-10 text-left`}
                        >
                            <h2 className='text-2xl font-semibold'>{item.heading}</h2>
                            <p className='text-lg'>{item.text}</p>
                        </motion.div>
                        <Image
                            src={item.image}
                            alt='truck'
                            width={400}
                            height={400}
                            className={cn(
                                'cursor-pointer object-cover h-96 w-96 rounded-md transform transition-all duration-1000',
                                checkIndex === index ? " md:translate-y-16 blur-sm" : " md:translate-y-0 blur-none"
                            )}
                        />
                    </div>
                ))}
            </div>
            <div className='flex-col md:flex-row gap-3 space-y-4 lg:gap-8 xl:gap-14 2xl:gap-14 mt-8 md:hidden'>
                {imageData.map((item, index) => (
                    <div key={index} className='relative w-[85%]' onClick={() => setCheckIndex(index)}>
                        <motion.div
                            initial={{ opacity: 0, x: -50, z: -10 }}  // Start position for smaller screens
                            animate={{
                                opacity: checkIndex === index ? 1 : 0,
                                x: checkIndex === index ? 0 : -50,   // Move along the x-axis
                                z: checkIndex === index ? 0 : -10
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`absolute cursor-pointer top-20 left-11 space-y-4 text-${item.color} z-20 text-left`}
                        >
                            <h2 className='text-2xl font-semibold'>{item.heading}</h2>
                            <p className='text-lg'>{item.text}</p>
                        </motion.div>
                        <Image
                            src={item.image}
                            alt='truck'
                            width={400}
                            height={400}
                            className={cn(
                                'cursor-pointer object-cover h-96 w-96 400:w-[530px] rounded-md transform transition-all duration-1000',
                                checkIndex === index ? "translate-x-10 blur-sm" : "translate-x-0 blur-none"  // Adjust for x-axis
                            )}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HeroClient