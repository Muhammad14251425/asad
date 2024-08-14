import React from 'react'
import image from "@/public/Try/TryImage.jpg"
import Box from "@/public/Try/box.png"
import Image from 'next/image'
const Try = () => {
    return (
        <div className='sm:max-w-[500px] md:max-w-[700px] 992:max-w-[965px] 1098:max-w-[1080px] xl:max-w-7xl sm:mx-auto h-auto mt-40 grid 992:gap-x-5 md:grid-cols-1 992:grid-cols-5 mx-2'>
            <div className='flex items-start h-full flex-shrink col-span-3 md:col-span-2'>
                <div className='relative h-full w-full'>
                    <Image src={image} alt='lifter loading up loads' className='h-[550px] 400:h-full w-full md:h-[520px]  md:w-96 z-0 object-cover rounded-md' />
                    <div className='bg-[#E11D07] h-56 w-48 md:h-60 md:w-56 md:right-0 md:bottom-20 bottom-20 400:bottom-10 992:h-64 992:w-52 gap-1 z-10 absolute rounded-sm right-10 400:right-8 twh:-right-1 1098:right-9 992:right-0 992:bottom-40 flex flex-col font-semibold text-white items-center justify-center'>
                        <Image src={Box} alt='box' className='h-28 w-28 object-cover ' />
                        <p className='text-4xl tracking-wider'>0m</p>
                        <p className='text-[14px]'>Delivered Goods</p>
                    </div>
                </div>
            </div>
            <div className='col-span-3 flex-grow flex flex-col gap-5 twh:ml-10 text-center mt-8 md:mt-4 992:mt-0'>
                <h2 className='text-[14px] font-semibold text-[#E11D07]'>Providing Full Range Of Transportation Worldwide.</h2>
                <h2 className='text-3xl md:text-[44px] md:leading-[52px] font-semibold'>Reliable Logistic & Transport Solutions Saves Your Time!</h2>
                <div className='grid grid-cols-1 md:grid-cols-7 mt-2 gap-x-4 text-left'>
                    <div className='col-span-4 space-y-6 text-[15px] text-gray-400'>
                        <p className=''>Equita Group is a representative logistics operator providing full range of service in the sphere of customs clearance transportation worldwide for any cargo</p>
                        <p className=''>We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and combined with experience through integrated supply chain solutions!</p>
                    </div>
                    <div className='col-span-3 mt-8 md:mt-0'>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <div className='h-2 w-2 bg-[#E11D07]' />
                                <p className='font-bold'>Quality</p>
                            </div>
                            <p className='ml-5 text-gray-400 mt-2'>Following the quality of our service thus having gained trust of our many clients.</p>
                        </div>
                        <div className='mt-2'>
                            <div className='flex gap-3 items-center'>
                                <div className='h-2 w-2 bg-[#E11D07]' />
                                <p className='font-bold'>Rellability</p>
                            </div>
                            <p className='ml-5 text-gray-400 mt-2'>We provide with cargo safety throughout all the stages of our delivery process.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Try