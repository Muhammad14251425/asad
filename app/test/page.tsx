'use client'
import { Search } from "@/components/Search";
import { sendContactUsMail } from "@/lib/mail";
import { useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom"

const Page = () => {
    const ref = useRef<HTMLFormElement>(null)
    const [state, formAction] = useFormState(sendContactUsMail, { status: "", message: "" })
    const { status, message } = state;
    
    useEffect(() => {
        if (status == 'success') {
            ref.current?.reset()
            console.log(message)
        } else if (status == 'error') {
            console.log(message)
        }
    }, [state, message, status])

    return (
        // <form ref={ref} action={formAction} className="flex flex-col justify-between items-center gap-x-4 w-full max-w-md mx-auto">
        //     <input
        //         type="text"
        //         placeholder="two"
        //         minLength={3}
        //         maxLength={54}
        //         required
        //         name="add_task"
        //         className="w-full px-2 py-1 border border-gray-100 rounded-md"
        //     />
        //     <SubmitButton />
        // </form>
        <div className="max-w-md mx-auto">
            
        </div>
    )
}

export default Page




function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} className="px-2 py-1 bg-teal-600 text-white rounded-md w-full mt-4" >
            {
                pending ? "Saving..." : "Save"
            }
        </button >
    )
}