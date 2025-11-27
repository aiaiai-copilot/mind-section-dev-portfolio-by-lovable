import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
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
        title: t('contact.form.validation.required').split(' ')[0],
        description: t('contact.form.validation.required'),
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.validation.invalidEmail'),
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
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
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
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
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
      title: t('contact.getInTouch.email.title'),
      description: t('contact.getInTouch.email.description'),
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

  const projectTypesObj = t('contact.form.projectTypes', { returnObjects: true }) as Record<string, string>;
  const projectTypes = Object.values(projectTypesObj);

  const budgetRangesObj = t('contact.form.budgetRanges', { returnObjects: true }) as Record<string, string>;
  const budgetRanges = Object.values(budgetRangesObj);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-4xl font-bold text-primary mb-6">
            {t('contact.title')}
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create maintainable, well-documented software that grows with your business? 
            Let's discuss your project and create a specification for success.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t('contact.form.title')}</CardTitle>
                <CardDescription>
                  {t('contact.form.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')} *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.placeholders.name')}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.placeholders.email')}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t('contact.form.company')}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.placeholders.company')}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">{t('contact.form.projectType')}</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">{t('contact.form.placeholders.projectType')}</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">{t('contact.form.budgetRange')}</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="">{t('contact.form.placeholders.budgetRange')}</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.projectDetails')} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.placeholders.message')}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    {t('contact.form.submit')}
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
              <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.getInTouch.title')}</h2>
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
                <CardTitle className="text-primary">{t('contact.whatHappensNext.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">{t('contact.whatHappensNext.step1.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.whatHappensNext.step1.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">{t('contact.whatHappensNext.step2.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.whatHappensNext.step2.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">{t('contact.whatHappensNext.step3.title')}</h4>
                      <p className="text-sm text-muted-foreground">{t('contact.whatHappensNext.step3.description')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-primary">{t('contact.faq.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.faq.timeline.question')}</h4>
                    <p className="text-sm text-muted-foreground">{t('contact.faq.timeline.answer')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.faq.teams.question')}</h4>
                    <p className="text-sm text-muted-foreground">{t('contact.faq.teams.answer')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">{t('contact.faq.technologies.question')}</h4>
                    <p className="text-sm text-muted-foreground">{t('contact.faq.technologies.answer')}</p>
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