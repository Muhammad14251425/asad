import { blogData } from '@/lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogs = () => {
    return (
        <div className='max-w-7xl px-4 mx-auto'>
            <div className='flex items-center'>
                <div className='w-[1%] h-24 border-l-2 ' />
                <div className='mt-10 w-[97%]'>
                    <h1 className='font-semibold text-2xl'>RECENT</h1>
                    <h1 className='text-gray-500 font-light text-2xl'>NEWS</h1>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blogData.map((item, index) => (
                        <div key={index}>
                            <Image src={item.image1} alt={item.heading1} height={400} width={400} className='object-cover h-96 w-auto rounded-t-md' />
                            <div className='border-2 px-2 pb-2 border-t-0 min-h-52 rounded-b-md flex flex-col justify-between '>
                                <h2 className='pt-4 text-2xl font-medium leading-10 w-[95%] '>{item.heading1}</h2>
                                <Link href={`/blogs/${item.id}`} className=''>
                                    <p className='mt-4 font-semibold'>Read More <span className='text-xl ml-2'>+</span></p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs