"use client"
import { contactUsForm } from "@/lib/mail"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { FormEvent, useEffect, useRef } from "react"
import { useFormState, useFormStatus } from "react-dom"

interface ConatactUsFormClientProps {
  openForm: boolean
  setOpenForm: (val: boolean) => void
}

const ConatactUsFormClient = ({ openForm, setOpenForm }: ConatactUsFormClientProps) => {
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(contactUsForm, { status: " ", message: "" })
  const { status, message } = state;
  const { pending } = useFormStatus()

  useEffect(() => {
    if (status === "success") {
      ref.current?.reset()
    }
  }, [status])

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={cn('bg-white shadow-lg max-h-[550px] lg:max-h-[600px] origin-center h-auto space-y-4 p-7 pb-6 w-auto mx-2 sm:mx-auto sm:w-[500px] relative rounded-3xl -mt-11',
      openForm ? "fixed h-auto top-0 mx-auto bottom-0 my-auto right-0 left-0 " : "hidden lg:block"
    )}>
      <button onClick={() => setOpenForm(false)} className="font-bold text-xl border absolute rounded-full p-4 lg:hidden -right-4 bg-white -top-4"><X /></button>
      <h2 className='text-black text-5xl'>Get in Touch</h2>
      <p className='text-gray-500 font-semibold font-sans'>You can reach us anytime</p>
      <div>
        <form ref={ref} className="space-y-4" action={formAction}>
          <div className="flex space-x-4">
            <input
              required
              name="firstName"
              type="text"
              placeholder="First name"
              className="w-full p-3 px-4 border border-gray-300 py- rounded-3xl"
            />
            <input
              required
              name="lastName"
              type="text"
              placeholder="Last name"
              className="w-full p-3 px-4 border border-gray-300 py- rounded-3xl"
            />
          </div>
          <div>
            <input
              required
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full p-3 px-4 border border-gray-300 py- rounded-3xl"
            />
          </div>
          <div>
            <input
              required
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
              className="w-full p-3 px-4 border border-gray-300 py- rounded-3xl"
            />
          </div>
          <div>
            <textarea
              required
              name="reason"
              placeholder="How can we help?"
              className="w-full p-3 px-4 border border-gray-300 py- rounded-3xl"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            // disabled={}
            className="w-full py-2 disabled:cursor-not-allowed bg-blue-600 text-white font-bold  rounded-3xl hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ConatactUsFormClient







