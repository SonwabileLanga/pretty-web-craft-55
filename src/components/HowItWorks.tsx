import { Calendar, BookOpen, Target, Trophy, Database, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            HOW IT WORKS
          </h2>
          
          {/* Structure Section */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">Structure</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium">
                  6-month program (3 months learning + 3 months exam preparation)
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium">
                  Weekly classes + assignments
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium">
                  End-of-month projects to build your portfolio
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium">
                  Mock exams and preparation support
                </p>
              </div>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">Course content</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <span className="font-bold">Excel</span>
                  <span className="mx-2">→</span>
                  <span>Data cleaning, PivotTables, dashboards</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <span className="font-bold">SQL</span>
                  <span className="mx-2">→</span>
                  <span>Querying databases & answering business questions</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <span className="font-bold">Python (Intro)</span>
                  <span className="mx-2">→</span>
                  <span>Data analysis with Pandas and Matplotlib</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <span className="font-bold">Power BI</span>
                  <span className="mx-2">→</span>
                  <span>Build interactive dashboards & reports</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-bold">Microsoft Fabric</span>
                  <span className="mx-2">→</span>
                  <span>Learn the future of analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Section */}
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">Investment</h3>
            <p className="text-3xl font-bold text-accent mb-4">Only R3000</p>
            <p className="text-lg text-muted-foreground">for the full 6-month program</p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-primary">
              Turn data into opportunity. Be job-ready in 6 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;