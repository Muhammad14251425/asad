'use client'
import Logo from "@/public/3ULogistics.png"
import Image from 'next/image'
import { NavigationMenuBar } from "./Navbar/Navigationbar"
import SmallNavbar from "./Navbar/SmallNavbar"
import { Button } from "./ui/button"
import Link from "next/link"






export default function Example() {

  return (
    <header className="border-b ">
      <nav aria-label="Global" className="flex max-w-7xl mx-auto justify-between items-center ">
        <div className="flex items-center">
          <a href="/" className="-m-1.5  py-7">
            <span className="text-slate-500 text-2xl font-semibold">SwiftShift</span>
            {/* <Image alt="3Ulogistics" src={Logo} className="h-28 sm:h-36 w-auto" /> */}
          </a>
        </div>
        <div className="flex items-center gap-10 font-light text-lg mt-3 cursor-pointer">
          <h2 className="hover:font-medium">About Us</h2>
          <h2 className="hover:font-medium">Our Services</h2>
          <h2 className="hover:font-medium">Evalues</h2>
          <h2 className="hover:font-medium">Contact Us</h2>
        </div>
        <Link href="/contactus">
          <Button variant="destructive" className="rounded-full">Book an Appointment</Button>
        </Link>
      </nav>
    </header>
  )
}
