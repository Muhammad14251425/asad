'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import vehicle1 from "@/public/finalizedImages/Dumper-removebg.png";
import vehicle2 from "@/public/finalizedImages/carry.png";
import vehicle3 from "@/public/finalizedImages/Hyundai-Big-truck-removebg-preview.png";
import vehicle4 from "@/public/finalizedImages/load-van.png";
import vehicle5 from "@/public/finalizedImages/train.png";
import vehicle6 from "@/public/finalizedImages/carry-truck.png";
import Image, { StaticImageData } from "next/image";
import { citiesInPakistan, countries } from "@/lib/data";

const vehicle = [
  {
    name: "Dumper",
    image: vehicle1
  },
  {
    name: "carry",
    image: vehicle2
  },
  {
    name: "Hyundai-Big-truck",
    image: vehicle3
  },
  {
    name: "load-van",
    image: vehicle4
  },
  {
    name: "train",
    image: vehicle5
  },
  {
    name: "carry-truck",
    image: vehicle6
  },
]

const ContactUsClient = () => {
  const [deliveryTyp, setDeliveryTyp] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicle[0].name);

  useEffect(() => {
    setSelectedVehicle(vehicle[selectedIndex].name);
  }, [selectedIndex]);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % vehicle.length);
  };

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? vehicle.length - 1 : prevIndex - 1
    );
  };
  const [entrance, setEntrance] = useState({
    name: true,
    phoneNumber: false
  })
  const placeholders = [
    "Name",
    "Name",
  ];
  const placeholder1 = [
    "phone Number",
    "phone Number",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    setEntrance((prev) => ({
      ...prev,
      name: false,
    }))
    setTimeout(() => {
      setEntrance((prev) => ({
        ...prev,
        phoneNumber: true
      }))
    }, 1000)
  };

  const deliveryType = (e: string) => {
    setDeliveryTyp(e)
  }

  return (
    <div className="bg-[#b0C6d8]">
      <div className='max-w-3xl rounded-[38px] bg-[#16202a] mx-auto border-2 w-full h-auto mt-2' >
        <h2 className='text-center text-white py-10 text-5xl' >Schedule Booking</h2>
        <div className="flex flex-col gap-y-4 items-center w-full">
          <div className="w-full">
            <Label htmlFor="email" className="text-white w-full mb-4 text-xl max-w-xl mx-auto p-28">Your Name <span className="text-red-500" >*</span></Label>
            <Input className="mt-4 rounded-full max-w-xl mx-auto pl-6 py-6" placeholder="Name" />
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="text-white w-full mb-4 text-xl max-w-xl mx-auto p-28">Phone Number <span className="text-red-500" >*</span></Label>
            <Input className="mt-4 rounded-full max-w-xl mx-auto pl-6 py-6" placeholder="Phone Number" type="number" />
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="text-white w-full mb-4 text-xl max-w-xl mx-auto p-28">Your Address <span className="text-red-500" >*</span></Label>
            <Input className="mt-4 rounded-full max-w-xl mx-auto pl-6 py-6" placeholder="Address" type="text" />
          </div>
          <div className="w-full">
            <Label htmlFor="email" className="text-white w-full mb-4 py-6 text-xl max-w-xl mx-auto p-28">
              <span>E-mail Address </span>
            </Label>
            <Input className="mt-4 rounded-full max-w-xl mx-auto pl-6 py-6" placeholder="Emil" type="email" />
          </div>
          <div className="w-full h-20">
            <div className="flex w-full text-white text-4xl py-4  justify-center">
              <h2 className="">Delivery Type</h2>
            </div>
            <Select onValueChange={deliveryType}>
              <SelectTrigger className="w-full rounded-full py-6 mt-4 font-bold max-w-xl pl-6 mx-auto">
                <SelectValue placeholder="Delivery Types" />
              </SelectTrigger>
              <SelectContent className="rounded-3xl" >
                <SelectGroup>
                  <SelectItem value="city">City -to- City</SelectItem>
                  <SelectItem value="country">Country -to- Country</SelectItem>
                  <SelectItem value="area">Area -to- Area</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="grid grid-cols-2  w-full max-w-xl gap-4">

          </div> */}

          <div className="grid grid-cols-2 mt-12 w-full max-w-xl gap-4" >
            <h2 className="text-white ml-6 text-lg">From</h2>
            <h2 className="text-white ml-6 text-lg">To</h2>
            <Select>
              <SelectTrigger disabled={deliveryTyp === ""} className="w-full py-6 rounded-full -mt-2 max-w-xl pl-6 mx-auto">
                <SelectValue placeholder={deliveryTyp === "city" ? "City" : deliveryTyp === "country" ? "Country" : deliveryTyp === "area" ? "Area" : "Delivery Types"} />
              </SelectTrigger>
              <SelectContent className="rounded-3xl ">
                <SelectGroup>
                  {
                    deliveryTyp === "city" && (
                      citiesInPakistan.map((data, index) => (
                        <SelectItem value={data} key={index} >{data}</SelectItem>
                      ))
                    )
                  }
                  {
                    deliveryTyp === "country" && (
                      countries.map((data, index) => (
                        <SelectItem value={data} key={index} >{data}</SelectItem>
                      ))
                    )
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger disabled={deliveryTyp === ""} className="w-full py-6 rounded-full -mt-2 max-w-xl pl-6 mx-auto">
                <SelectValue placeholder={deliveryTyp === "city" ? "City" : deliveryTyp === "country" ? "Country" : deliveryTyp === "area" ? "Area" : "Delivery Types"} />
              </SelectTrigger>
              <SelectContent className="rounded-3xl ">
                <SelectGroup>
                  {
                    deliveryTyp === "city" && (
                      citiesInPakistan.map((data, index) => (
                        <SelectItem value={data} key={index} >{data}</SelectItem>
                      ))
                    )

                  }
                  {
                    deliveryTyp === "country" && (
                      countries.map((data, index) => (
                        <SelectItem value={data} key={index} >{data}</SelectItem>
                      ))
                    )
                  }
                </SelectGroup>
              </SelectContent>
            </Select>

          </div>
          <Label htmlFor="email" className="text-white mt-3 w-full mb-4 text-xl max-w-xl mx-auto">
            <span>Selected Transport </span>
          </Label>
          <div className="mb-2 bg-white rounded-full max-w-xl" >
            <h2 className="mx-20 my-3 font-semibold">{selectedVehicle}</h2>
          </div>
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              {vehicle.map((item, index) => (
                <CarouselItem
                  key={index}
                  onChange={() => setSelectedVehicle(item.name)}
                  className={index === selectedIndex ? 'active' : ''}
                >
                  <div className="p-1">
                    <Image src={item.image} alt="vehicle" className="touch-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
            // @ts-ignore
            handlePrevious={handlePrevious}
             />
            <CarouselNext 
            // @ts-ignore
            handleNext={handleNext}
             />
            <div>{selectedVehicle}</div>
          </Carousel>


        </div>
        <div className="flex items-center w-full ">
          <Button className="my-10 text-lg rounded-full max-w-md mx-auto w-full" disabled size="lg" variant="destructive">Confirm Reservation</Button>
        </div>
      </div>

    </div>
  )
}

export default ContactUsClient


const Transport = ({ img, name }: { img: StaticImageData, name: string }) => {
  return (
    <div className="border-2 border-blac hover:border hover:border-green-500 active:border-2 w-72 h-60 rounded-md relative">
      <Image src={img} alt="transport vehice" className="h-full w-full object-contain" />
      <h2 className="absolute bottom-0 font-bold left-[40%] right-1/2 w-full" >{name}</h2>
    </div>
  )
}


// Confirm Reservation
