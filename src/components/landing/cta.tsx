import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="CTA"
      className="flex flex-col items-center justify-center w-full gap-11 py-25 my-25"
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
      <div className="flex flex-col items-center justify-center gap-11.5 max-w-[1280px]">
        <h2 className="text-black text-center font-sans text-6xl font-semibold tracking-[-1.5px]">
          Start taking money from anywhere
        </h2>

        <p className="text-black text-4xl font-normal leading-[50px] tracking-[-0.9px] text-center">
          Start accepting cross-chain support today with the POTLOCK widget.
          It's fast, flexible, and designed to help you achieve your goals.
        </p>

        <div className="mt-2.5 flex shrink-0 items-center justify-center gap-5">
          <Button className="w-40 group">
            Get Started{" "}
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
          </Button>
          <Button variant="outline" className="w-40">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
