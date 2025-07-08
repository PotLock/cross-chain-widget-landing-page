import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Route = {
  name: string;
  href: string;
};

const routes: Route[] = [
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Documentation",
    href: "/documentation",
  },
];

export function Header() {
  return (
    <header className="container h-24 flex items-center justify-between px-16">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/potlock-logo.png"
          alt="Potlock Logo"
          width={150}
          height={50}
          className="h-6 w-auto object-cover pointer-events-none"
          priority
        />
        <p className="font-bold text-lg">POTLOCK</p>
      </Link>

      <nav>
        <ul className="flex items-center gap-6">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.href}
                className="text-gray-900 hover:text-gray-600 font-plus-jakarta-sans font-medium text-base"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/playground">
        <Button className="w-[150px] h-12 font-bold text-base font-plus-jakarta-sans">
          Playground
        </Button>
      </Link>
    </header>
  );
}
