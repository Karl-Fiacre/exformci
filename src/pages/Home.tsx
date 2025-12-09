import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, Award, GraduationCap, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const Home: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { icon: Users, value: 500, suffix: '+', label: t('home.stats.clients') },
    { icon: Award, value: 15, suffix: '+', label: t('home.stats.experience') },
    { icon: GraduationCap, value: 50, suffix: '+', label: t('home.stats.formations') },
  ];

  const services = [
    {
      title: t('services.laboratory'),
      description: t('services.laboratory.desc'),
      image: '/images/laboratory-hero.jpg',
      link: '/laboratory',
    },
    {
      title: t('services.construction'),
      description: t('services.construction.desc'),
      image: '/images/construction-hero.jpg',
      link: '/services',
    },
    {
      title: t('services.training'),
      description: t('services.training.desc'),
      image: '/images/training-hero.jpg',
      link: '/training',
    },
  ];

  const whyChooseUs = [
    t('home.why.point1'),
    t('home.why.point2'),
    t('home.why.point3'),
    t('home.why.point4'),
  ];

  const partners = [
    'Cargill', 'ARO', 'Waterleau', 'CODINORM', 'CORAXEL', 
    'Olam Cocoa', 'El Paradis Cosmetic', 'INHP', 'LBTP'
  ];

  const faqs = [
    {
      question: t('home.faq.q1'),
      answer: t('home.faq.a1'),
    },
    {
      question: t('home.faq.q2'),
      answer: t('home.faq.a2'),
    },
    {
      question: t('home.faq.q3'),
      answer: t('home.faq.a3'),
    },
    {
      question: t('home.faq.q4'),
      answer: t('home.faq.a4'),
    },
    {
      question: t('home.faq.q5'),
      answer: t('home.faq.a5'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-primary/50" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 text-base rounded-full shadow-lg shadow-accent/30 animate-fade-in-up group"
              style={{ animationDelay: '0.4s' }}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-10 -mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">{t('home.services.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all duration-300"
                  >
                    {t('common.learn_more')}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('home.why.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('home.why.subtitle')}
              </p>
              <div className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
                  {t('about.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/laboratory-hero.jpg" 
                  alt="EXFORM Laboratory"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.partners.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.partners.subtitle')}
            </p>
          </div>

          {/* Infinite Scroll Carousel */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
            
            <div className="flex animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-4 px-8 py-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-lg font-semibold text-foreground whitespace-nowrap">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.faq.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-muted/30 rounded-2xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-accent" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-accent" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">{t('home.faq.more')}</p>
            <Link to="/contact">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t('common.contact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-accent"
              >
                {t('home.cta.contact')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/training">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                {t('home.cta.trainings')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
