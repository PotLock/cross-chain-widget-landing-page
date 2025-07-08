import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="container flex items-center justify-center h-36 px-16">
      <p className="inline-flex items-center gap-2 text-center text-lg text-neutral-900">
        With ❤️ from
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/potlock-logo.png"
            alt="Potlock Logo"
            width={150}
            height={50}
            className="h-6 w-auto object-cover pointer-events-none"
            priority
          />
          <span className="font-bold">POTLOCK</span>
        </Link>
      </p>
    </footer>
  );
}
