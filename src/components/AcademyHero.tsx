import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

const AcademyHero = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Students Trained" },
    { icon: Award, value: "95%", label: "Certification Rate" },
    { icon: TrendingUp, value: "85%", label: "Job Placement" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <NetworkBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-4">
                  🚀 Transform Your Career in 6 Months
                </span>
              </motion.div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary">DATA ANALYTICS</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ACADEMY
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master data analytics with industry-leading curriculum. From Excel to Python, 
                SQL to Power BI – become job-ready with hands-on projects and Microsoft certification preparation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-border/50">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">Live Course Starting Soon</span>
                </div>
                
                <h3 className="text-2xl font-bold text-primary">
                  Microsoft Certified Data Analytics Program
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Duration</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Format</span>
                    <span className="font-semibold">Live + Hands-on</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Investment</span>
                    <span className="text-2xl font-bold text-accent">R3,000</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Next cohort starts in 2 weeks. Limited seats available.
                  </p>
                  <Button variant="hero" className="w-full">
                    Secure Your Spot
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademyHero;