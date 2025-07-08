import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-[55px]"
    >
      <div className="flex flex-col items-center justify-center gap-6 max-w-[1280px]">
        <h1 className="text-6xl font-sans font-semibold text-center text-gray-900 leading-[100%] tracking-[-2.5%]">
          Build a crosschain donation flow for your project w/o coding.
        </h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="font-sans text-2xl leading-8 tracking-[-0.6px] text-center">
            You can now bring cross chain donations as a button with no need for
            wallet.
          </p>

          <div className="flex shrink-0 items-center justify-center gap-5">
            <Button className="w-40">
              Get Started <ArrowRight />
            </Button>
            <Button variant="outline">View Documentation</Button>
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
    </section>
  );
}
