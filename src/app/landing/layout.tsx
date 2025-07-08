import { Header } from "@/components/header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
