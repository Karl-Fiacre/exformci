import React from 'react';
import { MapPin, Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">EXFORM</h3>
            <p className="text-sm text-primary-foreground/80">{t('hero.title')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-sm text-primary-foreground/80 hover:text-accent">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">{t('services.laboratory')}</li>
              <li className="text-sm text-primary-foreground/80">{t('services.training')}</li>
              <li className="text-sm text-primary-foreground/80">{t('services.construction')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('nav.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3"><MapPin className="h-5 w-5 text-accent" /><span className="text-sm text-primary-foreground/80">{t('contact.address')}</span></div>
              <div className="flex items-center space-x-3"><Mail className="h-5 w-5 text-accent" /><span className="text-sm text-primary-foreground/80">info@exform.ci</span></div>
              <div className="flex items-center space-x-3"><Phone className="h-5 w-5 text-accent" /><span className="text-sm text-primary-foreground/80">+225 07 14 61 34 89</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© {new Date().getFullYear()} EXFORM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
