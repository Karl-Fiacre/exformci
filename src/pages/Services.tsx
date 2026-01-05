import React from 'react';
import { FlaskConical, HardHat, GraduationCap, Wrench, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { OptimizedImage } from '@/components/OptimizedImage';
import { ScrollReveal, StaggerContainer } from '@/components/ScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Services: React.FC = () => {
  const { t } = useLanguage();
  useSEO('services');

  const mainServices = [
    {
      title: t('services.laboratory.title'),
      description: t('services.laboratory.description'),
      image: '/images/laboratory-hero.jpg',
      link: '/laboratory',
      icon: FlaskConical,
      features: [
        t('services.laboratory.feature1'),
        t('services.laboratory.feature2'),
        t('services.laboratory.feature3'),
        t('services.laboratory.feature4'),
      ],
    },
    {
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      image: '/images/construction-hero.jpg',
      link: '/services',
      icon: HardHat,
      features: [
        t('services.construction.feature1'),
        t('services.construction.feature2'),
        t('services.construction.feature3'),
        t('services.construction.feature4'),
      ],
    },
    {
      title: t('services.training.title'),
      description: t('services.training.description'),
      image: '/images/training-hero.jpg',
      link: '/training',
      icon: GraduationCap,
      features: [
        t('services.training.feature1'),
        t('services.training.feature2'),
        t('services.training.feature3'),
        t('services.training.feature4'),
      ],
    },
    {
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      image: '/images/construction-hero.jpg',
      link: '/services',
      icon: Wrench,
      features: [
        t('services.maintenance.feature1'),
        t('services.maintenance.feature2'),
        t('services.maintenance.feature3'),
        t('services.maintenance.feature4'),
      ],
    },
  ];

  const additionalServices = [
    t('services.additional.studies'),
    t('services.additional.consulting'),
    t('services.additional.audit'),
    t('services.additional.certification'),
    t('services.additional.safety'),
    t('services.additional.support'),
  ];

  const burnerImages = [
    {
      src: '/images/burner-maintenance-1.jpg',
      alt: t('services.burner.image1'),
    },
    {
      src: '/images/burner-maintenance-2.jpg',
      alt: t('services.burner.image2'),
    },
    {
      src: '/images/burner-maintenance-3.jpg',
      alt: t('services.burner.image3'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float-subtle" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-subtle" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-down">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 animate-pulse-glow">
                {t('services.hero.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-blur-in">
                {t('services.hero.title')}
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <ScrollReveal 
                key={index}
                animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={index * 100}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative aspect-video rounded-2xl overflow-hidden card-3d">
                        <OptimizedImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <service.icon className="h-12 w-12 text-white icon-glow" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground group/item">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={service.link}>
                      <Button className="group btn-magnetic mt-4">
                        {t('common.learnMore')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Burner Maintenance Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                  <Wrench className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    {t('services.burner.badge')}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {t('services.burner.title')}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t('services.burner.description')}
                </p>

                <StaggerContainer staggerDelay={100} className="space-y-3">
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {t('services.burner.installation')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {t('services.burner.control')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {t('services.burner.maintenance')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {t('services.burner.brands')}
                    </span>
                  </div>
                </StaggerContainer>

                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white btn-magnetic mt-4">
                    {t('services.burner.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <Carousel className="w-full">
                <CarouselContent>
                  {burnerImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-2xl overflow-hidden card-3d">
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('services.additional.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('services.additional.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 card-3d group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors group-hover:scale-110">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">{service}</span>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        
        {/* Animated decorative elements */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float-subtle" />
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-subtle" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('services.process.title')}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {t('services.process.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={150} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: t('services.process.step1'), desc: t('services.process.step1Desc') },
              { step: '02', title: t('services.process.step2'), desc: t('services.process.step2Desc') },
              { step: '03', title: t('services.process.step3'), desc: t('services.process.step3Desc') },
              { step: '04', title: t('services.process.step4'), desc: t('services.process.step4Desc') },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-white/20 -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-subtle" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-subtle" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="zoom-in">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('services.cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('services.cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-magnetic group">
                    <Phone className="mr-2 h-5 w-5" />
                    {t('common.contact')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/training">
                  <Button size="lg" variant="outline" className="btn-magnetic">
                    {t('nav.training')}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
