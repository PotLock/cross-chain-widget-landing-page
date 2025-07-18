import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type CardItem = {
  image: string;
  title: string;
  description: string;
};

const cardItems: CardItem[] = [
  {
    image: "/assets/Card1.svg",
    title: "Configure your widget",
    description:
      "Sign up to the playground and set up your widget configuration from the dashboard",
  },
  {
    image: "/assets/Card2.svg",
    title: "Paste into your app",
    description:
      "Copy the generated HTML snippet and embed it into your website, wallet or app",
  },
  {
    image: "/assets/Card3.svg",
    title: "Receive Support",
    description:
      "Start receiving cross chain donations directly to your NEAR account",
  },
];

export function TakePayments() {
  return (
    <section
      id="take-payments"
      className="container flex flex-col items-center gap-6 md:gap-8 px-4 md:px-8 lg:px-16"
    >
      <h2 className="text-[#161612] max-w-[691.873px] text-center font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-8 md:leading-9 lg:leading-10 tracking-[-0.9px]">
        Take payments without worry about wallets and chains
      </h2>

      <div className="grid grid-cols-1 w-full md:max-w-fit md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {cardItems.map((card, index) => (
          <Card
            key={index}
            className={`rounded-3xl border-2 overflow-clip bg-white w-full ${index === 0 ? "md:col-span-2 lg:col-span-1 md:max-w-[calc(724px+1.5rem)] lg:max-w-[362px]" : "md:max-w-[362px]"} min-h-[391px] justify-between flex flex-col items-center h-full px-4 md:px-8.5 py-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer group`}
            style={{
              boxShadow:
                "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={card.image}
              alt={`${card.title} Image`}
              width={500}
              height={500}
              className="max-w-[293.544px] h-auto object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-center flex-col gap-4">
              <CardTitle className="text-xl font-semibold text-center font-inter text-shadow-neutral-950 transition-colors duration-300 group-hover:text-blue-600">
                {card.title}
              </CardTitle>
              <CardDescription className="text-neutral-500 text-center font-inter text-sm transition-colors duration-300 group-hover:text-gray-600">
                {card.description}
              </CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
