import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Quality = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:max-w-2xl lg:max-w-7xl mx-auto mt-20 px-4'>
            <div>
                <h2 className='text-4xl font-semibold'>Discover the Power of Our Logistics Solutions</h2>
                <p className='mt-4'>We provide top-notch logistics services to ensure your goods are handled with care and delivered on time. Our platform simplifies the shipping process, making it easy for you to manage your shipments with just a few clicks.</p>
                <Link href="/contactus">
                <Button variant="destructive" className='rounded-full mt-3'>Contact Us</Button>
                </Link>
            </div>
            <div className='space-y-8'>
                <div className='relative h-auto rounded-md p-8 bg-blue-200 transition-transform duration-500 hover:skew-y-0 -skew-y-1'>
                    <p className='absolute top-3 opacity-20 right-3 text-5xl font-semibold'>1</p>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>Schedule a Pickup</h2>
                    <p className='text-lg mt-4 text-left sm:text-center'>Arrange for your goods to be picked up at your convenience. Our team will ensure a smooth and timely collection, so you can focus on what matters most.</p>
                </div>
                <div className='relative h-auto rounded-md p-8 bg-red-200 transition-transform duration-500 hover:skew-y-0 skew-y-2'>
                    <p className='absolute top-3 opacity-20 right-3 text-5xl font-semibold'>2</p>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>Choose Transportation Mode</h2>
                    <p className='text-lg mt-4 text-left sm:text-center'>Select from our range of transportation options, including road, rail, and air, to best suit your shipping needs and budget.</p>
                </div>
                <div className='relative h-auto rounded-md p-8 bg-blue-200 transition-transform duration-500 hover:skew-y-0 -skew-y-1'>
                    <p className='absolute top-3 opacity-20 right-3 text-5xl font-semibold'>3</p>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>Get Personalized Updates</h2>
                    <p className='text-lg mt-4 text-left sm:text-center'>Receive regular updates on the status of your shipment, ensuring you are informed at every step of the delivery process.</p>
                </div>
                <div className='relative h-auto rounded-md p-8 bg-red-200 transition-transform duration-500 hover:skew-y-0 skew-y-2'>
                    <p className='absolute top-3 opacity-20 right-3 text-5xl font-semibold'>4</p>
                    <h2 className='text-2xl sm:text-3xl font-semibold'>Receive Your Goods</h2>
                    <p className='text-lg mt-4 text-left sm:text-center'>Experience hassle-free delivery with our reliable and timely service. We guarantee that your goods will arrive safely and on schedule.</p>
                </div>
            </div>
        </div>

    )
}

export default Quality