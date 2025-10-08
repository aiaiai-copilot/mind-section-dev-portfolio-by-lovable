import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за ваше обращение. Я свяжусь с вами в течение 24 часов.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Попробуйте позже или напишите на alexanderlapygin@gmail.com",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      description: "Send me a detailed project inquiry",
      contact: "alexanderlapygin@gmail.com",
      action: "mailto:alexanderlapygin@gmail.com"
    },
    // {
    //   icon: <MessageSquare className="h-6 w-6 text-primary" />,
    //   title: "Project Discussion",
    //   description: "Schedule a consultation call",
    //   contact: "30-minute free consultation",
    //   action: "https://calendly.com"
    // },
    // {
    //   icon: <Phone className="h-6 w-6 text-primary" />,
    //   title: "Phone",
    //   description: "Direct line for urgent inquiries",
    //   contact: "+1 (555) 123-4567",
    //   action: "tel:+15551234567"
    // }
  ];

  const projectTypes = [
    "New Web Application",
    "API Development",
    "Technical Documentation",
    "Architecture Consulting",
    "Other"
  ];

  const budgetRanges = [
    "Under $10k",
    "$10k - $25k",
    "$25k - $50k", 
    "$50k - $100k",
    "$100k+",
    "Not sure yet"
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Build Something Great
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create maintainable, well-documented software that grows with your business? 
            Let's discuss your project and create a specification for success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Project Inquiry</CardTitle>
                <CardDescription>
                  Tell me about your project and I'll get back to you within 24 hours with a detailed response.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project, current challenges, and what you're hoping to achieve. The more details you provide, the better I can help you."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="shadow-card border-0 hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{method.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">{method.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                          <a
                            href={method.action}
                            className="text-primary font-medium story-link"
                            target={method.action.startsWith('http') ? '_blank' : undefined}
                            rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {method.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process Overview */}
            <Card className="shadow-card border-0 bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-primary">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Initial Discussion</h4>
                      <p className="text-sm text-muted-foreground">We'll discuss your project goals, technical requirements, and timeline expectations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Technical Specification</h4>
                      <p className="text-sm text-muted-foreground">I'll create a comprehensive technical specification outlining architecture, timeline, and deliverables.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Development</h4>
                      <p className="text-sm text-muted-foreground">Build your application with regular updates, comprehensive testing, and complete documentation.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-primary">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-1">What's your typical project timeline?</h4>
                    <p className="text-sm text-muted-foreground">Most projects range from 2-6 months, depending on complexity. I provide detailed timelines in the specification phase.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Do you work with existing teams?</h4>
                    <p className="text-sm text-muted-foreground">Absolutely. I often collaborate with internal teams, providing architecture guidance and mentoring on best practices.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">What technologies do you specialize in?</h4>
                    <p className="text-sm text-muted-foreground">I focus on modern web technologies: React, TypeScript, Node.js, and PostgreSQL, always chosen based on project needs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;