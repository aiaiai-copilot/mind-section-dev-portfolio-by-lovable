import { ArrowRight, CheckCircle, Code, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Specification Driven Development',
      description: 'Complete technical specifications before a single line of code. Clear contracts, comprehensive documentation, and predictable outcomes.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Maintainable Architecture',
      description: 'Code structures that stand the test of time. Easy to understand, extend, and modify as your business requirements evolve.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Team-Ready Code',
      description: 'Write code that any developer can pick up. Comprehensive testing, clear documentation, and consistent patterns throughout.'
    }
  ];

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
            Mind Section
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Development Methodology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every project follows a proven process that prioritizes long-term success over quick fixes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale shadow-card border-0 bg-card">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world applications built with maintainability at the core
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-elegant hover-scale border-0">
              <CardHeader>
                <CardTitle className="text-primary">E-Commerce Platform</CardTitle>
                <CardDescription>
                  Multi-tenant architecture with comprehensive API documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    100% test coverage with automated testing
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Complete OpenAPI specifications
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Scalable microservices architecture
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-scale border-0">
              <CardHeader>
                <CardTitle className="text-primary">SaaS Dashboard</CardTitle>
                <CardDescription>
                  Real-time analytics platform with modular component system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Comprehensive component documentation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    TypeScript with strict type checking
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Automated deployment pipeline
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Long-term partnerships built on reliable, maintainable code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0 bg-card">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-primary font-semibold">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Build Something Maintainable?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create a specification that sets your team up for long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;