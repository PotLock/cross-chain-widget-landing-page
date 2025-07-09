import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="CTA"
      className="flex flex-col items-center justify-center w-full gap-6 md:gap-8 lg:gap-11 py-12 md:py-20 lg:py-25 my-12 md:my-20 lg:my-25"
      style={
        {
          "--bg-image": "url(/images/cta-bg.png)",
          background: "var(--bg-image) rgba(125, 125, 125, 0.05)",
          backgroundSize: "318px 318px",
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-11.5 max-w-[1280px] px-4 md:px-8">
        <h2 className="text-black text-center font-sans text-3xl md:text-4xl lg:text-6xl font-semibold tracking-[-1.5px]">
          Start taking money from anywhere
        </h2>

        <p className="text-black text-xl md:text-2xl lg:text-4xl font-normal leading-7 md:leading-8 lg:leading-[50px] tracking-[-0.9px] text-center">
          Start accepting cross-chain payments today with the POTLOCK widget.
          It's fast, flexible, and designed to help you achieve your goals.
        </p>

        <div className="mt-2.5 flex flex-col sm:flex-row shrink-0 items-center justify-center gap-3 sm:gap-5">
          <Link href="/playground">
            <Button className="w-40 group">
              Get Started{" "}
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
            </Button>
          </Link>
          <Link
            href="https://t.me/+tYetPhCN1sRkNzYx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-40">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
