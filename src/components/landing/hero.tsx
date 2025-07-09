import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SupportedChains } from "./supported-chains";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-[55px]"
    >
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-[1280px] px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-sans font-semibold text-center text-gray-900 leading-[100%] tracking-[-2.5%] max-w-[320px] md:max-w-[600px] lg:max-w-[1280px]">
          Build a crosschain donation flow for your project w/o coding.
        </h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="font-sans text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 tracking-[-0.6px] text-center max-w-[300px] md:max-w-[500px] lg:max-w-none">
            You can now bring cross chain donations as a button with no need for
            wallet.
          </p>

          <div className="flex flex-col sm:flex-row shrink-0 items-center justify-center gap-3 sm:gap-5">
            <Button className="w-48 sm:w-40 rounded-xl group">
              Get Started{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
            </Button>
            <Button variant="outline" className="w-48 sm:w-auto">
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/images/hero-image.png"
        alt="Hero Image"
        width={1105}
        height={510}
        className="w-full max-w-[1105px] h-auto object-cover pointer-events-none"
      />

      <SupportedChains />
    </section>
  );
}
