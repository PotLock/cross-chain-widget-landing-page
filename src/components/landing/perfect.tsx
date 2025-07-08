import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import { BrokenCode, Dollar, HandHeart, HandShake } from "./icons";

import NonProfitFundraising from "@/assets/non-profit-fundraising.svg";
import ProjectAndIdeaFunding from "@/assets/project-idea-funding.svg";
import APIPayments from "@/assets/api-payments.svg";
import CampaignDonations from "@/assets/campaign-donations.svg";
import MultichainDonations from "@/assets/multichain-donations.svg";
import TipCreators from "@/assets/tip-creators.svg";

type CardItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  colSpan: number;
};

const cardItems: CardItem[] = [
  {
    icon: <HandShake />,
    title: "Non Profit Fundraising",
    description:
      "Encourage users to support your favorite non-profit organizations with seamless donations.",
    image: NonProfitFundraising,
    colSpan: 7,
  },
  {
    icon: <HandShake />,
    title: "Project & Idea Funding",
    description:
      "Receive donations for your open-source projects, community initiatives, or innovative ideas.",
    image: ProjectAndIdeaFunding,
    colSpan: 5,
  },
  {
    icon: <BrokenCode />,
    title: "API Payments",
    description:
      "Enable programmable crypto payments for services and digital products.",
    image: APIPayments,
    colSpan: 5,
  },
  {
    icon: <HandHeart />,
    title: "Campaign Donations",
    description: "Run refundable funding campaigns with transparent goals.",
    image: CampaignDonations,
    colSpan: 7,
  },
  {
    icon: <Dollar />,
    title: "Multichain Donations",
    description:
      "Receive contributions from a wide array of blockchain networks, with more chains being added regularly.",
    image: MultichainDonations,
    colSpan: 7,
  },
  {
    icon: <HandShake />,
    title: "Tip Creators",
    description:
      "Empower your audience to directly support content creators, artists, and streamers with tips.",
    image: TipCreators,
    colSpan: 5,
  },
];

export function PerfectForAnyUseCase() {
  return (
    <section
      id="perfect-for-any-use-case"
      className="container flex flex-col items-center gap-11 px-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 max-w-[1280px]">
        <h2 className="text-[#161612] max-w-[691.873px] text-center font-sans text-4xl font-bold leading-10 tracking-[-0.9px]">
          Perfect for Any Use Case
        </h2>

        <p className="text-black text-xl font-normal leading-7 tracking-[-0.6px] text-center">
          From non profits to content creators, our widget adapts to your needs.{" "}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5.5 gap-y-8 max-w-[1121px]">
        {cardItems.map((item, index) => {
          const colSpan7 = "col-span-7";
          const colSpan5 = "col-span-5";

          let colSpanClass;

          switch (item.colSpan) {
            case 7:
              colSpanClass = colSpan7;
              break;
            case 5:
              colSpanClass = colSpan5;
              break;
            default:
              colSpanClass = colSpan7; // Default to 7 if not specified
          }

          return (
            <Card
              key={index}
              className={cn(
                "flex flex-col gap-0 p-0 rounded-[8px] border bg-white",
                colSpanClass
              )}
              style={{
                boxShadow:
                  "0px 1px 2px 0px rgba(16, 24, 27, 0.30), 0px 6px 8px 0px rgba(25, 14, 14, 0.03), 0px 8px 12px 0px rgba(12, 22, 25, 0.04)",
              }}
            >
              <div className="flex flex-col justify-center gap-6 max-w-[478.25px] ps-7.5 pt-6.5 pb-4.5">
                <div className="flex items-center gap-4">
                  {item.icon}
                  <CardTitle className="text-lg font-inter font-medium text-black tracking-[-0.54px]">
                    {item.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-[150%] tracking-[-0.32px] font-inter text-[#7A8B90]">
                  {item.description}
                </CardDescription>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-auto rounded-b-[8px] object-cover flex-1"
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
}
