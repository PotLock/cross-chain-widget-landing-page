import { Hero } from "@/components/landing/hero";
import { SupportedChains } from "@/components/landing/supported-chains";

export default function LandingPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-12">
      <Hero />
      <SupportedChains />
    </div>
  );
}
