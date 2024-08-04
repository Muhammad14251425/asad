'use client'
import * as React from 'react'
import { motion } from "framer-motion"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Logo from '@/public/3ULogistics.png'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const components: { title: string, description: string }[] = [
    {
        title: "Frozen",

        description:
            "Recommended template for most use cases. Includes all the components you need to get started.",

    },
    {
        title: "Swift",

        description:
            "A template with a minimal set of components. Use this template if you want to build your own components.",
    },
    {
        title: "Tuscany",

        description:
            "Advanced template with more components and features. Use this template if you want to build a complex UI.",
    },
    {
        title: "Amber",

        description: "Great for building a marketing or landing page.",
    },
    {
        title: "Tide",

        description:
            "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
    },
    {
        title: "Mint",

        description:
            "Nice template for building a blog or a content-heavy website.",
    },
]

export function NavigationMenuBar() {
    const path = usePathname()

    return (
        <NavigationMenu>
            <NavigationMenuList >
                <motion.div
                    className='hidden md:flex lg:gap-2 bg-[#a3e5ff] lg:bg-transparent py-3 px-2 rounded-l-full'
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={`${path === "/" ? "lg:text-white" : "lg:text-[#a3e5ff]"}`} >
                            Getting started
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Image src={Logo} alt='3Ulogistics' className='h-10 w-10' />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Bird Software
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                ecommerce platform for selling digital products.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem title="Introduction">
                                    Learn about the basis of Bird.
                                </ListItem>
                                <ListItem title="Demo">
                                    How to build a store in 60 secounds with Biird
                                </ListItem>
                                <ListItem title="Community">
                                    Join the community and get help or Support.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={`${path === "/" ? "lg:text-white" : "lg:text-[#a3e5ff]"}`} >Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}

                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className='text-md font-medium'>
                                <Button variant="ghost" className={`d:text-sm ${path === "/" ? "lg:text-white" : "lg:text-[#a3e5ff]"}   hover:bg-transparent active:bg-transparent lg:text-md`}>
                                    Documentation
                                </Button>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className='text-md font-medium'>
                                <Button variant="ghost" className={`md:text-sm ${path === "/" ? "lg:text-white" : "lg:text-[#a3e5ff]"}  hover:bg-transparent active:bg-transparent lg:text-md`}>
                                    Pricing
                                </Button>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </motion.div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"