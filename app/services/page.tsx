'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"

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

const data = [
    {
        "title": "Mazda Services",
        "description": "Choose from a range of Mazda vehicles including 16ft, 18ft, and 20ft options, ensuring we meet your specific transport needs efficiently.",
        "image": "/services/Mazda.jpg"
    },
    {
        "title": "Container",
        "description": "Our container options include 20ft and 40ft containers, with other containerized vehicles available on-demand to accommodate varying cargo sizes and requirements.",
        "image": "/services/Container.jpg"
    },
    {
        "title": "Flatbeds",
        "description": "Utilize our flatbeds for transporting goods of various sizes and shapes with ease, ensuring safe and secure delivery.",
        "image": "/services/Flatbed.jpg"
    },
    {
        "title": "Small Vehicles",
        "description": "We offer a selection of Hyundai vehicles and pickups ideal for smaller cargo loads and last-mile deliveries, ensuring flexibility and convenience.",
        "image": "/services/maxresdefault.jpg"
    },
    {
        "title": "Dumper",
        "description": "Our dumper trucks are ready to handle heavy loads, providing reliable transportation solutions for construction and industrial sectors.",
        "image": "/services/Dumper.jpg"
    },
    {
        "title": "Rail Cargo",
        "description": "Seamlessly transport your goods city to city via railway, catering to both small and large cargo volumes with efficient and cost-effective solutions.",
        "image": "/services/train.jpeg"
    }
]

export default function ShiningButton() {
    const [vehicle, setVehicle] = useState(data[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [pauseAnimation, setPauseAnimation] = useState(false);
    const text = "Our Services";

    const startInterval = useCallback(() => {
        intervalRef.current = setInterval(() => {
            if (!pauseAnimation) {
                setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
            }
        }, 4000);
    }, [pauseAnimation]);

    const resetInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startInterval();
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [pauseAnimation, startInterval]);

    useEffect(() => {
        setVehicle(data[currentIndex]);
    }, [currentIndex]);

    const handleClick = (index: number) => {
        setCurrentIndex(index);
        resetInterval(); // Reset the interval to continue from the newly selected item
    };

    return (
        <div className="overflow-hidden">
            <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl px-2 pb-16 mx-auto">
                <div className="md:grid md:grid-cols-2 gap-5">
                    <div className="mt-6 md:mt-32">
                        {/* <h1 className="text-5xl font-bold">Our Services</h1> */}
                        <motion.div
                            className="flex space-x-2 justify-center md:justify-start"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className='text-6xl font-bold'
                                    variants={bounceVariants}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.div>
                        <p className="mt-3">
                            Versatile transport solutions tailored to your needs. Choose from a range of vehicles including Mazda trucks, containers in various sizes, flatbeds, dumpers, Hyundais and pickups, and efficient railway cargo services for seamless city-to-city delivery.
                        </p>
                        <motion.h3
                            className="text-2xl text-gray-500 font-semibold mt-6"
                            initial={{ y: '30%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
                        >
                            {vehicle.title}
                        </motion.h3>
                        <motion.p
                            className="text-lg mt-4 max-w-md"
                            initial={{ y: '30%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
                        >
                            {vehicle.description}
                        </motion.p>
                    </div>

                    <div className="mt-12 md:mt-24 xl:justify-self-end relative">
                        <div className="h-96 lg:w-[450px] xl:w-[510px] rounded-md bg-slate-200 xl:mr-8" />
                        <motion.img
                            key={vehicle.image}
                            initial={{ x: '30%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeIn" } }}
                            exit={{ x: '-30%', transition: { duration: 0.8, ease: "easeOut" } }}
                            src={vehicle.image} alt={vehicle.title} width={400} height={400} className="lg:w-[470px] xl:w-[510px] h-full rounded-md absolute top-6 mx-auto left-0 right-0 md:left-6 object-cover" />
                    </div>
                </div>
                <div
                    className="max-w-2xl grid grid-cols-6 gap-2 mt-20"
                    onMouseEnter={() => setPauseAnimation(true)} // Pause the animation when hovering
                    onMouseLeave={() => setPauseAnimation(false)} // Resume the animation when leaving
                >
                    {
                        data.map((item, index) => (
                            <div key={index} onClick={() => { setVehicle(item); handleClick(index); }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={120}
                                    height={120}
                                    className={cn("h-20 w-32 object-cover rounded-md cursor-pointer", item.image === vehicle.image ? "shadow-2xl -translate-y-2 transition-all transform duration-500" : "translate-y-0 transition-all transform duration-500")}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
