import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Mail, Award, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";
import instructorImage from "@/assets/instructor-siphesihle.jpg";

const InstructorsSection = () => {
  const instructor = {
    name: "Siphesihle Sinare",
    title: "Lead Data Analytics Instructor",
    credentials: "Microsoft Certified Data Analyst",
    image: instructorImage,
    bio: "With over 5 years of experience in data analytics and business intelligence, Siphesihle has helped hundreds of professionals transition into successful data careers. His practical approach combines industry best practices with hands-on learning.",
    achievements: [
      "Microsoft Certified Data Analyst",
      "500+ Students Trained",
      "95% Certification Success Rate",
      "Industry Consultant",
    ],
    specializations: [
      "Microsoft Power BI",
      "SQL Server & Azure",
      "Python Data Analysis",
      "Microsoft Fabric",
      "Business Intelligence"
    ],
    stats: [
      { icon: Users, value: "500+", label: "Students Mentored" },
      { icon: Award, value: "95%", label: "Pass Rate" },
      { icon: BookOpen, value: "6+", label: "Years Experience" }
    ]
  };

  return (
    <section id="instructors" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Meet Your Instructor
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry experts with real-world experience and a passion for teaching.
            </p>
          </motion.div>

          {/* Instructor Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden shadow-elegant border-border/50">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Left Column - Image and Basic Info */}
                  <div className="p-8 lg:p-12 bg-gradient-to-br from-accent/5 to-accent/10">
                    <div className="text-center lg:text-left space-y-6">
                      <div className="relative inline-block">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-glow mx-auto lg:mx-0"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg">
                          <Award className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-serif text-3xl font-bold text-primary">
                          {instructor.name}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {instructor.title}
                        </p>
                        <Badge className="bg-accent text-accent-foreground">
                          {instructor.credentials}
                        </Badge>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6">
                        {instructor.stats.map((stat, index) => (
                          <div key={stat.label} className="text-center">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <stat.icon className="w-6 h-6 text-accent" />
                            </div>
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-6">
                        <Button variant="hero" size="sm" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <LinkedinIcon className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="p-8 lg:p-12 space-y-8">
                    {/* Bio */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-primary">About</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {instructor.bio}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-primary">Achievements</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {instructor.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-primary">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                      <blockquote className="italic text-foreground">
                        "My mission is to make data analytics accessible to everyone. 
                        I believe that with the right guidance and practical approach, 
                        anyone can master these skills and transform their career."
                      </blockquote>
                      <cite className="text-sm text-muted-foreground mt-2 block">
                        — {instructor.name}
                      </cite>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;