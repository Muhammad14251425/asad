'use client'
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import { useAppointmentContext } from "@/context/AppointmentContext";
import { citiesInPakistan, countries } from "@/lib/data";
import { sendMail } from "@/lib/mail";
import vehicle6 from "@/public/finalizedImages/carry-truck.png";
import vehicle2 from "@/public/finalizedImages/carry.png";
import vehicle1 from "@/public/finalizedImages/Dumper-removebg.png";
import vehicle3 from "@/public/finalizedImages/Hyundai-Big-truck-removebg-preview.png";
import vehicle4 from "@/public/finalizedImages/load-van.png";
import vehicle5 from "@/public/finalizedImages/train.png";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

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
  const {setShowAppointment, showAppointment} = useAppointmentContext();
  const [scheduleBookingData, setScheduleBookingData] = useState({
    name : "",
    phoneNumber:"",
    address:"",
    emailAddress:"",
    deliveryType:"",
    from:"",
    to:"",
    selectedTransport:""
  })
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
  };

  const sendData = {
    to: "muhammadfawwad88@gmail.com",
    name: "Muhammad Fawwad Ahmed",
    message: "sc",
    status: "Main nhi btaoun ga"
  }
  const sendEmail = async () => {
    console.log("tried sending mail")
    await sendMail(sendData)
    console.log("sent mail")
  }

  const deliveryType = (e: string) => {
    setDeliveryTyp(e)
  }
  if (showAppointment) {
    return (
      <div className="max-w-3xl relative mx-auto">
        <button onClick={() => setShowAppointment(false)} className="font-bold text-xl border rounded-full z-40 p-4 right-2 absolute cursor-pointer bg-white top-14"><X /></button>
        <div className="max-w-3xl rounded-[38px] bg-[#16202a] mx-auto border-2 w-full h-auto mt-2 z-30 absolute top-10 left-0 right-0 px-4 sm:px-8 lg:px-12">
          <h2 className="text-center text-white py-10 text-3xl sm:text-4xl lg:text-5xl">Schedule Booking</h2>
          <div className="flex flex-col gap-y-4 items-center w-full">
            <div className="w-full">
              <Label htmlFor="name" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="phone" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Phone Number"
                type="number"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="address" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Your Address <span className="text-red-500">*</span>
              </Label>
              <Input
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Address"
                type="text"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="email" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                E-mail Address
              </Label>
              <Input
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="w-full h-auto sm:h-20">
              <div className="flex w-full text-white text-2xl sm:text-3xl lg:text-4xl py-4 justify-center">
                <h2>Delivery Type</h2>
              </div>
              <Select onValueChange={deliveryType}>
                <SelectTrigger className="w-full rounded-full py-4 sm:py-6 mt-4 font-bold max-w-xl pl-4 sm:pl-6 mx-auto">
                  <SelectValue placeholder="Delivery Types" />
                </SelectTrigger>
                <SelectContent className="rounded-3xl">
                  <SelectGroup>
                    <SelectItem value="city">City -to- City</SelectItem>
                    <SelectItem value="country">Country -to- Country</SelectItem>
                    <SelectItem value="area">Area -to- Area</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 sm:mt-12 w-full max-w-xl gap-4">
              <h2 className="text-white ml-4 sm:ml-6 text-lg">From</h2>
              <h2 className="text-white ml-4 sm:ml-6 text-lg hidden sm:block">To</h2>
              <Select>
                <SelectTrigger disabled={deliveryTyp === ""} className="w-full py-4 sm:py-6 rounded-full -mt-2 max-w-xl pl-4 sm:pl-6 mx-auto">
                  <SelectValue placeholder={deliveryTyp === "city" ? "City" : deliveryTyp === "country" ? "Country" : deliveryTyp === "area" ? "Area" : "Delivery Types"} />
                </SelectTrigger>
                <SelectContent className="rounded-3xl">
                  <SelectGroup>
                    {deliveryTyp === "city" &&
                      citiesInPakistan.map((data, index) => (
                        <SelectItem value={data} key={index}>
                          {data}
                        </SelectItem>
                      ))}
                    {deliveryTyp === "country" &&
                      countries.map((data, index) => (
                        <SelectItem value={data} key={index}>
                          {data}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <h2 className="text-white ml-4 sm:ml-6 text-lg sm:hidden">To</h2>
              <Select>
                <SelectTrigger disabled={deliveryTyp === ""} className="w-full py-4 sm:py-6 rounded-full -mt-2 max-w-xl pl-4 sm:pl-6 mx-auto">
                  <SelectValue placeholder={deliveryTyp === "city" ? "City" : deliveryTyp === "country" ? "Country" : deliveryTyp === "area" ? "Area" : "Delivery Types"} />
                </SelectTrigger>
                <SelectContent className="rounded-3xl">
                  <SelectGroup>
                    {deliveryTyp === "city" &&
                      citiesInPakistan.map((data, index) => (
                        <SelectItem value={data} key={index}>
                          {data}
                        </SelectItem>
                      ))}
                    {deliveryTyp === "country" &&
                      countries.map((data, index) => (
                        <SelectItem value={data} key={index}>
                          {data}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Label htmlFor="transport" className="text-white mt-3 w-full mb-4 text-lg sm:text-xl max-w-xl mx-auto">
              <span>Selected Transport</span>
            </Label>
            <div className="mb-2 bg-white rounded-full max-w-xl">
              <h2 className="mx-4 sm:mx-20 my-3 font-semibold">{selectedVehicle}</h2>
            </div>
            <Carousel className="w-full max-w-xl pointer-events-none">
              <CarouselContent>
                {vehicle.map((item, index) => (
                  <CarouselItem
                    key={index}
                    onChange={() => setSelectedVehicle(item.name)}
                    className={index === selectedIndex ? "active" : ""}
                  >
                    <div className="p-1 pointer-events-none">
                      <Image src={item.image} alt="vehicle" className="touch-none" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="translate-x-12  md:translate-x-0 pointer-events-auto">
                <CarouselPrevious
                  // @ts-ignore
                  handlePrevious={handlePrevious}
                />
              </div>
              <div className="-translate-x-12 md:translate-x-0 pointer-events-auto">
                <CarouselNext
                  // @ts-ignore
                  handleNext={handleNext}
                />
              </div>
            </Carousel>
          </div>
          <div className="flex items-center w-full">
            <Button
              className="my-10 text-lg rounded-full max-w-md mx-auto w-full"
              disabled
              size="lg"
              variant="destructive"
            >
              Confirm Reservation
            </Button>
          </div>
        </div>

      </div>
    )
  }
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
