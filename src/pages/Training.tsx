import React from 'react';
import { GraduationCap, Users, Clock, Award, ArrowRight, CheckCircle, Activity, Droplets, Snowflake, Filter, Gauge, Briefcase, HelpCircle, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '@/components/OptimizedImage';
import { useSEO } from '@/hooks/useSEO';

export const Training: React.FC = () => {
  const { t } = useLanguage();
  useSEO('training');

  const trainings: { title: string; duration: string; level: string; description: string; icon: LucideIcon; color: string; features: string[] }[] = [
    {
      title: t('training.vibration'),
      duration: t('training.duration.3days'),
      level: t('training.level.intermediate'),
      description: t('training.vibrationDesc'),
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      features: [
        t('training.vibrationFeature1'),
        t('training.vibrationFeature2'),
        t('training.vibrationFeature3'),
        t('training.vibrationFeature4'),
      ],
    },
    {
      title: t('training.hydraulics'),
      duration: t('training.duration.5days'),
      level: t('training.level.all'),
      description: t('training.hydraulicsDesc'),
      icon: Droplets,
      color: 'from-sky-500 to-blue-600',
      features: [
        t('training.hydraulicsFeature1'),
        t('training.hydraulicsFeature2'),
        t('training.hydraulicsFeature3'),
        t('training.hydraulicsFeature4'),
      ],
    },
    {
      title: t('training.ammonia'),
      duration: t('training.duration.2days'),
      level: t('training.level.specialized'),
      description: t('training.ammoniaDesc'),
      icon: Snowflake,
      color: 'from-teal-400 to-emerald-500',
      features: [
        t('training.ammoniaFeature1'),
        t('training.ammoniaFeature2'),
        t('training.ammoniaFeature3'),
        t('training.ammoniaFeature4'),
      ],
    },
    {
      title: t('training.filtration'),
      duration: t('training.duration.3days'),
      level: t('training.level.technical'),
      description: t('training.filtrationDesc'),
      icon: Filter,
      color: 'from-purple-500 to-indigo-600',
      features: [
        t('training.filtrationFeature1'),
        t('training.filtrationFeature2'),
        t('training.filtrationFeature3'),
        t('training.filtrationFeature4'),
      ],
    },
    {
      title: t('training.pressure'),
      duration: t('training.duration.4days'),
      level: t('training.level.advanced'),
      description: t('training.pressureDesc'),
      icon: Gauge,
      color: 'from-orange-500 to-red-500',
      features: [
        t('training.pressureFeature1'),
        t('training.pressureFeature2'),
        t('training.pressureFeature3'),
        t('training.pressureFeature4'),
      ],
    },
    {
      title: t('training.management'),
      duration: t('training.duration.2days'),
      level: t('training.level.management'),
      description: t('training.managementDesc'),
      icon: Briefcase,
      color: 'from-amber-500 to-yellow-500',
      features: [
        t('training.managementFeature1'),
        t('training.managementFeature2'),
        t('training.managementFeature3'),
        t('training.managementFeature4'),
      ],
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: t('training.advantages.experts'),
      description: t('training.advantages.expertsDesc'),
    },
    {
      icon: Award,
      title: t('training.advantages.certifications'),
      description: t('training.advantages.certificationsDesc'),
    },
    {
      icon: Clock,
      title: t('training.advantages.flexibility'),
      description: t('training.advantages.flexibilityDesc'),
    },
    {
      icon: CheckCircle,
      title: t('training.advantages.followup'),
      description: t('training.advantages.followupDesc'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-background-training text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-accent/25 rounded-full blur-md animate-float" style={{ animationDelay: '2.5s' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-bounce-in shadow-lg">
              {t('training.badge')}
            </span>
            <h1 className="text-display mb-8 drop-shadow-xl bounce-in font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('training.title')}
            </h1>
            <p className="text-xl text-foreground/80 slide-up leading-relaxed max-w-3xl mx-auto font-medium">
              {t('training.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-section text-foreground mb-6">
                {t('training.overview.title')}
              </h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>{t('training.overview.paragraph1')}</p>
                <p>{t('training.overview.paragraph2')}</p>
                <p>{t('training.overview.paragraph3')}</p>
              </div>
            </div>

            <div className="fade-in">
              <div className="relative">
                <OptimizedImage alt={t('training.title')} className="w-full h-96 object-cover rounded-2xl shadow-lg" src="/lovable-uploads/6152f8a4-f940-40c3-9c06-1dfa59cd9ff1.jpg" />
                <div className="absolute inset-0 gradient-hero opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              {t('training.programs.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('training.programs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="relative bg-card p-8 rounded-3xl border-2 border-primary/30 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 transform hover:scale-105 transition-all duration-500 group overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${training.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <training.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-md">
                    {training.level}
                  </span>
                  <span className="text-sm text-foreground font-semibold bg-accent/20 px-3 py-1 rounded-full border border-accent/30">
                    {training.duration}
                  </span>
                </div>

                <h3 className="text-card-title text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300 font-bold text-xl">
                  {training.title}
                </h3>

                <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                  {training.description}
                </p>

                <div className="space-y-3 mb-8">
                  {training.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-accent/5 transition-all duration-300 animate-in slide-in-from-left-2"
                      style={{ animationDelay: `${(index * 4 + featureIndex) * 0.1}s` }}
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 animate-pulse" />
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/register">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-xl hover:shadow-accent/40 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1">
                    {t('training.register')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              {t('training.whyChoose.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('training.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <advantage.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-card-title text-card-foreground mb-4">
                  {advantage.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              {t('training.process.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('training.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: t('training.process.step1'), description: t('training.process.step1Desc') },
              { step: '02', title: t('training.process.step2'), description: t('training.process.step2Desc') },
              { step: '03', title: t('training.process.step3'), description: t('training.process.step3Desc') },
              { step: '04', title: t('training.process.step4'), description: t('training.process.step4Desc') },
            ].map((process, index) => (
              <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-card-title text-card-foreground mb-4">
                  {process.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">FAQ</span>
            </div>
            <h2 className="text-section text-foreground mb-6">
              {t('training.faq.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('training.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: t('training.faq.q1'), a: t('training.faq.a1') },
              { q: t('training.faq.q2'), a: t('training.faq.a2') },
              { q: t('training.faq.q3'), a: t('training.faq.a3') },
              { q: t('training.faq.q4'), a: t('training.faq.a4') },
              { q: t('training.faq.q5'), a: t('training.faq.a5') },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-background border-2 border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-foreground font-semibold text-lg pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-section mb-6">
            {t('training.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            {t('training.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="btn-hero bg-white text-primary hover:bg-white/90">
                {t('training.register')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                {t('training.cta.info')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
