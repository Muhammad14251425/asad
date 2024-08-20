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

const frameworks = [
  {
    value: "dumper",
    label: "Dumper",
  },
  {
    value: "carry",
    label: "Carry",
  },
  {
    value: "hyundai-big-truck",
    label: "Hyundai Big truck",
  },
  {
    value: "load-van",
    label: "Load Van",
  },
  {
    value: "train",
    label: "Train",
  },
  {
    value: "carry-truck",
    label: "Carry Truck",
  },
]

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
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Vehicle"}
        />
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" >
        <Command>
          <CommandInput placeholder="Search a Vehicle" />
          <CommandList >
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup >
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
