import React from 'react';
import { FlaskConical, Award, Shield, Microscope, ArrowRight, CheckCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';

export const Laboratory: React.FC = () => {
  const { t } = useLanguage();
  useSEO('laboratory');

  const services = [
    {
      icon: FlaskConical,
      title: t('laboratory.services.physicochemical.title'),
      description: t('laboratory.services.physicochemical.description'),
      features: [
        t('laboratory.services.physicochemical.feature1'),
        t('laboratory.services.physicochemical.feature2'),
        t('laboratory.services.physicochemical.feature3'),
        t('laboratory.services.physicochemical.feature4'),
      ],
    },
    {
      icon: Shield,
      title: t('laboratory.services.haccp.title'),
      description: t('laboratory.services.haccp.description'),
      features: [
        t('laboratory.services.haccp.feature1'),
        t('laboratory.services.haccp.feature2'),
        t('laboratory.services.haccp.feature3'),
        t('laboratory.services.haccp.feature4'),
      ],
    },
    {
      icon: Award,
      title: t('laboratory.services.iso.title'),
      description: t('laboratory.services.iso.description'),
      features: [
        t('laboratory.services.iso.feature1'),
        t('laboratory.services.iso.feature2'),
        t('laboratory.services.iso.feature3'),
        t('laboratory.services.iso.feature4'),
      ],
    },
    {
      icon: Microscope,
      title: t('laboratory.services.environmental.title'),
      description: t('laboratory.services.environmental.description'),
      features: [
        t('laboratory.services.environmental.feature1'),
        t('laboratory.services.environmental.feature2'),
        t('laboratory.services.environmental.feature3'),
        t('laboratory.services.environmental.feature4'),
      ],
    },
  ];

  const equipments = [
    t('laboratory.equipment.spectrophotometer'),
    t('laboratory.equipment.chromatograph'),
    t('laboratory.equipment.phMeter'),
    t('laboratory.equipment.balance'),
    t('laboratory.equipment.microscope'),
    t('laboratory.equipment.autoclave'),
  ];

  const certifications = [
    {
      name: 'ISO 17025',
      description: t('laboratory.certifications.iso17025'),
    },
    {
      name: 'ISO 9001',
      description: t('laboratory.certifications.iso9001'),
    },
    {
      name: 'HACCP',
      description: t('laboratory.certifications.haccp'),
    },
    {
      name: 'GLP',
      description: t('laboratory.certifications.glp'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 hero-background-laboratory text-foreground relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-primary/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              ✨ {t('laboratory.badge')}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              {t('laboratory.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t('laboratory.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg rounded-xl">
                {t('laboratory.discoverAnalysis')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg rounded-xl">
                  {t('common.contactUs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Overview */}
      <section className="py-24 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                🔬 {t('laboratory.overview.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-primary">{t('laboratory.overview.excellence')}</span>
                <span className="text-accent"> & {t('laboratory.overview.innovation')}</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>{t('laboratory.overview.paragraph1')}</p>
                <p>{t('laboratory.overview.paragraph2')}</p>
                <p>{t('laboratory.overview.paragraph3')}</p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl">
                    {t('laboratory.discoverServices')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img alt={t('laboratory.title')} className="w-full h-[500px] object-cover" src="/lovable-uploads/ff209731-f3ad-4d7b-92d4-2cf33cf9f770.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">{t('laboratory.isoCertification')}</h3>
                    <p className="text-white/90">{t('laboratory.qualityGuaranteed')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              ⚗️ {t('laboratory.analysisTitle')}
            </span>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">{t('laboratory.servicesExcellence')} </span>
              <span className="text-accent">{t('laboratory.excellence')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('laboratory.servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mr-4">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 bg-accent/5 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('laboratory.equipmentTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('laboratory.equipmentSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.map((equipment, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {equipment}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('laboratory.certificationsTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('laboratory.certificationsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {cert.name}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('laboratory.processTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('laboratory.processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: t('laboratory.process.reception'), description: t('laboratory.process.receptionDesc') },
              { step: '02', title: t('laboratory.process.preparation'), description: t('laboratory.process.preparationDesc') },
              { step: '03', title: t('laboratory.process.analysis'), description: t('laboratory.process.analysisDesc') },
              { step: '04', title: t('laboratory.process.control'), description: t('laboratory.process.controlDesc') },
              { step: '05', title: t('laboratory.process.report'), description: t('laboratory.process.reportDesc') },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('laboratory.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            {t('laboratory.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg rounded-xl font-semibold">
                {t('laboratory.cta.quote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-xl">
                {t('laboratory.cta.allServices')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
