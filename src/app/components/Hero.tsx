"use client";
import Link from "next/link";
export default function HeroSection() {
  const avatars = [
    "/assets/Avatar.svg",
    ...Array.from({ length: 16 }, (_, i) => `/assets/Avatar (${i + 1}).svg`),
  ];

  return (
    <section className="flex flex-col items-center justify-center text-center py-16  bg-white">
      <h1
        className="text-3xl text-black md:text-5xl font-bold mb-4"
        style={{ width: "95%" }}
      >
        Build a crosschain donation flow for your project w/o coding.
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        You can now bring cross chain donations as a button with no need for
        wallet.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Link href="/playground" legacyBehavior>
          <button
            className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800"
            style={{ borderRadius: 15 }}
          >
            Get Started →
          </button>
        </Link>
        <Link href="https://docs.potlock.io/" legacyBehavior>
          <a
            className="bg-white text-black px-6 py-3 border border-gray-300 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            target="_blank"
            style={{ borderRadius: 15 }}
            rel="noopener noreferrer"
          >
            View Documentation
          </a>
        </Link>
      </div>
      <div className="relative flex flex-col md:flex-row gap-6 mb-12">
        <img src="/assets/Qrcode.svg" />
      </div>
      <div className="flex flex-col items-center">
        <p
          className="text-lg font-semibold mb-4"
          style={{ color: "#71717A", marginBottom: 30 }}
        >
          SUPPORTED CHAINS & ASSETS
        </p>

        <div
          className="hidden md:block w-full overflow-hidden"
          style={{ width: "100%" }}
        >
          <div className="flex animate-carousel-left whitespace-nowrap mt-12">
            {[
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
            
            ].map((avatar, index) => {
              const originalIndex = index % avatars.length;

              if (
                originalIndex === 3 ||
                originalIndex === 6 ||
                originalIndex === 16
              ) {
                return (
                  <div
                    key={`badge-${index}`}
                    className="flex-none flex flex-col items-center -mt-12"
                    style={{ gap: "5px" }}
                  >
                    <img
                      src="/assets/Badge.svg"
                      alt="Badge"
                      className="w-[100px] h-auto object-contain"
                    />
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-[56px] h-[56px] rounded-full inline-block mx-2"
                    />
                  </div>
                );
              } else {
                return (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="w-12 h-12 rounded-full inline-block mx-2"
                  />
                );
              }
            })}
          </div>
        </div>

        <div
          className="block md:hidden  w-full overflow-hidden"
          style={{ width: "100%" }}
        >
          <div className="flex animate-carousel-left whitespace-nowrap mt-12">
            {[
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,
              ...avatars,

            ].map((avatar, index) => {
              const originalIndex = index % avatars.length;

              if (
                originalIndex === 3 ||
                originalIndex === 6 ||
                originalIndex === 16
              ) {
                return (
                  <div
                    key={`badge-${index}`}
                    className="flex-none flex flex-col items-center -mt-12"
                    style={{ gap: "5px" }}
                  >
                    <img
                      src="/assets/Badge.svg"
                      alt="Badge"
                      className="w-[100px] h-auto object-contain"
                    />
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-[56px] h-[56px] rounded-full inline-block mx-2"
                    />
                  </div>
                );
              } else {
                return (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="w-12 h-12 rounded-full inline-block mx-2"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
