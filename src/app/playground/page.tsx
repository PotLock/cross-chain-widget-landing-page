import Playground from "../components/Playground";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <main className="container mx-auto">
        <Playground />
      </main>
      <Footer />
    </div>
  );
}
