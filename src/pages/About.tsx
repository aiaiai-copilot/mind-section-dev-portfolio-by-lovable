import { CheckCircle, Code2, Database, Globe, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6 text-primary" />,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend", 
      icon: <Server className="h-6 w-6 text-primary" />,
      technologies: ["Node.js", "PostgreSQL", "Redis"]
    },
    {
      category: "Architecture",
      icon: <Database className="h-6 w-6 text-primary" />,
      technologies: ["Microservices", "REST APIs", "GraphQL", "Docker", "AWS"]
    },
    {
      category: "Development",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      technologies: ["Test-Driven Development", "CI/CD", "Git", "Documentation", "Code Review"]
    }
  ];

  const methodology = [
    "Comprehensive technical specifications before development begins",
    "Architecture documentation with clear separation of concerns", 
    "Contract-first API design with OpenAPI specifications",
    "Test-driven development with 90%+ code coverage",
    "Automated testing pipelines and deployment processes",
    "Detailed onboarding documentation for new team members",
    "Regular code reviews focused on maintainability",
    "Performance monitoring and optimization strategies"
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Mind/Section
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A fullstack developer passionate about creating web applications that stand the test of time. 
            Focused on architecture, documentation, and code that grows with your business.
          </p>
        </div>

        {/* Philosophy Section */}
        <section className="mb-20 animate-slide-up">
          <div className="bg-gradient-subtle p-8 md:p-12 rounded-2xl shadow-card">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Development Philosophy
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                In today's fast-paced development world, the pressure to "move fast and break things" 
                often leads to technical debt that haunts projects for years. I believe in a different approach: 
                <strong className="text-primary"> Specification Driven Development</strong>.
              </p>
              <p className="mb-6">
                Every line of code should serve a purpose, every component should have clear responsibilities, 
                and every API should be documented before implementation. This isn't about moving slow—it's 
                about moving deliberately and building foundations that accelerate future development.
              </p>
              <p>
                When teams can quickly understand, extend, and maintain your codebase, velocity increases 
                naturally. When new developers can onboard in days instead of weeks, productivity soars. 
                This is the power of maintainable code.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Specification Driven Development
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that prioritizes documentation, testing, and maintainable architecture
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {methodology.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary/30 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Full-stack capabilities with focus on modern, maintainable technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="shadow-card border-0 hover-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    {skill.icon}
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-muted-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="bg-secondary/30 p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Senior Fullstack Developer</h3>
                <p className="text-muted-foreground mb-4">2020 - Present | Various Client Projects</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Architected and developed 15+ web applications with 90%+ test coverage</li>
                  <li>• Reduced onboarding time for new developers from 3 weeks to 5 days through comprehensive documentation</li>
                  <li>• Implemented specification-driven development processes that decreased bug reports by 60%</li>
                  <li>• Mentored junior developers on code quality, testing practices, and documentation standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Lead Frontend Developer</h3>
                <p className="text-muted-foreground mb-4">2018 - 2020 | TechScale Solutions</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Led development of component library used across 8 different applications</li>
                  <li>• Established testing standards and documentation practices for 12-person development team</li>
                  <li>• Designed and implemented TypeScript migration strategy for legacy React applications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Clarity</h3>
                <p className="text-muted-foreground">
                  Code should be self-documenting, but never self-explanatory. Clear documentation 
                  and specifications are essential for team success.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Every technical decision should consider long-term impact. Build for the team 
                  that will maintain this code in two years.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Quality is not a feature—it's the foundation. Comprehensive testing, code reviews, 
                  and standards are non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;