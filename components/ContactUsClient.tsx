'use client'
import { Button } from "@/components/ui/button";
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
import { sendContactUsMail } from "@/lib/mail";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Search } from "./Search";



const ContactUsClient = () => {
  const { pending } = useFormStatus()
  const [loading, setLoading] = useState(false)
  const [deliveryTyp, setDeliveryTyp] = useState("")
  const [disableButton, setDisableButton] = useState(false);
  const [submitted, setSubmitted] = useState(0)
  const { setShowAppointment, showAppointment } = useAppointmentContext();
  const ref = useRef<HTMLFormElement>(null)
  const { value } = useAppointmentContext()
  const [state, formAction] = useFormState(sendContactUsMail, { status: "", message: "" })
  const { status, message } = state;

  const validateForm = () => {
    const form = ref.current;
    if (!form) return false;

    const requiredFields = form.querySelectorAll("[required]");
    for (let i = 0; i < requiredFields.length; i++) {
      if (!(requiredFields[i] as HTMLInputElement).value) {
        return false;
      }
    }
    return true;
  };

  const checkLoading = () => {
    if (!validateForm()) {
      alert("Please fill all required fields."); // Optional: You can show an alert or a message to the user
      return;
    }
    setLoading(true)
  }


  useEffect(() => {
    if (status === "success") {
      ref.current?.reset()
    }
  }, [status])

  const deliveryType = (e: string) => {
    setDeliveryTyp(e)
  }

  const onSubmit = async (payload: FormData) => {
    if (!validateForm()) {
      alert("Please fill all required fields."); // Optional: You can show an alert or a message to the user
      return;
    }
    setLoading(true);
    formAction(payload);
  }
  useEffect(() => {
    let timeout: any;
    if (loading) {
      timeout = setTimeout(() => {
        setDisableButton(true);
      }, 300);
    } else {
      setDisableButton(false); // Reset if loading stops before timeout
    }

    return () => clearTimeout(timeout); // Cleanup timeout if component unmounts or loading changes
  }, [loading]);

  useEffect(() => {
    if (status === "success") {
      setSubmitted(1)
      setLoading(false)
    }
  }, [status])

  if (showAppointment && submitted === 0) {
    return (
      <div className="max-w-3xl relative mx-auto">
        <button onClick={() => setShowAppointment(false)} className="font-bold text-xl border rounded-full z-40 p-4 right-2 absolute cursor-pointer bg-white top-14"><X /></button>
        <div className="max-w-3xl rounded-[38px] bg-[#16202a] mx-auto border-2 w-full h-auto mt-2 z-30 absolute top-10 left-0 right-0 px-4 sm:px-8 lg:px-12">
          <h2 className="text-center text-white py-10 text-3xl sm:text-4xl lg:text-5xl">Schedule Booking</h2>
          <form ref={ref} action={onSubmit} className="flex flex-col gap-y-4 items-center w-full">
            <div className="w-full">
              <Label htmlFor="name" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Your Name <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="phone" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Phone Number"
                type="number"
                name="phoneNumber"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="address" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Your Address <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Address"
                type="text"
                name="address"
              />
            </div>
            <div className="w-full hidden">
              <Label htmlFor="vehicle" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                Your Address <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                value={value}
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Address"
                type="text"
                name="vehicle"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="email" className="text-white w-full mb-4 text-lg sm:text-xl max-w-2 mx-auto px-4 sm:px-6 md:px-16">
                E-mail Address <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                className="mt-2 sm:mt-4 rounded-full max-w-xl mx-auto pl-4 sm:pl-6 py-4 sm:py-6"
                placeholder="Email"
                type="email"
                name="email"
              />
            </div>
            <div className="w-full h-auto sm:h-20">
              <div className="flex w-full text-white text-2xl sm:text-3xl lg:text-4xl py-4 justify-center">
                <h2>Delivery Type</h2>
              </div>
              <Select required onValueChange={deliveryType} name="deliveryType">
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
              {deliveryTyp === "area" &&
                <Input required name="from" placeholder="Add an area" className="w-full rounded-full" />
              }
              {deliveryTyp !== "area" &&
                <Select required name="from">
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
                      {deliveryTyp === "area" &&
                        <Input name="from" placeholder="Add an area" className="w-full rounded-full" />
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>}
              <h2 className="text-white ml-4 sm:ml-6 text-lg sm:hidden">To</h2>
              {deliveryTyp === "area" &&
                <Input required name="to" placeholder="Add an area" className="w-full rounded-full" />
              }
              {deliveryTyp !== "area" && <Select required name="to">
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
              </Select>}
            </div>
            <Label htmlFor="transport" className="text-white mt-3 w-full mb-4 text-lg sm:text-xl max-w-xl mx-auto">
              <span>Selected Transport</span>
            </Label>
            <Search />
            <div className="flex items-center w-full">
              <Button
                className="my-10 text-lg rounded-full max-w-md mx-auto w-full"
                size="lg"
                variant="destructive"
                disabled={disableButton}
                onClick={checkLoading}
              >
                {loading ? (
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                  </svg>
                ) : ("Confirm Reservation")}
              </Button>
            </div>
          </form>
        </div>

      </div>
    )
  }
  if (showAppointment && submitted === 1) {
    return (
      <div className="max-w-3xl rounded-[38px] bg-[#16202a] mx-auto border-2 w-full h-80 flex items-center justify-center mt-2 z-30 fixed top-80 left-0 right-0 px-4 sm:px-8 lg:px-12">
        <button onClick={() => setShowAppointment(false)} className="font-bold text-xl border rounded-full z-40 p-4 right-2 absolute cursor-pointer bg-white top-2"><X /></button>
        <div className="thank-you-message text-4xl text-green-500 text-center mt-5 animate-fadeInUp ">
          Thank you for choosing our service
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
