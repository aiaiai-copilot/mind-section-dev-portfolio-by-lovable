import developerPhoto from '@/assets/developer-photo.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="h-6 w-6 text-primary" />,
      technologies: ["React", "TypeScript"]
    },
    {
      category: "Backend", 
      icon: <Server className="h-6 w-6 text-primary" />,
      technologies: [
        "Node.js",
        "Java",
        "PostgreSQL",
        "Redis"
      ]
    },
    {
      category: "Architecture",
      icon: <Database className="h-6 w-6 text-primary" />,
      technologies: ["Clean architecture", "REST APIs"]
    },
    {
      category: "Development",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      technologies: ["AI Tools", "Spec-Driven Development", "Test-Driven Development", "Docker", "Git", "Documentation"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary/20 shadow-elegant">
              <AvatarImage src={developerPhoto} alt="Developer Photo" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Mind/Section
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Web applications built to last — with explicit structure, thorough documentation,
            and code that’s interpretable by developers and AI alike.
          </p>
        </div>

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
        {/* <section className="mb-20">
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
        </section> */}
      </div>
    </div>
  );
};

export default About;