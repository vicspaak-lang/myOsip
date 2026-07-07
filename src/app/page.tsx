import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyExist } from "@/components/WhyExist";
import { TheSolution } from "@/components/TheSolution";
import { WhyPartner } from "@/components/WhyPartner";
import { EcosystemPath } from "@/components/EcosystemPath";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <WhyExist />
      <TheSolution />
      <WhyPartner />
      <EcosystemPath />
      <Footer />
    </main>
  );
}
