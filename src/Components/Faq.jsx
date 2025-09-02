import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";


export const FaqSection = () => {

    const faqsData = [
  {
    question: "Who is Alsadir Ebrahim?",
    answer: "Alsadir Ebrahim is a front-end developer from Ethiopia, specialized in React and TailwindCSS, focusing on building complex UI projects and mastering animations."
  },
  {
    question: "What is MotMaker?",
    answer: "MotMaker is Alsadir's personal React project designed to practice and showcase modern UI components, dark/light themes, and smooth animations."
  },
  {
    question: "What technologies are used in this project?",
    answer: "The project uses React, TailwindCSS, React Router for navigation, and a custom context for dark/light theme handling. No external component libraries are used."
  },
  {
    question: "How many components are included?",
    answer: "The system includes over 50 reusable components, covering dashboards, cards, tables, forms, modals, notifications, and more."
  },
  {
    question: "Is this project responsive?",
    answer: "Yes, every component and layout is fully responsive, designed to look great on mobile, tablet, and desktop screens."
  },
  {
    question: "Can I practice animations with this project?",
    answer: "Absolutely. The project is structured to allow adding smooth animations and transitions on almost every component using Framer Motion or CSS animations."
  },
  {
    question: "What is the goal of building MotionLab?",
    answer: "The main goal is to consolidate React expertise, improve UI/UX design skills, and create a professional-level front-end project that simulates real-world management systems."
  },
  {
    question: "Who is the target audience for MotionLab?",
    answer: "MotionLab is primarily a personal learning and showcase project, but its structure and UI can inspire other developers or teams interested in modern React design patterns."
  },
];
    
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
            <SectionTitle text1="FAQ's" text2="Frequently asked questions" text3="Ship Beautiful Frontends Without the Overhead — Customizable, Scalable, and Developer-Friendly UI Components." />
            <div className="mt-8">
                {faqsData.map((faq, index) => (
                    <div className="border-b border-gray-400 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>
                            <ChevronDown size={18} className={`${openIndex === index && "rotate-180"} transition-all duration-500 ease-in-out`} />
                        </div>
                        <p className={`text-sm text-slate-700 transition-all duration-500 ease-in-out max-w-xl ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};