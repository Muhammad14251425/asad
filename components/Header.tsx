'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";
import SmallNavbar from "./Navbar/SmallNavbar";
import { sendMail } from "@/lib/mail";
import { useAppointmentContext } from "@/context/AppointmentContext";
import { useRouter } from "next/navigation";

export default function Example() {
  const { scrollY } = useScroll();
  const router = useRouter()
  const [hidden, setHidden] = useState(false);
  const [white, setWhite] = useState(false)

  const { setShowAppointment } = useAppointmentContext();


  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest > 350) {
      setWhite(true)
    }
    else if(latest < 350){
      setWhite(false)
    }
    
  });

  return (
    <motion.header
      className={`sticky top-0 z-50  px-4 ${white && "bg-white border-b"}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <nav aria-label="Global" className="flex max-w-7xl mx-auto justify-between items-center ">
        <div className="flex items-center">
          <a href="/" className="-m-1.5  py-7">
            <h1 className="text-black  text-xl 400:text-2xl font-semibold">3<span className="text-red-500">U</span> Logistics</h1>
          </a>
        </div>
        <div className="gap-5 lg:gap-10 font-light pb-3 text-lg mt-3 cursor-pointer hidden md:flex">
          <Link href="/about">
            <h2 className="hover:font-medium">About Us</h2>
          </Link>
          <Link href="/services">
            <h2 className="hover:font-medium">Our Services</h2>
          </Link>
          <Link href="/contactus">
            <h2 className="hover:font-medium">Contact Us</h2>
          </Link>
          <Link href="/blogs">
            <h2 className="hover:font-medium">Blogs</h2>
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <Button variant="destructive" onClick={() => { setShowAppointment(true); router.push("#") }} className="rounded-full">Book an Appointment</Button>
          <div className="md:hidden">
            <SmallNavbar />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
