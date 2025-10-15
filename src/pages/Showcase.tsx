import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code } from 'lucide-react';

const Showcase = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio site with animated sections and project showcase',
      category: 'Landing & Portfolio',
      image: '/placeholder.svg',
      features: ['Responsive Design', 'Animation Effects', 'Contact Form', 'SEO Optimized'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      demo: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with markdown support and user authentication',
      category: 'Content Platform',
      image: '/placeholder.svg',
      features: ['Markdown Editor', 'User Auth', 'Comments', 'Search & Tags'],
      technologies: ['React', 'Supabase', 'React Query'],
      demo: '#',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Multi-user application with user roles and real-time data',
      category: 'Multi-user SaaS',
      image: '/placeholder.svg',
      features: ['User Roles', 'Real-time Updates', 'Analytics', 'Team Management'],
      technologies: ['React', 'Supabase', 'Recharts'],
      demo: '#',
    },
    {
      title: 'E-commerce Store',
      description: 'Online store with product catalog, cart and payment integration',
      category: 'E-commerce',
      image: '/placeholder.svg',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      technologies: ['React', 'Stripe', 'Supabase'],
      demo: '#',
    },
    {
      title: 'Admin Panel',
      description: 'Comprehensive admin interface for managing users and content',
      category: 'Admin Dashboard',
      image: '/placeholder.svg',
      features: ['User Management', 'Data Tables', 'Role Permissions', 'Activity Logs'],
      technologies: ['React', 'TypeScript', 'Supabase'],
      demo: '#',
    },
    {
      title: 'Booking System',
      description: 'Appointment scheduling with calendar integration and notifications',
      category: 'Business App',
      image: '/placeholder.svg',
      features: ['Calendar View', 'Email Notifications', 'Payment Integration', 'Booking Management'],
      technologies: ['React', 'Supabase', 'Date-fns'],
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Showcase</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Examples of typical applications I can develop for you
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <Code className="h-4 w-4" />
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Demo Button */}
                <Button variant="outline" className="w-full" asChild>
                  <a href={project.demo} className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Live Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to start your project?</CardTitle>
              <CardDescription>
                Contact me to discuss your requirements and get a custom solution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <a href="/contact">Contact Me</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
