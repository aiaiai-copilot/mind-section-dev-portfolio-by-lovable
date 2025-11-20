import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Living Tags Prototype",
      description: "Прототип SaaS - сервиса для автоматической разметки тегами коротких текстов",
      longDescription: "Развитие идеи PoC в полноценный прототип SaaS-платформы. Включает в себя продвинутые инструменты для работы с текстовыми данными, управление коллекциями и пользовательские настройки.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "React", "Vite", "Supabase", "TailwindCSS"],
      features: [
        "Доработанный глоссарий тегов",
        "Редактор коллекции текстов",
        "Качественный UI/UX дизайн",
        "Интеграция с Supabase (Database & Auth)",
        "Авторизация пользователей"
      ],
      metrics: {
        status: "Prototype",
        stack: "Modern",
        type: "SaaS",
        access: "Public"
      },
      github: "https://github.com/aiaiai-copilot/living-tags-prototype",
      live: "https://living-tags-prototype.lovable.app/",
      featured: true
    },
    {
      title: "Living Tags PoC",
      description: "Proof of Concept(проверка идеи) сервиса для автоматической разметки тегами коротких текстов",
      longDescription: "Первоначальная реализация идеи автоматической тегизации. Демонстрирует возможности использования LLM для анализа и структурирования коротких текстовых фрагментов.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "React", "Vite", "Claude API"],
      features: [
        "Использование AI API (Claude API)",
        "Автоматическая генерация тегов",
        "Базовый интерфейс для ввода текста",
        "Демонстрация возможностей LLM"
      ],
      metrics: {
        status: "PoC",
        api: "Claude",
        type: "Demo",
        code: "Open"
      },
      github: "https://github.com/aiaiai-copilot/living-tags-poc",
      live: "https://living-tags-poc.lovable.app/",
      featured: false
    }
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
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Additional Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Portfolio;
