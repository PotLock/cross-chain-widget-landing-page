import { Card } from "@/components/ui/card";
import Image from "next/image";

type KeyAdvantageItem = {
  image: string;
  title: string;
  description: string;
};

const keyAdvantageItems: KeyAdvantageItem[] = [
  {
    image: "/assets/Background Image.svg",
    title: "Effortless Integration",
    description:
      "Add multichain support with a simple modal in minutes, no complex coding required with your own branding",
  },
  {
    image: "/assets/Background Image (1).svg",
    title: "No Wallet Integration Needed",
    description:
      "No wallet integration needed - users scan QR codes and pay instantly",
  },
  {
    image: "/assets/Background Image (2).svg",
    title: "Fee Transparency",
    description:
      "Clear breakdown of network, platform, and referral fees. No hidden fee",
  },
  {
    image: "/assets/Background Image (3).svg",
    title: "Developer Friendly",
    description: "TypeScript-powered with full customization options",
  },
  {
    image: "/assets/Background Image (4).svg",
    title: "Social Sharing",
    description: "Built-in sharing options for viral donation campaigns",
  },
  {
    image: "/assets/Background Image (5).svg",
    title: "Open Source",
    description:
      "Built on NEAR Intents and available under the MIT license. Never get rugged",
  },
];

export function KeyAdvantages() {
  return (
    <section
      id="key-advantages"
      className="container flex flex-col items-center gap-11 px-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 max-w-[1280px]">
        <h2 className="text-[#161612] max-w-[691.873px] text-center font-sans text-4xl font-bold leading-10 tracking-[-0.9px]">
          Key advantages
        </h2>

        <p className="text-black text-xl font-normal leading-7 tracking-[-0.6px] text-center">
          Everything you need to accept cross-chain support with ease
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-[1121px] gap-y-9">
        {keyAdvantageItems.map((item, index) => (
          <Card
            key={index}
            className="rounded-3xl border bg-white flex flex-col items-center gap-1.5 p-0"
            style={{
              boxShadow:
                "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="w-full h-auto object-cover rounded-t-3xl"
            />
            <div className="flex flex-col px-7.5 py-5 items-start h-[129px] gap-0 text-left">
              <h3 className="text-[#161612] text-xl font-bold font-inter leading-[130%]">
                {item.title}
              </h3>
              <p className="text-[#70747B] h-[62px] flex items-center text-sm font-normal leading-[150%]">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
