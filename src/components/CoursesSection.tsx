import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Data Analytics Fundamentals",
      description: "Perfect for beginners. Learn Excel, basic statistics, and data visualization fundamentals.",
      level: "Beginner",
      duration: "2 Months",
      students: "200+",
      rating: "4.9",
      price: "R1,500",
      features: [
        "Excel Advanced Functions",
        "Data Cleaning Techniques",
        "Basic Statistics",
        "Chart Creation",
        "Dashboard Building"
      ],
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Microsoft Certified Data Analyst Track",
      description: "Comprehensive program covering SQL, Python, Power BI, and Microsoft Fabric.",
      level: "Intermediate",
      duration: "6 Months",
      students: "150+",
      rating: "4.9",
      price: "R3,000",
      features: [
        "SQL Database Querying",
        "Python Data Analysis",
        "Power BI Dashboards",
        "Microsoft Fabric",
        "Certification Prep",
        "Portfolio Projects"
      ],
      color: "bg-blue-500",
      popular: true
    },
    {
      id: 3,
      title: "Advanced Analytics & Machine Learning",
      description: "Master advanced analytics, predictive modeling, and machine learning techniques.",
      level: "Advanced",
      duration: "4 Months",
      students: "80+",
      rating: "4.8",
      price: "R4,500",
      features: [
        "Machine Learning Algorithms",
        "Predictive Modeling",
        "Statistical Analysis",
        "Python Advanced Libraries",
        "Model Deployment",
        "Industry Case Studies"
      ],
      color: "bg-purple-500"
    }
  ];

  const learningPaths = [
    {
      path: "Career Changer",
      description: "For professionals transitioning into data analytics",
      courses: ["Fundamentals", "Microsoft Certified Track"],
      duration: "8 months",
      discount: "15%"
    },
    {
      path: "Student Track",
      description: "For graduates and students entering the field",
      courses: ["Fundamentals", "Microsoft Certified Track", "Advanced Analytics"],
      duration: "12 months",
      discount: "20%"
    },
    {
      path: "Professional Upskill",
      description: "For working professionals looking to enhance skills",
      courses: ["Microsoft Certified Track", "Advanced Analytics"],
      duration: "10 months",
      discount: "10%"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
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
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From beginner-friendly foundations to advanced machine learning, 
              we have the perfect course to match your career goals.
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="relative h-full hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-accent/30">
                  {course.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={`${course.color} text-white border-none`}>
                        {course.level}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">What you'll learn:</h4>
                      <ul className="space-y-1">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            {course.price}
                          </span>
                          <span className="text-sm text-muted-foreground ml-1">
                            one-time
                          </span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full group" 
                        variant={course.popular ? "hero" : "outline"}
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Learning Paths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="font-serif text-3xl font-bold text-center mb-12 text-primary">
              Structured Learning Paths
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => (
                <motion.div
                  key={path.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 hover:shadow-card transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-accent">{path.discount}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-primary">{path.path}</h4>
                      <p className="text-muted-foreground">{path.description}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Includes:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {path.courses.map((course, idx) => (
                            <li key={idx}>• {course}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-2">
                          Complete in {path.duration}
                        </p>
                        <Badge className="bg-green-100 text-green-800">
                          Save {path.discount}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;