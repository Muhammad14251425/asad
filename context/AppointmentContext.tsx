'use client'
import { createContext, ReactNode, useContext, useState } from "react";

interface AppointmentContextType {
    showAppointment: boolean;
    setShowAppointment: React.Dispatch<React.SetStateAction<boolean>>;
    value: string;
    setValue : React.Dispatch<React.SetStateAction<string>>
}
export const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

const AppointmentContextProvider = ({ children }: { children: ReactNode }) => {
    const [showAppointment, setShowAppointment] = useState(false)
    const [value, setValue] = useState("")
    return (
        <AppointmentContext.Provider
            value={{
                showAppointment,
                value,
                setShowAppointment,
                setValue
            }}
        >
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentContextProvider

export const useAppointmentContext = () => {
    const context = useContext(AppointmentContext);

    if (!context) {
        throw new Error("use Favourite must be used with in a FavouriteContextProvider")
    }
    return context
}