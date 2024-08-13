// components/FAQ.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FaEnvelope } from 'react-icons/fa';

const accordionData = [
    {
        value: "item-1",
        trigger: "What makes 3U Logistics different from other messaging apps?",
        content: "3U Logistics is unique because of its emphasis on security and customization options.",
    },
    {
        value: "item-2",
        trigger: "How secure are my conversations on 3U Logistics?",
        content: "3U Logistics uses end-to-end encryption to ensure your conversations are private.",
    },
    {
        value: "item-3",
        trigger: "Can I personalize my 3U Logistics experience?",
        content: "Yes, 3U Logistics offers various personalization options to suit your preferences.",
    },
    {
        value: "item-4",
        trigger: "What group features does 3U Logistics offer?",
        content: "3U Logistics offers robust group features including group chats, shared media, and more.",
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
