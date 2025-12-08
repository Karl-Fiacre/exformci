import React from 'react';
import { FlaskConical, HardHat, GraduationCap, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Services: React.FC = () => {
  const mainServices = [
    {
      title: "Laboratoire d'analyse physico-chimique",
      description: "Analyses physico-chimiques complètes selon les normes ISO et HACCP. Notre laboratoire moderne offre des services de contrôle qualité et de certification pour tous secteurs d'activité.",
      image: '/images/laboratory-hero.jpg',
      link: '/laboratory',
      icon: FlaskConical,
      features: [
        'Analyses conformes ISO 9001',
        'Certifications HACCP',
        'Contrôle qualité alimentaire',
        'Analyses environnementales',
      ],
    },
    {
      title: 'BTP et équipements industriels',
      description: "Solutions complètes pour vos projets BTP et équipements industriels. De la conception à la réalisation, nous vous accompagnons avec expertise et professionnalisme.",
      image: '/images/construction-hero.jpg',
      link: '/services',
      icon: HardHat,
      features: [
        'Études et conception',
        'Réalisation de projets BTP',
        "Installation d'équipements",
        'Maintenance industrielle',
      ],
    },
    {
      title: 'Formation continue qualifiante',
      description: "Formations continues qualifiantes adaptées aux besoins du marché. Développez les compétences de vos équipes avec nos programmes certifiés et personnalisés.",
      image: '/images/training-hero.jpg',
      link: '/training',
      icon: GraduationCap,
      features: [
        'Formations certifiantes',
        'Programmes sur mesure',
        'Formateurs experts',
        'Suivi post-formation',
      ],
    },
    {
      title: 'Pluri-mécanique et maintenance industrielle',
      description: "Services de maintenance préventive et corrective pour vos équipements industriels. Optimisez la performance et la durée de vie de vos installations.",
      image: '/images/construction-hero.jpg',
      link: '/services',
      icon: Wrench,
      features: [
        'Maintenance préventive',
        "Dépannage d'urgence",
        'Optimisation performance',
        'Contrats de maintenance',
      ],
    },
  ];

  const additionalServices = [
    'Études et projets industriels (PGE-A et EIES)',
    'Conseil en organisation industrielle',
    'Audit technique et énergétique',
    'Accompagnement certification qualité',
    'Formation en sécurité industrielle',
    'Support technique spécialisé',
  ];

  const burnerImages = [
    {
      src: '/images/burner-maintenance-1.jpg',
      alt: 'Installation et maintenance de brûleurs WEISHAUPT',
    },
    {
      src: '/images/burner-maintenance-2.jpg',
      alt: 'Contrôle annuel des brûleurs SAAKE',
    },
    {
      src: '/images/burner-maintenance-3.jpg',
      alt: 'Maintenance des brûleurs industriels',
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
              Services Techniques Avancés
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">
              Découvrez nos services de pointe
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Des solutions techniques innovantes et des formations de qualité pour accompagner votre développement
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
                      En savoir plus
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
              Maintenance des Brûleurs Industriels
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Installation, contrôle annuel, maintenance des brûleurs gaz ou fuel des marques WEISHAUPT et SAAKE installés sur des chaudières ou des torréfacteurs
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
                Installation
              </h3>
              <p className="text-muted-foreground text-sm">
                Installation professionnelle de brûleurs industriels
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Contrôle Annuel
              </h3>
              <p className="text-muted-foreground text-sm">
                Contrôles périodiques et certifications
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Maintenance
              </h3>
              <p className="text-muted-foreground text-sm">
                Maintenance préventive et corrective
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
              Services Complémentaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gamme étendue de services pour répondre à tous vos besoins techniques et industriels
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
              Notre Processus
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour garantir la qualité et la satisfaction de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse des Besoins', description: 'Évaluation complète de vos besoins et objectifs' },
              { step: '02', title: 'Proposition Solution', description: "Développement d'une solution personnalisée" },
              { step: '03', title: 'Mise en Œuvre', description: 'Réalisation avec suivi qualité rigoureux' },
              { step: '04', title: 'Suivi & Support', description: 'Accompagnement continu et support technique' },
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
            Prêt à Commencer Votre Projet ?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contactez nos experts pour une consultation personnalisée et un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3">
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/laboratory">
              <Button className="bg-accent text-white hover:bg-accent/90 px-8 py-3">
                Laboratoire
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
