import Header from "@/components/header";
import Hero from "@/components/hero";
import PracticeAreas from "@/components/practice-areas";
import Team from "@/components/team";
import Footer from "@/components/footer";
import { LegalModals } from "@/components/legal-modals";
import SEOHead from "@/components/seo-head";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header />
      <Hero />
      <PracticeAreas />
      <Team />
      <Footer />
      <LegalModals />
    </div>
  );
}
