// components/FAQ.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FaEnvelope } from 'react-icons/fa';

const accordionData = [
    {
        value: "item-1",
        trigger: "What types of vehicles do you offer for transportation?",
        content: "We provide a range of vehicles (including 16 ft Mazdas, 20 ft Mazdas, 20 ft containers, and more) to meet your specific logistics needs.",
    },
    {
        value: "item-2",
        trigger: "How do I book a vehicle for transportation?",
        content: "You can book a vehicle through our website, by phone, or by contacting our customer service team.",
    },
    {
        value: "item-3",
        trigger: "What areas do you serve?",
        content: "We operate in different industrial areas, e.g, Ferozwattan, Faisalabad, Manga Raiwand, Lahore, Multan etc. Please contact us for more details about service areas.",
    },
    {
        value: "item-4",
        trigger: "What is the cost of hiring a vehicle?",
        content: "The cost varies depending on the type of vehicle, distance, and specific requirements. Please request a quote for accurate pricing.",
    },
    {
        value: "item-5",
        trigger: "How far in advance do I need to book a vehicle?",
        content: "While we recommend booking at least 24 hours in advance, we can accommodate last-minute requests depending on vehicle availability.",
    },
    {
        value: "item-6",
        trigger: "Do you offer tracking services for shipments?",
        content: "Yes, we provide tracking so you can monitor your shipment’s progress.",
    },
    {
        value: "item-7",
        trigger: "Are there any size or weight restrictions for shipments?",
        content: "Each vehicle has its own size and weight capacity. Please refer to our vehicle specifications or contact us for details.",
    },
];



const FAQ = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-20 mb-10 max-w-md gap-3 sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl px-2 mx-auto ">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">FAQ</h2>
                <p className="text-xl mb-4">Do you have any questions for us?</p>
                <p className="text-gray-600 mb-6">
                    If there are question you want to ask. We will answer all your question.
                </p>
                <div className="flex items-center w-[90%]">
                    <div className="relative flex-1">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-0 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full">
                        Submit
                    </button>
                </div>
            </div>
            <div className="lg:w-1/2">
                <Accordion type="single" collapsible>
                    {accordionData.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger className="text-left">{item.trigger}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
