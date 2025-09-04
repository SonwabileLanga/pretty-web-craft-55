import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  FileText, 
  Code, 
  Database, 
  BarChart3, 
  Trophy, 
  Target,
  CheckCircle,
  Clock,
  Users,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

const CurriculumSection = () => {
  const phase1Projects = [
    {
      week: 1,
      project: "Personal Budget Tracker",
      skills: "Excel basics: SUM, AVERAGE, formatting",
      deliverables: "Excel file + README + screenshots"
    },
    {
      week: 2,
      project: "Sales Performance Dashboard",
      skills: "PivotTables, Charts, Conditional Formatting",
      deliverables: "Dashboard + README + screenshots"
    },
    {
      week: 3,
      project: "Data Cleaning Challenge",
      skills: "Text functions, Data validation",
      deliverables: "Cleaned dataset + explanation"
    },
    {
      week: 4,
      project: "Mini Capstone: Monthly Analysis Dashboard",
      skills: "Combine cleaning + visualization",
      deliverables: "Full dashboard + README"
    },
    {
      week: 5,
      project: "CSV Data Exploration Script",
      skills: "Pandas basics",
      deliverables: "Python script + README"
    },
    {
      week: 6,
      project: "Web Scraper for Price Tracking",
      skills: "Requests, BeautifulSoup",
      deliverables: "Script + README"
    },
    {
      week: 7,
      project: "Data Visualization with Matplotlib",
      skills: "Charts & graphs",
      deliverables: "Script + screenshots"
    },
    {
      week: 8,
      project: "Capstone: Data Cleaning Automation",
      skills: "Full ETL with Pandas",
      deliverables: "Complete pipeline + README + screenshots"
    },
    {
      week: 9,
      project: "Power BI Sales Dashboard",
      skills: "Load data, Basic visuals",
      deliverables: "PBIX file + README + screenshots"
    },
    {
      week: 10,
      project: "KPI Dashboard",
      skills: "Measures (DAX), Filters",
      deliverables: "PBIX + README + screenshots"
    },
    {
      week: 11,
      project: "Customer Segmentation Report",
      skills: "Slicers, Drill-through",
      deliverables: "PBIX + README + screenshots"
    },
    {
      week: 12,
      project: "Capstone: Executive Dashboard",
      skills: "Data modeling + Advanced DAX",
      deliverables: "PBIX + README + screenshots"
    }
  ];

  const phase2Prep = [
    {
      week: 13,
      focus: "Core data concepts",
      activities: "Study modules, quizzes",
      deliverables: "Notes + summary sheets"
    },
    {
      week: 14,
      focus: "Relational vs Non-relational",
      activities: "Hands-on exercises",
      deliverables: "Practice DB on Excel/SQL"
    },
    {
      week: 15,
      focus: "Data Analytics workloads",
      activities: "Practice case studies",
      deliverables: "Short reports"
    },
    {
      week: 16,
      focus: "DP-900 Practice Test",
      activities: "Timed mock exams",
      deliverables: "Performance review"
    },
    {
      week: 17,
      focus: "Data Preparation & Modeling",
      activities: "Practice with Power BI",
      deliverables: "PBIX + README"
    },
    {
      week: 18,
      focus: "Visualization & Reporting",
      activities: "Build multiple dashboards",
      deliverables: "PBIX + screenshots"
    },
    {
      week: 19,
      focus: "DAX Calculations",
      activities: "Hands-on exercises",
      deliverables: "PBIX + summary formulas"
    },
    {
      week: 20,
      focus: "DA-100 Practice Test",
      activities: "Timed mock exams",
      deliverables: "Performance review"
    },
    {
      week: 21,
      focus: "Fabric workspace & datasets",
      activities: "Tutorials + hands-on",
      deliverables: "Fabric workspace projects"
    },
    {
      week: 22,
      focus: "Dataflows & Pipelines",
      activities: "Build sample pipelines",
      deliverables: "PBIX + pipeline screenshots"
    },
    {
      week: 23,
      focus: "Advanced Analytics",
      activities: "Explore AI & predictive insights",
      deliverables: "Project file + README"
    },
    {
      week: 24,
      focus: "Capstone: Fabric Analytics End-to-End",
      activities: "Build an end-to-end project",
      deliverables: "Full project + README + screenshots"
    }
  ];

  const certifications = [
    {
      name: "DP-900: Microsoft Azure Data Fundamentals",
      month: "Month 4",
      description: "Core data concepts, relational & non-relational data, big data, analytics",
      icon: Database,
      color: "bg-blue-500"
    },
    {
      name: "PL-300: Power BI Data Analyst",
      month: "Month 5", 
      description: "Data modeling, DAX, visualizations, publishing, and advanced Power BI features",
      icon: BarChart3,
      color: "bg-purple-500"
    },
    {
      name: "DP-600: Fabric Analytics Engineer",
      month: "Month 6",
      description: "Microsoft Fabric, Lakehouses, Pipelines, Notebooks, and advanced analytics",
      icon: Code,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Detailed Curriculum & Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on learning with real projects, weekly deliverables, and industry certifications. 
              Build a portfolio while mastering data analytics skills.
            </p>
          </motion.div>

          {/* Tabs for Phase 1 and Phase 2 */}
          <Tabs defaultValue="phase1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="phase1" className="text-lg">
                Phase 1: Learning Projects (Months 1-3)
              </TabsTrigger>
              <TabsTrigger value="phase2" className="text-lg">
                Phase 2: Certification Prep (Months 4-6)
              </TabsTrigger>
            </TabsList>

            {/* Phase 1: Learning Projects */}
            <TabsContent value="phase1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-elegant border-border/50">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                      <BookOpen className="w-8 h-8" />
                      <span>Phase 1: Learning Projects (Months 1-3)</span>
                    </CardTitle>
                    <p className="text-lg opacity-90">Hands-on projects with weekly deliverables</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                      {phase1Projects.map((project, index) => (
                        <div key={index} className={`p-6 ${index < phase1Projects.length - 1 ? 'border-r border-b border-border/30' : 'border-b border-border/30'}`}>
                          <div className="flex items-center space-x-2 mb-4">
                            <Calendar className="w-5 h-5 text-accent" />
                            <span className="font-bold text-lg text-primary">Week {project.week}</span>
                          </div>
                          
                          <h3 className="font-semibold text-xl text-foreground mb-3">{project.project}</h3>
                          
                          <div className="mb-4">
                            <h4 className="font-medium text-sm text-muted-foreground mb-2">Skills Learned:</h4>
                            <p className="text-sm text-foreground">{project.skills}</p>
                          </div>
                          
                          <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                            <h4 className="font-medium text-sm text-accent mb-1">Deliverables:</h4>
                            <p className="text-xs text-muted-foreground">{project.deliverables}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Phase 2: Certification Prep */}
            <TabsContent value="phase2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-elegant border-border/50">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <CardTitle className="text-2xl font-bold flex items-center space-x-3">
                      <Trophy className="w-8 h-8" />
                      <span>Phase 2: Certification Prep (Months 4-6)</span>
                    </CardTitle>
                    <p className="text-lg opacity-90">Microsoft certification preparation with practice tests</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                      {phase2Prep.map((week, index) => (
                        <div key={index} className={`p-6 ${index < phase2Prep.length - 1 ? 'border-r border-b border-border/30' : 'border-b border-border/30'}`}>
                          <div className="flex items-center space-x-2 mb-4">
                            <Target className="w-5 h-5 text-accent" />
                            <span className="font-bold text-lg text-primary">Week {week.week}</span>
                          </div>
                          
                          <h3 className="font-semibold text-xl text-foreground mb-3">{week.focus}</h3>
                          
                          <div className="mb-4">
                            <h4 className="font-medium text-sm text-muted-foreground mb-2">Activities:</h4>
                            <p className="text-sm text-foreground">{week.activities}</p>
                          </div>
                          
                          <div className="bg-accent/10 rounded-lg p-3 border border-accent/20">
                            <h4 className="font-medium text-sm text-accent mb-1">Deliverables:</h4>
                            <p className="text-xs text-muted-foreground">{week.deliverables}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="font-serif text-3xl font-bold text-center text-primary mb-12">
              Microsoft Certifications You'll Earn
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full shadow-elegant border-border/50 hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="outline" className="w-fit mx-auto mb-2">{cert.month}</Badge>
                      <CardTitle className="text-lg font-bold text-primary">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Ready to Start Your Data Analytics Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our structured 6-month program and build a portfolio while earning Microsoft certifications.
              </p>
              <Button size="lg" variant="hero" className="text-lg px-8 py-6">
                Enroll Now - Limited Seats Available
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
