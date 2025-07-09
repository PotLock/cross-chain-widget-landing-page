import { CTA } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { KeyAdvantages } from "@/components/landing/key-advantages";
import { PerfectForAnyUseCase } from "@/components/landing/perfect";
import { TakePayments } from "@/components/landing/take-payments";

export default function LandingPage() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center py-12 gap-28">
        <Hero />
        <TakePayments />
        <KeyAdvantages />
        <PerfectForAnyUseCase />
      </div>
      <CTA />
    </>
  );
}
