'use client'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

const Hero4 = () => {
    const [enable, setEnable] = useState(false)
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));
    return (
        <div className="overflow-hidden">
            {enable && (
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2 } }}
                    exit={{ x: '100%', opacity: 0, transition: { duration: 1.2 } }}
                    className="w-full lg:w-[65%] pt-10 h-[50%] pb-6 rounded-l-3xl"
                >
                    <Carousel items={cards} />
                </motion.div>
            )}
            <AnimatePresence>
                {!enable && (
                    <motion.div
                        className="h-screen w-full bg-black flex items-center justify-center"
                        initial={{ x: '0%', opacity: 1 }}
                        animate={{ x: '0%', opacity: 1 }}
                        exit={{ x: '100%', opacity: 0, transition: { duration: 1.2 } }}
                    >
                        <div className=" h-[500px] w-[640px]">
                            <h2 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                                Why Choose Us for Your Transportation Needs
                            </h2>
                            <div className="flex w-full justify-center pt-10">
                                <Button variant="destructive" className="flex items-center gap-x-4" onClick={() => setEnable(true)}>
                                    Click Here
                                    <span>
                                        <BsArrowRightCircleFill className="w-5 h-5" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Hero4



const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

export const data = [
    {
        category: "Extensive Reach",
        title: "Our extensive network ensures your goods are delivered safely and efficient",
        src: "/carosel/pic1.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Advanced Tracking Technology",
        title: "Follow-ups and tracking keeps you updated on your shipment's status, offering peace of mind from dispatch to delivery.",
        src: "/carosel/pic2.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Customized Solutions",
        title: "Tailored logistics solutions to meet the unique needs of your business, ensuring maximum efficiency and satisfaction.",
        src: "/carosel/pic3.jpeg",
        content: <DummyContent />,
    },

    {
        category: "Expert Team",
        title: "Our experienced logistics professionals are dedicated to providing exceptional service and support for all your shipping needs.",
        src: "/carosel/pic4.jpeg",
        content: <DummyContent />,
    },
    {
        category: "Extra-ordinary Customer Support",
        title: "Our dedicated support team is available around the clock to assist with follow-ups, ensuring a smooth and hassle-free experience.",
        src: "/carosel/pic5.jpeg",
        content: <DummyContent />,
    }
];