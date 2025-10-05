import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      quote: "The documentation and code structure made onboarding new team members incredibly smooth. Six months later, we're still building on the solid foundation.",
      author: "Sarah Chen",
      role: "CTO, TechStart Inc."
    },
    {
      quote: "Best investment we made. The specification-driven approach caught potential issues before development, saving us months of refactoring.",
      author: "Marcus Rodriguez",
      role: "Lead Developer, Scale Systems"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Mind/Section
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Fullstack Developer Crafting
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Reliable code that grows with your business<br />
            Easy to develop, extend, and maintain by teams
          </p>
          
          <div className="bg-gradient-subtle p-8 rounded-2xl shadow-card mb-16 animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-4">Specialization</h3>
            <h4 className="text-xl font-semibold text-primary mb-4">Specification Driven Development</h4>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Creating web applications focused on long-term development with special attention to architecture, 
              comprehensive documentation, full contract testing and maintainable code.
            </p>
          </div>

          <Link to="/contact">
            <Button size="lg" className="group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;