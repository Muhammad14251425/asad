"use client";
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from "next/navigation";

const data = [{ page: "About Us", href: "aboutus" }, { page: "Our Services", href: "/services" }, { page: "Contact Us", href: "/contactus" }]

export default function SmallNavbar() {
	const router = useRouter();

	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<MdMenu className="h-7 w-7 cursor-pointer" />
				</SheetTrigger>
				<SheetContent className="p-6">
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", stiffness: 300, damping: 30 }}
						className="bg-white h-full flex flex-col justify-center items-center"
					>
						<motion.ul
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										delayChildren: 0.2,
										staggerChildren: 0.1,
									},
								},
							}}
							className="space-y-6"
						>
							{data.map((item, index) => (
								<motion.li
									key={index}
									variants={{
										hidden: { opacity: 0, y: 10 },
										visible: { opacity: 1, y: 0 },
									}}
									className="text-2xl font-semibold text-gray-800"
									onClick={() => router.push(`${item.href}`)}
								>
									<SheetClose>
										{item.page}
									</SheetClose>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
