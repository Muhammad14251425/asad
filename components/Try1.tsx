import train from "@/public/Try1/train.png"
import Lorry from "@/public/Try1/lorry.webp"
import Truck from "@/public/Try1/shortTruck .webp"
import Image from "next/image"

import image1 from "@/public/Try2/1.jpg"
import image2 from "@/public/Try2/2.jpg"
import image3 from "@/public/Try2/3.jpg"

const Try1 = () => {
  return (
    // <div className='sm:max-w-[500px] md:max-w-[700px] 992:max-w-[965px] 1098:max-w-[1080px] sm:mx-auto h-[600px] mt-40 mx-2'>
    //     <div className='grid grid-cols-2 gap-0'>
    //         <div className=''>
    //             <p className='text-base text-[#E11D07]'>Services We Offer</p>
    //             <h2 className='mt-3 font-bold text-4xl max-w-[90%]'>We Manage Lead Logistics For World’s Multinational Companies.</h2>
    //         </div>
    //         <p className='text-base mt-8 text-gray-400'>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.</p>
    //     </div>
    //     <div className='grid grid-cols-3 gap-8 mt-12 w-full'>
    //         <Image src={Truck} alt="truck" className="object-contain h-[450px] " />
    //         <Image src={Lorry} alt="Lorry" className="object-scale-down h-[450px] " />
    //         <Image src={train} alt="Train" className="object-cover h-[450px] " />
    //     </div>
    // </div>

    <div className="sm:max-w-[500px] md:max-w-[700px] 992:max-w-[965px] 1098:max-w-[1080px] text-center sm:mx-auto h-[600px] mt-40 mx-2">
        <h3 className="text-[#E11D07] text-xl font-bold">Insight and trends</h3>
        <h2 className="text-5xl font-bold mt-2">Recent articles</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mt-8">Follow our latest news and thoughts which focuses exclusively on insight, industry trends, top news headlines.</p>
        <div className="grid grid-cols-3 gap-x-6 mt-14">
            <div className="overflow-hidden">
                <Image src={image1} alt="image1" className="rounded-md cursor-pointer hover:scale-125 duration-1000 transition-all transform" />
            </div>
            <div className="overflow-hidden">
                <Image src={image2} alt="image1" className="rounded-md cursor-pointer hover:scale-125 duration-1000 transition-all transform" />
            </div>
            <div className="overflow-hidden">
                <Image src={image3} alt="image1" className="rounded-md cursor-pointer hover:scale-125 duration-1000 transition-all transform" />
            </div>
        </div>
    </div>
  )
}

export default Try1