import { Github, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation();

  const services = t('footer.services.list', { returnObjects: true }) as string[];

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Alexander Lapygin</h3>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-primary mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-primary mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <a
                href="https://github.com/aiaiai-copilot"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/alexanderlapygin"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
