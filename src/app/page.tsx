import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyWeExist } from "@/components/WhyWeExist";
import { TheSolution } from "@/components/TheSolution";
import { WhyPartner } from "@/components/WhyPartner";
import { EcosystemPath } from "@/components/EcosystemPath";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <WhyWeExist />
      <TheSolution />
      <WhyPartner />
      <EcosystemPath />
      <Footer />
    </main>
  );
}
