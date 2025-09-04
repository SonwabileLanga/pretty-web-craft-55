import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, Globe, Code, Database, BarChart3, FileSpreadsheet, Github } from "lucide-react";
import { motion } from "framer-motion";

const ToolkitSection = () => {
  const toolkits = [
    {
      category: "SQL",
      icon: Database,
      color: "bg-blue-500",
      tools: [
        {
          name: "SQL Fiddle",
          description: "Lightweight, runs in browser, great for quick practice",
          url: "https://sqlfiddle.com",
          features: ["Browser-based", "Quick practice", "No setup required"]
        },
        {
          name: "DB Fiddle",
          description: "Supports multiple SQL dialects (MySQL, PostgreSQL, SQLite)",
          url: "https://db-fiddle.com",
          features: ["Multiple dialects", "MySQL", "PostgreSQL", "SQLite"]
        },
        {
          name: "Mode Analytics SQL Editor",
          description: "Great for interactive practice with guided lessons",
          url: "https://mode.com",
          features: ["Interactive lessons", "Guided practice", "Real datasets"]
        },
        {
          name: "SQLite Online",
          description: "No installation, full SQL practice",
          url: "https://sqliteonline.com",
          features: ["No installation", "Full SQL practice", "Advanced work"]
        }
      ]
    },
    {
      category: "Python",
      icon: Code,
      color: "bg-green-500",
      tools: [
        {
          name: "Google Colab",
          description: "Free Jupyter Notebook environment with zero setup",
          url: "https://colab.research.google.com",
          features: ["Free", "Jupyter Notebooks", "Zero setup", "Cloud-based"]
        },
        {
          name: "Kaggle Notebooks",
          description: "Perfect for practice + access to datasets",
          url: "https://kaggle.com/code",
          features: ["Free datasets", "Practice environment", "Community"]
        },
        {
          name: "Replit",
          description: "Great for Python scripts, runs directly in browser",
          url: "https://replit.com",
          features: ["Browser-based", "Python scripts", "Real-time collaboration"]
        }
      ]
    },
    {
      category: "Power BI",
      icon: BarChart3,
      color: "bg-purple-500",
      tools: [
        {
          name: "Power BI Service",
          description: "Students can sign up for free account (Pro trial if needed)",
          url: "https://app.powerbi.com",
          features: ["Free account", "Cloud-based", "All features", "Cross-platform"]
        },
        {
          name: "Power BI Desktop",
          description: "Free desktop version (requires Windows)",
          url: "https://powerbi.microsoft.com/desktop/",
          features: ["Desktop version", "Advanced features", "Windows only"]
        }
      ]
    },
    {
      category: "Excel",
      icon: FileSpreadsheet,
      color: "bg-orange-500",
      tools: [
        {
          name: "Microsoft Excel Online",
          description: "Free with a Microsoft account",
          url: "https://office.com",
          features: ["Free with Microsoft account", "Online version", "Full Excel features"]
        },
        {
          name: "Google Sheets",
          description: "Good alternative if Excel is unavailable",
          url: "https://sheets.google.com",
          features: ["Free", "Google account", "Good alternative", "Collaborative"]
        }
      ]
    },
    {
      category: "GitHub Portfolio",
      icon: Github,
      color: "bg-gray-600",
      tools: [
        {
          name: "GitHub",
          description: "Students should create a GitHub account for portfolio",
          url: "https://github.com",
          features: ["Portfolio hosting", "Version control", "Professional presence"]
        },
        {
          name: "GitHub Desktop",
          description: "GUI for Git operations (optional)",
          url: "https://desktop.github.com",
          features: ["GUI interface", "Easy to use", "Optional"]
        },
        {
          name: "GitHub Codespaces",
          description: "Cloud-based coding directly on GitHub",
          url: "https://github.com/features/codespaces",
          features: ["Cloud coding", "Integrated", "No local setup"]
        }
      ]
    }
  ];

  const portfolioStructure = [
    {
      name: "Excel-Bootcamp-Projects",
      description: "Personal budget trackers, sales dashboards, data cleaning projects"
    },
    {
      name: "SQL-Bootcamp-Projects", 
      description: "Database queries, data analysis scripts, performance optimization"
    },
    {
      name: "Python-Bootcamp-Projects",
      description: "Data exploration scripts, web scrapers, automation tools"
    },
    {
      name: "PowerBI-Dashboards",
      description: "Executive dashboards, KPI reports, customer segmentation"
    }
  ];

  return (
    <section id="toolkit" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/5">
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
              Complete Learning Toolkit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to master data analytics - from beginner tools to professional platforms. 
              All tools are free and accessible from any device.
            </p>
          </motion.div>

          {/* Toolkit Categories */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {toolkits.map((toolkit, index) => (
              <motion.div
                key={toolkit.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-elegant border-border/50 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${toolkit.color} rounded-lg flex items-center justify-center`}>
                        <toolkit.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary">
                        {toolkit.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {toolkit.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border border-border/30 rounded-lg p-4 hover:bg-accent/5 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{tool.name}</h4>
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="sm" className="p-1 h-auto">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </a>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {tool.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20"
          >
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-primary mb-4">
                Portfolio Setup Plan
              </h3>
              <p className="text-lg text-muted-foreground">
                One GitHub repository per module with professional documentation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioStructure.map((repo, index) => (
                <div key={index} className="bg-background/50 rounded-lg p-6 border border-border/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <Github className="w-6 h-6 text-accent" />
                    <h4 className="font-semibold text-foreground font-mono">{repo.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                  <div className="mt-4 flex items-center space-x-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>README.md files explaining each project</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Screenshots of dashboards and visuals</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
