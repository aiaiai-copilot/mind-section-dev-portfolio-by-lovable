import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { showcaseProjects } from '@/data/showcaseProjects';
import { Link } from 'react-router-dom';

const Showcase = () => {

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Showcase</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions I can build to meet your needs
          </p>
        </div>

        {/* Projects Grid */}
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseProjects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-scale animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <Link to={project.showcasePath} className="aspect-video overflow-hidden flex-shrink-0 cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </Link>

                <CardHeader className="flex-shrink-0">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CardTitle className="text-xl mb-2 line-clamp-1">{project.title}</CardTitle>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{project.title}</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{project.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Features */}
                  <div className="mb-4 flex-grow">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs" title={feature}>
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>

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
