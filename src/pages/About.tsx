import developerPhoto from '@/assets/developer-photo.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Globe, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const skills = [
    {
      category: t('about.skills.frontend.category'),
      icon: <Globe className="h-6 w-6 text-primary" />,
      technologies: t('about.skills.frontend.technologies', { returnObjects: true }) as string[]
    },
    {
      category: t('about.skills.backend.category'),
      icon: <Server className="h-6 w-6 text-primary" />,
      technologies: t('about.skills.backend.technologies', { returnObjects: true }) as string[]
    },
    {
      category: t('about.skills.architecture.category'),
      icon: <Database className="h-6 w-6 text-primary" />,
      technologies: t('about.skills.architecture.technologies', { returnObjects: true }) as string[]
    },
    {
      category: t('about.skills.development.category'),
      icon: <Code2 className="h-6 w-6 text-primary" />,
      technologies: t('about.skills.development.technologies', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img
              src={developerPhoto}
              alt="Developer Photo"
              className="w-48 md:w-56 h-auto rounded-lg border-4 border-primary/20 shadow-elegant"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {t('about.technicalExpertise.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.technicalExpertise.subtitle')}
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
                  <li>• Implemented Spec-Driven development processes that decreased bug reports by 60%</li>
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
