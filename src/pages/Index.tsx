import Navbar from "@/components/Navbar";
import AcademyHero from "@/components/AcademyHero";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import ToolkitSection from "@/components/ToolkitSection";
import RoadmapSection from "@/components/RoadmapSection";
import CurriculumSection from "@/components/CurriculumSection";
import HowItWorks from "@/components/HowItWorks";
import SuccessStories from "@/components/SuccessStories";
import EnhancedContactSection from "@/components/EnhancedContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AcademyHero />
      <AboutSection />
      <CoursesSection />
      <InstructorsSection />
      <ToolkitSection />
      <RoadmapSection />
      <CurriculumSection />
      <HowItWorks />
      <SuccessStories />
      <EnhancedContactSection />
    </main>
  );
};

export default Index;
