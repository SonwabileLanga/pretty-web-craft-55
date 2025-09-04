import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Trophy, Target, Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Phase 1: Learning",
      duration: "Months 1-3",
      period: "Sept - Nov 2025",
      color: "from-blue-500 to-blue-600",
      icon: BookOpen,
      months: [
        {
          month: "Month 1 - September",
          focus: "Excel Foundations",
          weeks: [
            {
              week: "Week 1",
              topic: "Excel basics (formulas, formatting, data cleaning)",
              deliverables: "Basic Excel file + README"
            },
            {
              week: "Week 2", 
              topic: "Functions (IF, VLOOKUP/XLOOKUP, INDEX/MATCH, text functions)",
              deliverables: "Advanced Excel workbook"
            },
            {
              week: "Week 3",
              topic: "Pivot Tables, Pivot Charts, Dashboards",
              deliverables: "Interactive dashboard"
            },
            {
              week: "Week 4",
              topic: "Data cleaning & analysis project in Excel",
              deliverables: "Capstone project + presentation"
            }
          ]
        },
        {
          month: "Month 2 - October",
          focus: "SQL for Data Analysis",
          weeks: [
            {
              week: "Week 1",
              topic: "Introduction to Databases & SQL SELECT statements",
              deliverables: "SQL queries + documentation"
            },
            {
              week: "Week 2",
              topic: "Filtering, Sorting, Aggregations (WHERE, GROUP BY, HAVING)",
              deliverables: "Complex query exercises"
            },
            {
              week: "Week 3",
              topic: "Joins (INNER, LEFT, RIGHT, FULL), Subqueries",
              deliverables: "Multi-table analysis project"
            },
            {
              week: "Week 4",
              topic: "SQL Project – querying a dataset",
              deliverables: "Complete SQL analysis + report"
            }
          ]
        },
        {
          month: "Month 3 - November",
          focus: "Python & Power BI",
          weeks: [
            {
              week: "Week 1",
              topic: "Python basics (data types, loops, conditions)",
              deliverables: "Python scripts + GitHub repo"
            },
            {
              week: "Week 2",
              topic: "Pandas for data cleaning & exploration",
              deliverables: "Data analysis notebook"
            },
            {
              week: "Week 3",
              topic: "Power BI introduction (loading data, building visuals)",
              deliverables: "Power BI dashboard"
            },
            {
              week: "Week 4",
              topic: "Power BI advanced (measures, DAX basics, dashboards)",
              deliverables: "Advanced Power BI project"
            }
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Certification Prep",
      duration: "Months 4-6", 
      period: "Dec 2025 - Feb 2026",
      color: "from-purple-500 to-purple-600",
      icon: Trophy,
      months: [
        {
          month: "Month 4 - December",
          focus: "Microsoft Data Fundamentals",
          weeks: [
            {
              week: "Week 1-2",
              topic: "Core concepts – relational & non-relational data, big data, analytics",
              deliverables: "Study notes + practice exercises"
            },
            {
              week: "Week 3-4",
              topic: "Exam prep (DP-900: Microsoft Azure Data Fundamentals)",
              deliverables: "Practice test results + certification"
            }
          ]
        },
        {
          month: "Month 5 - January",
          focus: "Microsoft Power BI Certification",
          weeks: [
            {
              week: "Week 1-2",
              topic: "Data modeling, DAX, visualizations, publishing",
              deliverables: "Advanced Power BI projects"
            },
            {
              week: "Week 3-4",
              topic: "Exam prep (PL-300: Power BI Data Analyst)",
              deliverables: "Practice test results + certification"
            }
          ]
        },
        {
          month: "Month 6 - February",
          focus: "Microsoft Fabric Certification",
          weeks: [
            {
              week: "Week 1-2",
              topic: "Microsoft Fabric introduction (Lakehouses, Pipelines, Notebooks)",
              deliverables: "Fabric workspace projects"
            },
            {
              week: "Week 3-4",
              topic: "Exam prep (DP-600: Fabric Analytics Engineer)",
              deliverables: "Practice test results + certification"
            }
          ]
        }
      ]
    }
  ];

  const weeklyRhythm = [
    {
      day: "Monday",
      activity: "Live session or Recorded video release",
      icon: Users
    },
    {
      day: "Wednesday", 
      activity: "Assignment due",
      icon: Target
    },
    {
      day: "Thursday",
      activity: "Feedback & mini-review",
      icon: Award
    },
    {
      day: "Friday",
      activity: "Q&A / Review session",
      icon: Users
    },
    {
      day: "Saturday",
      activity: "Final submission (weekly task/project)",
      icon: Clock
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
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
              6-Month Data Analyst Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured learning path from Excel basics to Microsoft certifications. 
              Build real projects, earn industry credentials, and launch your data career.
            </p>
          </motion.div>

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, phaseIndex) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.2 }}
              >
                <Card className="overflow-hidden shadow-elegant border-border/50">
                  <CardHeader className={`bg-gradient-to-r ${phase.color} text-white`}>
                    <div className="flex items-center space-x-4">
                      <phase.icon className="w-8 h-8" />
                      <div>
                        <CardTitle className="text-2xl font-bold">{phase.phase}</CardTitle>
                        <p className="text-lg opacity-90">{phase.duration} • {phase.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {phase.months.map((month, monthIndex) => (
                        <div key={monthIndex} className={`p-6 ${monthIndex < phase.months.length - 1 ? 'border-r border-border/30' : ''}`}>
                          <div className="mb-6">
                            <h3 className="font-bold text-xl text-primary mb-2">{month.month}</h3>
                            <Badge variant="outline" className="text-sm">{month.focus}</Badge>
                          </div>
                          
                          <div className="space-y-4">
                            {month.weeks.map((week, weekIndex) => (
                              <div key={weekIndex} className="border border-border/20 rounded-lg p-4 hover:bg-accent/5 transition-colors">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Calendar className="w-4 h-4 text-accent" />
                                  <span className="font-semibold text-sm text-foreground">{week.week}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{week.topic}</p>
                                <div className="text-xs text-accent font-medium">{week.deliverables}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Weekly Rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-primary mb-2">
                  Weekly Learning Rhythm
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Consistent schedule that applies across all 6 months
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {weeklyRhythm.map((day, index) => (
                    <div key={index} className="text-center p-4 bg-background/50 rounded-lg border border-border/30">
                      <day.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground mb-1">{day.day}</h4>
                      <p className="text-xs text-muted-foreground">{day.activity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Start Your Data Analytics Journey Today
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Next cohort starts in 2 weeks • Limited seats available
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
