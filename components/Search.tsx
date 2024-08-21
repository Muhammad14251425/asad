"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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
import { useAppointmentContext } from "@/context/AppointmentContext"
import { Input } from "./ui/input"

const vehicles = [
  {
    value: "20-ft-mazda",
    label: "20 ft Mazda",
  },
  {
    value: "16-ft-mazda",
    label: "16 ft Mazda",
  },
  {
    value: "hyundai",
    label: "Hyundai",
  },
  {
    value: "20-ft-container",
    label: "20 ft Container",
  },
  {
    value: "40-ft-container",
    label: "40 ft Container",
  },
  {
    value: "24-ft-container",
    label: "24 ft Container",
  },
  {
    value: "22-ft-mazda",
    label: "22 ft Mazda",
  },
  {
    value: "40-ft-flat-bed",
    label: "40 ft Flat Bed",
  },
  {
    value: "pickup",
    label: "Pickup",
  },
  {
    value: "hyundai",
    label: "Hyundai",
  },
  {
    value: "20-ft-high-cube",
    label: "20 ft High Cube",
  },
  {
    value: "16-ft-container",
    label: "16 ft Container",
  },
  {
    value: "18-ft-mazda",
    label: "18 ft Mazda",
  },
  {
    value: "40-ft-open-trailer",
    label: "40 ft Open Trailer",
  },
  {
    value: "16-ft-mazda-local",
    label: "16 ft Mazda Local",
  },
  {
    value: "train",
    label: "Train",
  },
];


export function Search() {
  const [open, setOpen] = React.useState(false)
  const { setValue, value } = useAppointmentContext()
  return (
    <Popover open={open} onOpenChange={setOpen}  >
      <PopoverTrigger asChild>
        <Input
          role="combobox"
          aria-expanded={open}
          className="max-w-xl mx-auto rounded-full justify-between"
          name="vehicle"
          value={value
            ? vehicles.find((framework) => framework.value === value)?.label
            : "Select Vehicle"}
        />
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" >
        <Command>
          <CommandInput placeholder="Search a Vehicle" />
          <CommandList >
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup >
              {vehicles.map((vehicle) => (
                <CommandItem
                  key={vehicle.value}
                  value={vehicle.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="font-sans"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === vehicle.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {vehicle.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
