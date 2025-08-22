import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Data Analytics Journey?
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Contact Siphesihle today to secure your spot in the next cohort
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Call Direct</h3>
              <a href="tel:0793709715" className="text-lg hover:text-accent transition-colors">
                079 370 9715
              </a>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <a href="https://wa.me/27793709715" className="text-lg hover:text-accent transition-colors">
                Message Now
              </a>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">Get in Touch</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0793709715">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90">
                <Phone className="w-5 h-5" />
                Call Now: 079 370 9715
              </Button>
            </a>
            <a href="https://wa.me/27793709715">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-lg font-bold mb-2">Siphesihle Sinare</p>
            <p className="text-base opacity-80">Microsoft Certified Data Analyst</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;