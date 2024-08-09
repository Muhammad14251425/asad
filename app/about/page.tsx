import React from 'react'
import VisionMission from './VisionMission'
import MainImage from "@/public/aboutus/Page 2.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div className='max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl px-2 mx-auto'>
      <div className='my-6 relative mb-20'>
        <Image src={MainImage} alt='Trucks' className='h-[500px] object-cover rounded-sm w-full' />
        <div className=''>
          <h3 className='absolute text-white text-9xl font-bold left-14 top-20 tracking-[15px]'>About Us</h3>
        </div>
      </div>
      <VisionMission />
      {/* <div className="h-[600px]">
        <LayoutGrid cards={cards} />
      </div> */}
    </div>
  )
}

export default page