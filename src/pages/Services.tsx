import React from 'react';
import { FlaskConical, HardHat, GraduationCap, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Services: React.FC = () => {
  const { t } = useLanguage();

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              {t('services.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      <span className="text-primary">
                        {service.title.split(' ')[0]}
                      </span>{' '}
                      <span className="text-accent">
                        {service.title.split(' ').slice(1).join(' ')}
                      </span>
                    </h2>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={service.link}>
                    <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg">
                      {t('common.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burner Maintenance Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('services.burner.title')}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('services.burner.description')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Carousel className="w-full">
              <CarouselContent>
                {burnerImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('services.burner.installation')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.burner.installationDesc')}
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('services.burner.control')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.burner.controlDesc')}
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('services.burner.maintenanceTitle')}
              </h3>
              <p className="text-muted-foreground text-sm">
                {t('services.burner.maintenanceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('services.additional.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-base font-medium text-foreground">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: t('services.process.step1'), description: t('services.process.step1Desc') },
              { step: '02', title: t('services.process.step2'), description: t('services.process.step2Desc') },
              { step: '03', title: t('services.process.step3'), description: t('services.process.step3Desc') },
              { step: '04', title: t('services.process.step4'), description: t('services.process.step4Desc') },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('services.cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3">
                {t('common.contact')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/laboratory">
              <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-3">
                {t('nav.laboratory')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
