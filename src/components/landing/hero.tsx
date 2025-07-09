import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SupportedChains } from "./supported-chains";
import Link from "next/link";
import { WordRotate } from "../magicui/word-rotate";
import { ImageRotate } from "../magicui/image-rotate";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-8 w-full md:gap-12 lg:gap-[55px]"
    >
      <div className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-[1280px] px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-sans font-semibold text-center text-gray-900 leading-[100%] tracking-[-2.5%] max-w-[320px] md:max-w-[600px] lg:max-w-[1280px]">
          Build a crosschain{" "}
          <WordRotate
            words={["donation", "payments", "tips"]}
            duration={2500}
            startDelay={0}
          />{" "}
          flow for <br className="md:hidden" /> your{" "}
          <br className="hidden md:inline" />{" "}
          <WordRotate
            words={["project", "idea", "cause"]}
            duration={2500}
            startDelay={1250}
          />{" "}
          w/o
          <br className="md:hidden" /> coding.
        </h1>
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="font-sans text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 tracking-[-0.6px] text-center max-w-[300px] md:max-w-[500px] lg:max-w-none">
            You can now bring cross chain donations as a button with no need for
            wallet.
          </p>

          <div className="flex flex-col sm:flex-row shrink-0 items-center justify-center gap-3 sm:gap-5">
            <Link href="/playground">
              <Button className="w-48 sm:w-40 rounded-xl group">
                Get Started{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
              </Button>
            </Link>
            <Link
              href="https://docs.potlock.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-48 sm:w-auto">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-[1105px]">
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={1105}
          height={510}
          className="w-full h-auto object-cover pointer-events-none"
        />
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <ImageRotate
            images={[
              { src: "/images/Aurora QR Code.svg", alt: "Aurora QR Code" },
              { src: "/images/BASE QR Code.svg", alt: "BASE QR Code" },
              { src: "/images/DOGE QR Code.svg", alt: "DOGE QR Code" },
              { src: "/images/NEAR QR Code.svg", alt: "NEAR QR Code" },
              { src: "/images/Solana QR Code.svg", alt: "Solana QR Code" },
              { src: "/images/XRP QR Code.svg", alt: "XRP QR Code" },
            ]}
            duration={3000}
            className="lg:max-w-100 w-[32.5vw]"
            imageWidth={500}
            imageHeight={500}
          />
        </div>
      </div>

      <SupportedChains />
    </section>
  );
}
