import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import TutorialSection from "@/components/TutorialSection";
import DocsSection from "@/components/DocsSection";
import ToolsSection from "@/components/ToolsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen freepik-bg">
      <Header />
      <AnnouncementBar />
      <HeroSection />
      <TutorialSection />
      <DocsSection />
      <ToolsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
