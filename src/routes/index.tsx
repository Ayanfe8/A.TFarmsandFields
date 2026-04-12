import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "A.T Farms and Fields — Premium Agritech Solutions" },
      {
        name: "description",
        content:
          "A.T Farms and Fields Limited provides agricultural management, crop & livestock production, and export sourcing services across Nigeria.",
      },
      { property: "og:title", content: "A.T Farms and Fields — Premium Agritech Solutions" },
      {
        property: "og:description",
        content:
          "Offering proactive agricultural solutions — management, production, and export services.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
