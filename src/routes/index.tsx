import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import StatsBarSection from "@/components/StatsBarSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "A.T Farms and Fields Limited — Agricultural Solutions in Nigeria" },
      {
        name: "description",
        content:
          "Premium crop farming, livestock production, forestry, and farm management services in Ogun State and Southwest Nigeria.",
      },
      { property: "og:title", content: "A.T Farms and Fields Limited — Agricultural Solutions in Nigeria" },
      {
        property: "og:description",
        content:
          "Premium crop farming, livestock production, forestry, and farm management services in Ogun State and Southwest Nigeria.",
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
      <StatsBarSection />
      <FocusAreasSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
