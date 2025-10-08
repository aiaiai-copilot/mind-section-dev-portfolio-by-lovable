import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    // {
    //   title: "Enterprise E-Commerce Platform",
    //   description: "Multi-tenant SaaS platform handling $2M+ in monthly transactions with comprehensive API documentation and 98% uptime.",
    //   longDescription: "Built from specification-first approach with complete OpenAPI documentation. Features include multi-tenant architecture, real-time inventory management, automated testing suite, and comprehensive admin dashboard.",
    //   image: "/placeholder.svg",
    //   technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    //   features: [
    //     "100% API test coverage with automated testing",
    //     "Complete OpenAPI 3.0 specifications", 
    //     "Multi-tenant architecture with data isolation",
    //     "Real-time inventory synchronization",
    //     "Comprehensive admin dashboard",
    //     "Automated deployment pipeline"
    //   ],
    //   metrics: {
    //     coverage: "98%",
    //     uptime: "99.9%",
    //     loadTime: "< 200ms",
    //     documentation: "100%"
    //   },
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   featured: true
    // },
    // {
    //   title: "SaaS Analytics Dashboard",
    //   description: "Real-time analytics platform with modular component system serving 10,000+ active users with comprehensive documentation.",
    //   longDescription: "Specification-driven dashboard with real-time data visualization, modular architecture, and extensive component documentation. Built with TypeScript for type safety and maintainability.",
    //   image: "/placeholder.svg",
    //   technologies: ["TypeScript", "React", "D3.js", "Node.js", "MongoDB"],
    //   features: [
    //     "Real-time data visualization with D3.js",
    //     "Modular component architecture",
    //     "TypeScript with strict type checking",
    //     "Comprehensive Storybook documentation",
    //     "Automated performance monitoring",
    //     "Role-based access control"
    //   ],
    //   metrics: {
    //     coverage: "95%",
    //     users: "10,000+",
    //     components: "150+",
    //     documentation: "100%"
    //   },
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   featured: true
    // },
    // {
    //   title: "Healthcare Management System",
    //   description: "HIPAA-compliant patient management system with comprehensive audit trails and extensive documentation for healthcare providers.",
    //   longDescription: "Built with security and compliance as primary concerns. Features comprehensive audit logging, role-based permissions, and extensive API documentation for integration with existing healthcare systems.",
    //   image: "/placeholder.svg",
    //   technologies: ["React", "PostgreSQL", "Docker"],
    //   features: [
    //     "HIPAA-compliant data handling",
    //     "Comprehensive audit trail system",
    //     "Role-based permission system",
    //     "API documentation for integrations",
    //     "Automated backup and recovery",
    //     "Security monitoring and alerts"
    //   ],
    //   metrics: {
    //     coverage: "99%",
    //     compliance: "HIPAA",
    //     security: "SOC 2",
    //     documentation: "100%"
    //   },
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   featured: false
    // },
    // {
    //   title: "Financial Trading Platform",
    //   description: "High-frequency trading platform with microsecond latency requirements and comprehensive system documentation.",
    //   longDescription: "Performance-critical application built with extensive monitoring and documentation. Features real-time market data processing, algorithmic trading capabilities, and comprehensive system architecture documentation.",
    //   image: "/placeholder.svg",
    //   technologies: ["React", "WebSocket", "Redis", "Node.js", "TimescaleDB"],
    //   features: [
    //     "Microsecond latency data processing",
    //     "Real-time market data visualization",
    //     "Algorithmic trading engine",
    //     "Comprehensive monitoring dashboard",
    //     "Automated risk management",
    //     "Complete system documentation"
    //   ],
    //   metrics: {
    //     latency: "< 1ms",
    //     throughput: "10K req/s",
    //     uptime: "99.99%",
    //     documentation: "100%"
    //   },
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const ProjectCard = ({ project, featured = false }: { project: typeof projects[0], featured?: boolean }) => (
    <Card className={`shadow-elegant hover-scale border-0 ${featured ? 'md:col-span-2' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <div>
            <CardTitle className="text-xl text-primary mb-2">{project.title}</CardTitle>
            <CardDescription className="text-base">
              {project.description}
            </CardDescription>
          </div>
          {featured && <Badge variant="secondary">Featured</Badge>}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {featured && (
          <p className="text-muted-foreground">
            {project.longDescription}
          </p>
        )}
        
        <div>
          <h4 className="font-semibold text-primary mb-3">Key Features</h4>
          <div className="grid md:grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-3">Project Metrics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="text-center p-2 bg-secondary/30 rounded">
                <div className="font-semibold text-primary">{String(value)}</div>
                <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <Button size="sm" variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications built with maintainable architecture, comprehensive documentation, 
            and specification-driven development practices.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} featured />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        {/* <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Additional Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section> */}

      </div>
    </div>
  );
};

export default Portfolio;
