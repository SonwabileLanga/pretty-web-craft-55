import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <HowItWorks />
      <ContactSection />
    </main>
  );
};

export default Index;
