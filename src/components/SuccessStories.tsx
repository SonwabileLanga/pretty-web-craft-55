import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Building } from "lucide-react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      name: "Nomsa Mthembu",
      role: "Data Analyst at Nedbank",
      previousRole: "Administrative Assistant",
      course: "Microsoft Certified Track",
      image: "👩🏾‍💼",
      salaryIncrease: "180%",
      testimonial: "The program completely transformed my career. From administrative work to analyzing data for one of South Africa's biggest banks. Siphesihle's practical approach made complex concepts easy to understand.",
      achievement: "Landed job within 3 months of graduation",
      rating: 5
    },
    {
      name: "Thabo Radebe", 
      role: "Business Intelligence Developer",
      previousRole: "Recent Graduate",
      course: "Full Analytics Program",
      image: "👨🏾‍💻",
      salaryIncrease: "Entry to R35k/month",
      testimonial: "As a fresh graduate, I was struggling to find meaningful work. This program gave me the skills and confidence to excel in the BI field. The portfolio projects were key to landing my first role.",
      achievement: "Built 5 portfolio projects, got certified",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Senior Data Scientist at Discovery",
      previousRole: "Marketing Manager",
      course: "Advanced Analytics Track",
      image: "👩🏻‍🔬",
      salaryIncrease: "150%",
      testimonial: "The transition from marketing to data science seemed impossible, but this program made it achievable. The combination of technical skills and business context was perfect for my career change.",
      achievement: "Promoted to Senior role within 1 year",
      rating: 5
    },
    {
      name: "Michael Sibeko",
      role: "Data Analytics Consultant",
      previousRole: "Operations Manager",
      course: "Microsoft Certified Track",
      image: "👨🏾‍💼",
      salaryIncrease: "200%",
      testimonial: "Now I run my own analytics consulting practice, helping small businesses make data-driven decisions. The skills I learned opened up entrepreneurship opportunities I never imagined.",
      achievement: "Started own consulting business",
      rating: 5
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "85%", label: "Job Placement Rate", subtitle: "Within 6 months" },
    { icon: Building, value: "50+", label: "Hiring Partners", subtitle: "Top SA companies" },
    { icon: Star, value: "4.9", label: "Student Rating", subtitle: "500+ reviews" }
  ];

  return (
    <section id="success" className="py-20 bg-background">
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
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real people, real transformations. See how our graduates are thriving in their new data careers.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
              </div>
            ))}
          </motion.div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-accent/30">
                  <CardContent className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{story.image}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary">{story.name}</h3>
                        <p className="text-accent font-medium">{story.role}</p>
                        <p className="text-sm text-muted-foreground">
                          Previously: {story.previousRole}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Achievement Badges */}
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        💰 {story.salaryIncrease} salary increase
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        📚 {story.course}
                      </Badge>
                    </div>

                    {/* Testimonial */}
                    <div className="relative">
                      <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                      <blockquote className="text-foreground italic pl-6 leading-relaxed">
                        "{story.testimonial}"
                      </blockquote>
                    </div>

                    {/* Achievement */}
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm font-medium text-accent">
                          Key Achievement:
                        </span>
                      </div>
                      <p className="text-sm text-foreground mt-1 ml-4">
                        {story.achievement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-primary">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of professionals who have transformed their careers with our 
                comprehensive data analytics program. Your journey to success starts today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-sm text-muted-foreground">
                  ⭐ Trusted by 500+ professionals
                </div>
                <div className="text-sm text-muted-foreground">
                  🏆 95% certification success rate
                </div>
                <div className="text-sm text-muted-foreground">
                  💼 85% job placement within 6 months
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;