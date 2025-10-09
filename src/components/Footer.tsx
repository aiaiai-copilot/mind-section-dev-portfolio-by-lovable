import { Github, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'sonner';

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname.includes('/contact');

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Mind/Section</h3>
            <p className="text-muted-foreground">
              Crafting maintainable web experiences through Spec-Driven Development.
              Reliable code that grows with your business.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-primary mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Application Architecture</li>
              <li>Full-Stack Development</li>
              <li>Technical Documentation</li>
              <li>Code Quality Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-primary mb-4">Connect</h4>
            <div className="flex space-x-4">
              {isContactPage ? (
                <a
                  href="mailto:alexanderlapygin@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                  title="Написать письмо"
                  onClick={() => {
                    const ua = navigator.userAgent || '';
                    const isYandex = /YaBrowser/i.test(ua);
                    const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);
                    if (isYandex && !isMobile && navigator.clipboard) {
                      navigator.clipboard.writeText('alexanderlapygin@gmail.com')
                        .then(() => {
                          toast('Адрес скопирован в буфер обмена');
                        })
                        .catch(() => {});
                    }
                  }}
                >
                  <Mail className="h-5 w-5" />
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Contact"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              )}
              <a
                href="https://github.com/aiaiai-copilot"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              {/* <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Mind/Section. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;