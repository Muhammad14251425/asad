'use client'
import AppointmentContextProvider from "./AppointmentContext"

interface CartProviderProps {
    children: React.ReactNode
}

export default function AppointmentProvider ({children}:CartProviderProps){
    return (
        <AppointmentContextProvider>{children}</AppointmentContextProvider>
    )
}