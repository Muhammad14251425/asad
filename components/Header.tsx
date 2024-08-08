'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react";
import SmallNavbar from "./Navbar/SmallNavbar";

export default function Example() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className="border-b sticky top-0 z-50 bg-white px-4"
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
            <span className="text-slate-500 text-2xl font-semibold">SwiftShift</span>
            {/* <Image alt="3Ulogistics" src={Logo} className="h-28 sm:h-36 w-auto" /> */}
          </a>
        </div>
        <div className="gap-5 lg:gap-10 font-light pb-3 text-lg mt-3 cursor-pointer hidden md:flex">
          <Link href="/aboutus">
          <h2 className="hover:font-medium">About Us</h2>
          </Link>
          <Link href="/services">
          <h2 className="hover:font-medium">Our Services</h2>
          </Link>
          <Link href="/contactus">
            <h2 className="hover:font-medium">Contact Us</h2>
          </Link>
        </div>
        <div className="flex items-center gap-x-3">
          <Button variant="destructive" className="rounded-full">Book an Appointment</Button>
          <div className="md:hidden">
            <SmallNavbar />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
