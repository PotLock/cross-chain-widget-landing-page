import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Route = {
  name: string;
  href: string;
  target?: string;
  rel?: string;
};

const routes: Route[] = [
  {
    name: "Features",
    href: "/#key-advantages",
  },
  {
    name: "Example",
    href: "https://example.widget.potlock.org",
  },
];

export function Header() {
  return (
    <header className="container h-16 md:h-20 lg:h-24 flex items-center justify-between px-4 md:px-8 lg:px-16">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/potlock-logo.png"
          alt="Potlock Logo"
          width={150}
          height={50}
          className="h-6 w-auto object-cover pointer-events-none"
          priority
        />
        <p className="font-bold text-lg text-neutral-950">POTLOCK</p>
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.href}
                className="text-gray-900 hover:text-gray-600 hover:underline font-plus-jakarta-sans font-medium text-base transition-colors duration-200"
                target={route.target}
                rel={route.rel}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/playground">
        <Button className="w-[120px] md:w-[150px] rounded-xl h-10 md:h-12 font-bold text-sm md:text-base font-plus-jakarta-sans transition-all duration-200 hover:scale-105">
          Playground
        </Button>
      </Link>
    </header>
  );
}
