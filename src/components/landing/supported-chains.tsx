"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function SupportedChains() {
  const avatars = [
    "/assets/Avatar.svg",
    ...Array.from({ length: 16 }, (_, i) => `/assets/Avatar (${i + 1}).svg`),
  ];
  return (
    <section
      id="supported-chains"
      className="flex flex-col items-center justify-center max-w-[1009px]"
    >
      <p className="text-base leading-7 font-normal tracking-[0%] text-center text-[#71717a]">
        SUPPORTED CHAINS & ASSETS
      </p>

      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 1,
          }),
        ]}
      >
        <CarouselContent>
          {[...avatars, ...avatars].map((avatar, index) => {
            const originalIndex = index % avatars.length;

            if (
              originalIndex === 3 ||
              originalIndex === 6 ||
              originalIndex === 16
            ) {
              return (
                <CarouselItem
                  key={`badge-${index}`}
                  className="flex flex-col mt-6 items-center basis-1/18 relative"
                >
                  <Image
                    src="/assets/Badge.svg"
                    alt="Badge"
                    width={100}
                    height={100}
                    className="w-[75px] ms-2 h-auto object-contain absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
                  />
                  <Image
                    src={avatar}
                    alt={`Avatar ${(index % avatars.length) + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full inline-block pointer-events-none"
                  />
                </CarouselItem>
              );
            }

            return (
              <CarouselItem key={index} className="basis-1/18 mt-6">
                <Image
                  src={avatar}
                  alt={`Avatar ${(index % avatars.length) + 1}`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full inline-block pointer-events-none"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
