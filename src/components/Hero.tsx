import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-analytics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-diagonal-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary">DATA ANALYTICS</span>
                <br />
                <span className="text-primary">SERVICE</span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium">
                  by Siphesihle Sinare
                </p>
                <p className="text-base text-muted-foreground">
                  Microsoft Certified Data Analyst
                </p>
              </div>
            </div>

            <div className="space-y-4 text-foreground">
              <p className="text-lg font-medium">No experience needed – start from scratch</p>
              <p className="text-lg font-medium">Hands-on learning with real projects</p>
              <p className="text-lg font-medium">Build a portfolio to showcase your skills</p>
              <p className="text-lg font-medium">Preparation for recognized Microsoft exams</p>
              <p className="text-lg font-medium">Affordable and beginner-friendly</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Get Started Today
              </Button>
              <a href="tel:0793709715">
                <Button variant="contact" size="lg" className="text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Data Analytics Dashboard"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;