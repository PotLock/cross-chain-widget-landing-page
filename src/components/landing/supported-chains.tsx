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
      className="flex flex-col items-center justify-center w-full"
    >
      <p className="text-base leading-7 mb-2 font-normal tracking-[0%] text-center text-[#71717a]">
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
          {Array.from({ length: 4 }, (_, setIndex) =>
            avatars.map((avatar, index) => {
              const uniqueKey = `${setIndex}-${index}`;
              return { avatar, uniqueKey, originalIndex: index };
            }),
          )
            .flat()
            .map(({ avatar, uniqueKey, originalIndex }) => {
              // Put coming soon badge
              const hasBadge = originalIndex === 16 || originalIndex === 3;

              return (
                <CarouselItem
                  key={uniqueKey}
                  className="flex flex-col items-center justify-center basis-[75px] pt-6 relative"
                >
                  {hasBadge && (
                    <div className="text-center text-xs absolute inset-0 w-24 bg-black/5 backdrop-blur-sm rounded-full h-fit">
                      <p className="shrink-0 font-medium">Coming Soon</p>
                    </div>
                  )}
                  <Image
                    src={avatar}
                    alt={`Avatar ${originalIndex + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-contain pointer-events-none"
                    loading="lazy"
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
