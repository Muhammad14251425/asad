'use client'
import { useState } from 'react'
import ConatactUsFormClient from './ConatactUsFormClient'
import FAQ from './FAQ'
import { Button } from '@/components/ui/button'
import { motion } from "framer-motion"
import { bounceVariants, containerVariants } from '../about/page'

const data = [
  {
    "heading": "Customer Support",
    "paragraph": "Our support team is available around the clock to address any concerns or queries you may have."
  },
  {
    "heading": "Feedback and Suggestions",
    "paragraph": "We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy."
  },
  {
    "heading": "Media Inquiries",
    "paragraph": "For media-related questions or press inquiries, please contact us at media@snappyapp.com."
  }
]


const ContactUs = () => {
  const [openForm, setOpenForm] = useState(false)
  const text = "Contact Us";

  return (
    <div>
      <div className='bg-[#e6f0fe] lg:min-h-screen  h-auto pb-10 z-0'>
        <div className='max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl px-2 mx-auto grid lg:grid-cols-5 gap-x-0 pt-10 sm:pt-20'>
          <div className='lg:col-span-5 xl:col-span-3 text-gray-500 text-lg '>
            <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-3 lg:col-span-1'>
              <div className='md:col-span-2 lg:col-span-1 sm:text-center md:text-left'>
                {/* <h1 className='text-6xl font-bold text-black'>Contact Us</h1> */}
                <motion.div
                  className='flex space-x-2 justify-center md:justify-start'
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {text.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className='text-6xl font-bold text-black'
                      variants={bounceVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
                <p className='mt-10 md:max-w-[370px]'>
                  Email, call, or complete the form to learn how <span className='font-bold text-black'>3U logistics</span> can solve your messaging problem
                </p>
                <div className='mt-7'>
                  <p>yasir.mukhtar@3ulogistic.com</p>
                  <p>abdullah.shaffi@3ulogistic.com</p>
                  <p>obaidullah@3ulogistic.com</p>
                </div>
                <div className='my-7'>
                  <p>+92 300 9898358</p>
                  <p>+92 321 4347303</p>
                </div>
              </div>

              <div className='flex lg:hidden my-5 md:my-0 sm:items-center sm:justify-center'>
                <Button onClick={() => setOpenForm(true)} className='rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-600' variant="destructive">Get in Touch</Button>
              </div>
              <div className='hidden lg:block xl:hidden -mt-4'>
                <ConatactUsFormClient openForm={openForm} setOpenForm={setOpenForm} />
              </div>
            </div>
            <div className='grid sm:grid-cols-3 gap-4 md:mt-14 lg:mt-4  xl:mt-16'>
              {
                data.map((item, index) => (
                  <div key={index}>
                    <h3 className='text-black font-semibold text-xl mb-4'>{item.heading}</h3>
                    <p className='text-lg'>{item.paragraph}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='col-span-2 hidden xl:block'>
            <ConatactUsFormClient openForm={openForm} setOpenForm={setOpenForm} />
          </div>
        </div>
        <div className='lg:hidden'>
          <ConatactUsFormClient openForm={openForm} setOpenForm={setOpenForm} />
        </div>
      </div>
      <div className="max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-52 xl:gap-10 lg:justify-between mt-20 ">
        <div className=" lg:w-1/2 p-4 hidden md:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.2107203333094!2d74.28070879493973!3d31.50871587267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037c61883b2d%3A0x375fda7aa6927c36!2s3U%20Movers!5e1!3m2!1sen!2s!4v1723079245328!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 lg:w-1/2 p-2 md:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.2107203333094!2d74.28070879493973!3d31.50871587267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037c61883b2d%3A0x375fda7aa6927c36!2s3U%20Movers!5e1!3m2!1sen!2s!4v1723079245328!5m2!1sen!2s"
            width="350"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-3xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" p-4">
          <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
          <p className="text-5xl font-semibold mb-2">Connecting Near and Far</p>
          <h3 className="text-2xl font-semibold mb-2">Headquarters</h3>
          <p className="text-lg">
            Iqbal,<br />
            619 Allama, <br />
            Umer Block Umar Block Town,<br />
            Lahore,<br />
            Punjab 54000
          </p>
        </div>
      </div>
      <FAQ />
    </div>
  )
}

export default ContactUs



