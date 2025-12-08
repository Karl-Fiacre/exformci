import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Zap, FlaskConical, GraduationCap, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { PartnerCarousel } from '@/components/PartnerCarousel';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '500+', label: t('home.stats.clients') },
    { icon: Award, value: '15+', label: t('home.stats.experience') },
    { icon: Zap, value: '50+', label: t('home.stats.formations') },
  ];

  const services = [
    { 
      icon: FlaskConical, 
      title: t('services.laboratory'), 
      description: 'Analyses complètes et certifiées selon les normes internationales ISO et HACCP',
      link: '/laboratory',
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      icon: HardHat, 
      title: t('services.construction'), 
      description: 'Solutions complètes pour vos projets de construction et équipements industriels',
      link: '/services',
      color: 'from-orange-500 to-red-600'
    },
    { 
      icon: GraduationCap, 
      title: t('services.training'), 
      description: 'Formations qualifiantes adaptées aux besoins du marché et de votre entreprise',
      link: '/training',
      color: 'from-green-500 to-teal-600'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-dark/80" />
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-accent/30 animate-float blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/10 animate-float blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-accent/20 animate-float blur-lg" style={{animationDelay: '2s'}}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20 animate-bounce-gentle">
              Excellence • Innovation • Professionnalisme
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">{t('hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button className="bg-accent hover:bg-accent-light text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-2xl hover:scale-105 transition-all duration-300 hover-glow">
                  {t('hero.cta')}<ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-xl font-semibold backdrop-blur-sm transition-all duration-300">
                  {t('nav.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center card-elevated bg-white hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 gradient-accent rounded-2xl mb-6 shadow-lg shadow-accent/30 animate-pulse-glow">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gradient-animate mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 gradient-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">{t('common.services_badge')}</span>
            <h2 className="text-section text-foreground mb-6 text-gradient-animate">{t('services.title')}</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <div 
                  className="group card-service hover-lift relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-card-title text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-body text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnerCarousel />

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Pourquoi nous choisir
              </span>
              <h2 className="text-section text-foreground mb-6">{t('home.why.title')}</h2>
              <p className="text-body text-muted-foreground mb-8">{t('home.why.subtitle')}</p>
              <div className="space-y-5">
                {[t('home.why.point1'), t('home.why.point2'), t('home.why.point3'), t('home.why.point4')].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-accent/5 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-body text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about">
                  <Button className="btn-primary hover-lift">
                    {t('about.cta')}<ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative group">
                <div className="absolute inset-0 gradient-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative gradient-accent rounded-3xl p-12 text-center text-white overflow-hidden hover-lift">
                  <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
                  <img 
                    src="/images/logo-exform.png" 
                    alt="EXFORM Logo" 
                    className="h-24 mx-auto mb-6 drop-shadow-2xl"
                  />
                  <h3 className="text-3xl font-bold mb-4 relative z-10">EXFORM</h3>
                  <p className="text-xl opacity-90 relative z-10">Excellence, Innovation, Professionnalisme</p>
                  <div className="mt-8 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm opacity-80">Années</div>
                    </div>
                    <div className="w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-80">Clients</div>
                    </div>
                    <div className="w-px bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-80">Formations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">{t('home.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-10 py-5 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                {t('nav.contact')}<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300">
                Nos Formations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
