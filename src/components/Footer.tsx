import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.laboratory'), href: '/laboratory' },
    { name: t('nav.training'), href: '/training' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const services = [
    t('services.laboratory'),
    t('services.construction'),
    t('services.training'),
    t('services.maintenance'),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-exform.png"
                alt="EXFORM Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              {t('hero.title')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-white/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-sm text-primary-foreground/80 hover:text-accent transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              {t('nav.services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-sm text-primary-foreground/80 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              {t('nav.contact')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">{t('contact.info.address')}</p>
                  <p className="text-sm text-primary-foreground/70">{t('contact.address')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">{t('contact.info.email')}</p>
                  <a href="mailto:info@exform.ci" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    info@exform.ci
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">{t('contact.info.phone')}</p>
                  <a href="tel:+2250714613489" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    +225 07 14 61 34 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} EXFORM. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Mentions légales
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
