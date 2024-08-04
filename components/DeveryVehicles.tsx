'use client'
import React, { useEffect } from 'react';
import deliveryTruck from "@/public/deliveryTruck.jpg"
import deliveryBike from "@/public/deliveryBike.jpg"
import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const TruckAndBike: React.FC = () => {
    const truckControls = useAnimation();
    const bikeControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await truckControls.start({
                x: '100%', // Move to the end of the screen
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 1.9
                }
            });
            await bikeControls.start({
                x: '100%', // Move to the end of the screen
                opacity: 1,
                transition: {
                    ease: "easeOut",
                    duration: 1.9
                }
            });
        };

        sequence();
    }, [truckControls, bikeControls]);

    return (
        <div className='max-w-screen-2xl overflow-hidden relative h-screen'>
            <motion.div
                className='absolute top-48 w-full'
                initial={{
                    x: -10,
                    opacity: 0
                }}
                animate={truckControls}
            >
                <Image src={deliveryTruck} alt='delivery truck' className='h-[150px] w-72' />
            </motion.div>
            <motion.div
                className='absolute top-48 w-full'
                initial={{
                    x: -10,
                    opacity: 0
                }}
                animate={bikeControls}
            >
                <Image src={deliveryBike} alt='delivery bike' className='h-[150px] w-56' />
            </motion.div>
        </div>
    );
};

export default TruckAndBike;

