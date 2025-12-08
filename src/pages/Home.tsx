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
    { icon: Users, value: 500, suffix: '+', label: 'Clients Satisfaits' },
    { icon: Award, value: 15, suffix: '+', label: "Années d'Expérience" },
    { icon: GraduationCap, value: 50, suffix: '+', label: 'Formations Dispensées' },
  ];

  const services = [
    {
      title: "Laboratoire d'analyse physico-chimique",
      description: 'Analyses complètes et certifiées selon les normes internationales ISO et HACCP',
      image: '/images/laboratory-hero.jpg',
      link: '/laboratory',
    },
    {
      title: 'BTP et équipements industriels',
      description: 'Solutions complètes pour vos projets de construction et équipements industriels',
      image: '/images/construction-hero.jpg',
      link: '/services',
    },
    {
      title: 'Formation continue qualifiante',
      description: 'Formations qualifiantes adaptées aux besoins du marché et de votre entreprise',
      image: '/images/training-hero.jpg',
      link: '/training',
    },
  ];

  const whyChooseUs = [
    'Expertise technique certifiée et reconnue',
    'Formations adaptées aux besoins du marché',
    'Laboratoire équipé aux normes internationales',
    'Accompagnement personnalisé de vos projets',
  ];

  const partners = [
    'Cargill', 'ARO', 'Waterleau', 'CODINORM', 'CORAXEL', 
    'Olam Cocoa', 'El Paradis Cosmetic', 'INHP', 'LBTP'
  ];

  const faqs = [
    {
      question: 'Quelles sont vos accréditations et certifications ?',
      answer: 'EXFORM dispose des certifications ISO 9001 et ISO 17025 pour nos laboratoires. Nous sommes également accrédités COFRAC et reconnus par les organismes internationaux de normalisation.',
    },
    {
      question: 'Combien de temps durent vos formations ?',
      answer: 'Nos formations varient de 2 jours à plusieurs semaines selon le programme. Nous proposons également des formations sur mesure adaptées à vos besoins spécifiques.',
    },
    {
      question: 'Proposez-vous un accompagnement post-formation ?',
      answer: 'Oui, nous offrons un suivi personnalisé après chaque formation incluant un accès à nos ressources en ligne et un support technique pendant 3 mois.',
    },
    {
      question: 'Quels types d\'analyses effectuez-vous dans votre laboratoire ?',
      answer: 'Notre laboratoire réalise des analyses physico-chimiques, microbiologiques, environnementales et des matériaux de construction selon les normes internationales.',
    },
    {
      question: 'Comment obtenir un devis pour vos services ?',
      answer: 'Vous pouvez demander un devis gratuit via notre formulaire de contact ou en nous appelant directement. Nous vous répondons sous 24h.',
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
            Expertise Technique & Formation aux Métiers
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Excellence, Innovation et Professionnalisme au service de votre développement
          </p>
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 text-base rounded-full shadow-lg shadow-accent/30 animate-fade-in-up group"
              style={{ animationDelay: '0.4s' }}
            >
              Découvrir nos services
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
            <p className="text-accent font-semibold mb-2">Nos Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Découvrez nos services de pointe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de services techniques et de formations professionnelles
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
                    En savoir plus
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
                Pourquoi Choisir EXFORM ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Avec plus de 15 ans d'expérience, EXFORM s'impose comme le partenaire de référence pour vos besoins en expertise technique et formation professionnelle.
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
                  Contactez-nous
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
              Nos Partenaires de Confiance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions
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
              Questions Fréquemment Posées
            </h2>
            <p className="text-muted-foreground">
              Trouvez rapidement des réponses à vos questions
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
            <p className="text-muted-foreground mb-4">Vous avez d'autres questions ?</p>
            <Link to="/contact">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact
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
            Prêt à Développer Vos Compétences ?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation et expertise technique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-accent"
              >
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/training">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                Voir nos formations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
