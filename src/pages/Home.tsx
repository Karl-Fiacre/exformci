import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '500+', label: t('home.stats.clients') },
    { icon: Award, value: '15+', label: t('home.stats.experience') },
    { icon: Zap, value: '50+', label: t('home.stats.formations') },
  ];

  const services = [
    { title: t('services.laboratory'), description: 'Analyses complètes et certifiées selon les normes internationales ISO et HACCP' },
    { title: t('services.construction'), description: 'Solutions complètes pour vos projets de construction et équipements industriels' },
    { title: t('services.training'), description: 'Formations qualifiantes adaptées aux besoins du marché et de votre entreprise' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted to-background pt-20">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-orange/20 animate-float blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-display text-foreground mb-6">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
            <Link to="/services">
              <Button className="btn-hero">{t('hero.cta')}<ArrowRight className="ml-2 h-5 w-5" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-elevated bg-white/80">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-accent rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">{t('common.services_badge')}</span>
            <h2 className="text-section text-foreground mb-6">{t('services.title')}</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-service">
                <h3 className="text-card-title text-card-foreground mb-4">{service.title}</h3>
                <p className="text-body text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section text-foreground mb-6">{t('home.why.title')}</h2>
              <p className="text-body text-muted-foreground mb-8">{t('home.why.subtitle')}</p>
              <div className="space-y-4">
                {[t('home.why.point1'), t('home.why.point2'), t('home.why.point3'), t('home.why.point4')].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                    <span className="text-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about"><Button className="btn-primary">{t('about.cta')}<ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              </div>
            </div>
            <div className="gradient-accent rounded-2xl p-12 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">EXFORM</h3>
              <p className="text-lg opacity-90">Excellence, Innovation, Professionnalisme</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold">{t('nav.contact')}<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};
