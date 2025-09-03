import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const EnhancedContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Direct",
      description: "Speak directly with Sonwabile",
      action: "079 370 9715",
      href: "tel:0793709715",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions & instant support",
      action: "Message Now",
      href: "https://wa.me/27793709715",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Detailed inquiries welcome",
      action: "info@dataacademy.co.za",
      href: "mailto:info@dataacademy.co.za",
      color: "bg-blue-500"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Johannesburg, South Africa"
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon-Fri: 8AM-6PM"
    }
  ];

  const faqs = [
    {
      question: "When does the next cohort start?",
      answer: "New cohorts start every month. The next intake is in 2 weeks with limited seats available."
    },
    {
      question: "Do I need prior experience?",
      answer: "No prior experience required! Our curriculum is designed for complete beginners to advanced learners."
    },
    {
      question: "What's included in the program fee?",
      answer: "Everything - live classes, course materials, projects, certification prep, and career support."
    },
    {
      question: "Is job placement guaranteed?",
      answer: "While we can't guarantee placement, 85% of our graduates find employment within 6 months."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Start Your Data Analytics Journey
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to transform your career? Get in touch with Sonwabile to secure your spot 
              in the next cohort. Limited seats available.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-background text-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Get Program Details</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="bg-secondary/50" />
                      <Input placeholder="Last Name" className="bg-secondary/50" />
                    </div>
                    
                    <Input placeholder="Email Address" type="email" className="bg-secondary/50" />
                    <Input placeholder="Phone Number" type="tel" className="bg-secondary/50" />
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Which program interests you?
                      </label>
                      <select className="w-full p-3 border border-border rounded-md bg-secondary/50">
                        <option>Data Analytics Fundamentals</option>
                        <option>Microsoft Certified Data Analyst Track</option>
                        <option>Advanced Analytics & Machine Learning</option>
                        <option>Custom Learning Path</option>
                      </select>
                    </div>
                    
                    <Textarea 
                      placeholder="Tell us about your background and goals..."
                      className="bg-secondary/50 min-h-[100px]"
                    />
                    
                    <Button variant="hero" size="lg" className="w-full group">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Contact Info & FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a key={method.title} href={method.href}>
                      <Card className="bg-background/10 border-primary-foreground/20 hover:bg-background/20 transition-all duration-300 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                              <method.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-primary-foreground">{method.title}</h4>
                              <p className="text-sm opacity-80">{method.description}</p>
                              <p className="font-medium text-accent">{method.action}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Office Information</h3>
                <div className="space-y-3">
                  {officeInfo.map((info, index) => (
                    <div key={info.title} className="flex items-center space-x-3">
                      <info.icon className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <span className="font-medium">{info.title}: </span>
                        <span className="opacity-90">{info.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-background/10 rounded-lg p-4 border border-primary-foreground/20">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-sm opacity-80">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor Info */}
              <div className="bg-background/10 rounded-lg p-6 border border-primary-foreground/20">
                <h3 className="text-xl font-bold mb-4">Meet Your Instructor</h3>
                <div className="space-y-2">
                  <p className="font-medium">Siphesihle Sinare</p>
                  <p className="text-sm opacity-80">Microsoft Certified Data Analyst</p>
                  <p className="text-sm opacity-80">500+ Students Trained • 95% Success Rate</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0793709715">
                <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 079 370 9715
                </Button>
              </a>
              <a href="https://wa.me/27793709715">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
            <p className="text-sm opacity-80 mt-4">
              🚀 Next cohort starts in 2 weeks • 📞 Free consultation available • 💼 Career support included
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;