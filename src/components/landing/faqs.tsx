import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: "What is the POTLOCK Cross Chain Donation Widget?",
    answer:
      "It's a simple, embeddable widget that allows you to accept donations from various blockchain networks directly to your NEAR account, without requiring users to connect their wallets.",
  },
  {
    question: "How do I integrate the widget into my website?",
    answer:
      "Please refer to our integration guide for step-by-step instructions.",
  },
  {
    question: "What blockchain networks does it support?",
    answer:
      "Currently, it supports multiple major networks including NEAR, Ethereum, and more.",
  },
  {
    question: "Are there any fees involved?",
    answer:
      "There are no additional fees beyond standard network transaction costs.",
  },
];

export function FAQs() {
  return (
    <section
      id="faqs"
      className="container flex flex-col items-center gap-16 px-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 max-w-[768px]">
        <h2 className="text-[#161612] max-w-[691.873px] text-center font-sans text-4xl font-bold leading-10 tracking-[-0.9px]">
          Frequently asked questions
        </h2>

        <p className="text-gray-500 text-xl font-normal leading-7 tracking-[-0.6px] text-center">
          Find answers to common questions about the POTLOCK Cross Chain
          Donation Widget.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[904px] font-inter"
        defaultValue="item-1"
      >
        {questions.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-b border-gray-200"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-900">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-base leading-[150%]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
