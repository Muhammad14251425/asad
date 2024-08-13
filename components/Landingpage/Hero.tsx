import { Button } from '../ui/button';
import container from "@/public/Hero1/container.jpg"
import ship from "@/public/ship.png"
import Image from 'next/image';
import HeroClient from '../HeroClient';


const Hero = () => {

    return (
        <div className='sm:max-w-[500px] md:max-w-[760px]  1098:max-w-[1080px] xl:max-w-7xl mx-auto'>
            {/* <div className='mt-32 sm:mt-40 mx-4 lg:hidden'>
                <h1
                    className=" sm:text-5xl md:text-6xl text-4xl font-bold max-w-3xl text-black">
                    <span className="letter-border block">
                        Facing Challenges in Transporting Your Loads?
                    </span>
                    <span>
                        Let Us Make It Effortless for You!
                    </span>
                </h1>
                <div className='space-x-4 mt-5 sm:ml-2'>
                    <Button variant="default" className='rounded-full '>Make a Booking</Button>
                    <Button variant="destructive" className='rounded-full '>Register a Vehicle</Button>
                </div>

            </div>
            <div className="relative h-screen w-screen mt-20 lg:mt-0 overflow-y-hidden">
                <video
                    autoPlay
                    muted
                    className="absolute inset-0 h-auto w-full object-fill"
                >
                    <source src="/LandingpageVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='absolute lg:left-6 lg:top-36 xl:top-40 3xl:top-56 3xl:left-52 hidden lg:block'>
                    <h1
                        style={{
                            textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000 `
                        }}
                        className="lg:text-4xl lg:max-w-lg  xl:max-w-2xl xl:text-5xl 2xl:text-6xl font-bold 2xl:max-w-3xl text-white">
                        <span className="letter-border block">
                            Facing Challenges in Transporting Your Loads?
                        </span>
                        <span>
                            Let Us Make It Effortless for You!
                        </span>
                    </h1>
                    <div className='space-x-4 mt-5 ml-2'>
                        <Button variant="default" className='rounded-full'>Make a Booking</Button>
                        <Button variant="destructive" className='rounded-full'>Register a Vehicle</Button>
                    </div>
                </div>
            </div> */}

            <div className='lg:mt-16'>
                <div className='px-4 mt-6 flex flex-col w-full items-cente justify-center md:max-w-7xl md:mx-auto'>
                    <h2 className='text-3xl lg:text-5xl xl:text-6xl  lg:tracking-[-3px] max-w-sm lg:max-w-none font-semibold'>Facing <span className='text-red-500' >Challenges</span> in Transporting Your Loads?</h2>
                    <div className='grid grid-cols-4 ' >
                        <h2 className='text-5xl col-span-2 xl:col-span-1 lg:text-9xl text-right'>/</h2>
                        <h2 className='col-span-2 md:col-span-2 xl:col-span-3 mt-5 lg:mt-10 text-3xl lg:text-5xl xl:text-6xl lg:tracking-[-2px] font-semibold max-w-xs lg:max-w-none'>Let Us Make It <span className='text-blue-500'>Effortless</span> for You!</h2>
                    </div>
                </div>
                {/* <AnimatedText/> */}
                <div className='mt-8 relative'>
                    <Image src={container} alt='conatiner' className='h-96 object-cover rounded-b-md' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-0 left-0' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-16 left-0' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-0 left-16' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-8 left-8' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-0 right-0' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-16 right-0' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-0 right-16' />
                    <div className='h-8 w-8 bg-slate-50 absolute top-8 right-8' />
                </div>

                {/* <div className='grid grid-cols-2 mt-8 gap-x-10 '>
                    <Image src={ship} alt='ship' className='object-cover' />
                    <div className='text-base'>
                        <div>
                            <h2 className='text-2xl font-semibold pt-6'>Reliable Courier Service That Delivers Worldwide</h2>
                            <ul className='list-disc ml-5'>
                                <li>Discover our top-notch courier services designed to ensure your packages reach their destination quickly and safely. With our state-of-the-art tracking and efficient delivery solutions, you can trust us to handle your shipments with care and precision.
                                    Experience seamless logistics with us and let us take your business to new horizons.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold pt-6'>Global Reach & Efficiency</h2>
                            <ul className='list-disc ml-5'>
                                <li>Our advanced logistics network guarantees timely delivery across the globe, no matter how far your package needs to go.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold pt-6'>Unmatched Care & Precision</h2>
                            <ul className='list-disc ml-5'>
                                <li> From careful handling to accurate tracking, we ensure every shipment is treated with the utmost care and attention</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <div className='mt-10 text-center'>
                    <h2 className='text-2xl font-semibold'>Delivering your promises, with precision and care</h2>
                    <p className='text-lg max-w-3xl font-medium mx-auto'>Our courier services ensure timely and safe delivery of goods across the globe, using trucks, lorries, and trains. Trust us to move your business forward with unmatched reliability.</p>
                    <div className='flex gap-6 mt-8'>
                        {imageData.map((item, index) => (
                            <div key={index} className='relative'>
                                <div className={cn('absolute top-4 left-2 space-y-4 text-white transform transition-all duration-1000 z-40 text-left',
                                    checkIndex === index ? "translate-y-16":"hidden translate-y-0" )}>
                                    <h2 className='text-2xl font-semibold'>{item.heading}</h2>
                                    <p className='text-lg '>{item.text}</p>
                                </div>
                                <Image
                                    src={item.image}
                                    onClick={() => setCheckIndex(index)}
                                    alt='truck'
                                    width={400}
                                    height={400}
                                    className={cn('cursor-pointer object-cover h-96 w-96 rounded-md transform transition-all duration-1000',
                                        checkIndex === index ? "translate-y-16 blur-sm" : "translate-y-0 blur-none")}
                                />
                            </div>
                        ))}
                    </div>
                </div> */}

                <HeroClient />
            </div>

        </div>
    );
};

export default Hero;
