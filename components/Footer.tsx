'use client'
import { useAppointmentContext } from '@/context/AppointmentContext';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const { showAppointment } = useAppointmentContext();
  const pathName = usePathname()
  
  return (
    <footer className={cn("relative bg-blueGray-200 pt-8 pb-6 border-t  bg-[#e6f0fe] border-[#e6f0fe] mt-10", showAppointment && pathName === "/services" && "mt-80")}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">3<span className='text-red-500'>U</span> Logistics</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond within 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 gap-3 flex">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaWhatsapp />
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaFacebook />
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <FaInstagram />              
                </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/services">Our Services</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contactus">Contact Us</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blogs">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
