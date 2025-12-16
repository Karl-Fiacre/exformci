import React from 'react';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { useSEO } from '@/hooks/useSEO';

export const About: React.FC = () => {
  const { t } = useLanguage();
  useSEO('about');

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellenceDesc'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc'),
    },
    {
      icon: Users,
      title: t('about.values.partnership'),
      description: t('about.values.partnershipDesc'),
    },
    {
      icon: Heart,
      title: t('about.values.commitment'),
      description: t('about.values.commitmentDesc'),
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-surface">
      {/* Hero Section */}
      <section className="py-20 hero-background-about text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-pattern-grid opacity-15"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm animate-bounce-in shadow-lg">
              {t('about.badge')}
            </span>
            <h1 className="text-display mb-8 drop-shadow-xl bounce-in font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('about.title')}
            </h1>
            <p className="text-xl text-foreground/80 slide-up leading-relaxed max-w-3xl mx-auto font-medium">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  {t('about.story.badge')}
                </span>
                <h2 className="text-section text-foreground">
                  {t('about.story.title')}
                </h2>
              </div>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </div>

            <div className="fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter
                    end={10}
                    suffix="+"
                    className="text-5xl lg:text-6xl font-extrabold text-accent mb-3"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('about.stats.experience')}</div>
                </div>
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter
                    end={500}
                    suffix="+"
                    className="text-5xl lg:text-6xl font-extrabold text-accent mb-3"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('about.stats.trained')}</div>
                </div>
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter
                    end={10}
                    suffix="+"
                    className="text-5xl lg:text-6xl font-extrabold text-accent mb-3"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('about.stats.partners')}</div>
                </div>
                <div className="card-elevated text-center glass-card hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <AnimatedCounter
                    end={10}
                    suffix="+"
                    className="text-5xl lg:text-6xl font-extrabold text-accent mb-3"
                  />
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">{t('about.stats.trainings')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card-elevated fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-card-title text-card-foreground">{t('about.mission.title')}</h3>
              </div>
              <p className="text-body text-muted-foreground">
                {t('about.mission.description')}
              </p>
            </div>

            {/* Vision */}
            <div className="card-elevated fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-card-title text-card-foreground">{t('about.vision.title')}</h3>
              </div>
              <p className="text-body text-muted-foreground">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-card-title text-card-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-section text-foreground mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Kouamé Yao', role: t('about.team.role1'), image: '/images/team-1.jpg' },
              { name: 'Aminata Koné', role: t('about.team.role2'), image: '/images/team-3.jpg' },
              { name: 'Jean-Baptiste Aka', role: t('about.team.role3'), image: '/images/team-2.jpg' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center fade-in hover:scale-105 transition-all duration-300 group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent/20 group-hover:border-accent transition-colors duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <h3 className="text-card-title text-card-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-body text-accent font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md text-center fade-in">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-card-title text-card-foreground mb-2">
                {t('about.team.multidisciplinary')}
              </h3>
            </div>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              {t('about.team.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-overlay text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in relative z-10">
          <div className="mb-8">
            <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
              <Users className="h-8 w-8 text-accent animate-pulse" />
            </div>
            <h2 className="text-section mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t('about.cta.subtitle')}
            </p>
          </div>
          <Link to="/contact">
            <Button className="btn-hero bg-accent text-white hover:bg-accent-light transform hover:scale-105 transition-all duration-300">
              {t('about.cta.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
