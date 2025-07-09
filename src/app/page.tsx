import { Footer } from "@/components/footer";
import { CTA } from "@/components/landing/cta";
import { FAQs } from "@/components/landing/faqs";
import { Hero } from "@/components/landing/hero";
import { KeyAdvantages } from "@/components/landing/key-advantages";
import { PerfectForAnyUseCase } from "@/components/landing/perfect";
import { TakePayments } from "@/components/landing/take-payments";

export default function LandingPage() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center py-6 md:py-12 gap-12 md:gap-20 lg:gap-28 overflow-x-clip md:overflow-x-auto">
        <Hero />
        <TakePayments />
        <KeyAdvantages />
        <PerfectForAnyUseCase />
      </div>
      <CTA />
      <FAQs />
      <Footer />
    </>
  );
}
