import React from 'react';
import { FlaskConical, Award, Shield, Microscope, ArrowRight, CheckCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
export const Laboratory: React.FC = () => {
  const services = [{
    icon: FlaskConical,
    title: 'Analyses Physico-Chimiques',
    description: 'Analyses complètes des propriétés physiques et chimiques selon les normes internationales',
    features: ['pH et acidité', 'Composition minérale', 'Métaux lourds', 'Contaminants organiques']
  }, {
    icon: Shield,
    title: 'Contrôle Qualité HACCP',
    description: 'Analyses de sécurité alimentaire et respect des normes HACCP pour l\'industrie agroalimentaire',
    features: ['Analyses microbiologiques', 'Contaminants alimentaires', 'Additifs et conservateurs', 'Traçabilité produits']
  }, {
    icon: Award,
    title: 'Certifications ISO',
    description: 'Services de certification et accompagnement pour les normes ISO 9001, 14001 et 22000',
    features: ['Audit de conformité', 'Mise en conformité', 'Formation équipes', 'Suivi certification']
  }, {
    icon: Microscope,
    title: 'Analyses Environnementales',
    description: 'Contrôle de la qualité de l\'eau, de l\'air et des sols pour la protection environnementale',
    features: ['Qualité de l\'eau', 'Pollution atmosphérique', 'Contamination des sols', 'Impact environnemental']
  }];
  const equipments = ['Spectrophotomètre UV-Visible', 'Chromatographe en phase gazeuse', 'pH-mètre de précision', 'Balance analytique', 'Microscope électronique', 'Autoclave de stérilisation'];
  const certifications = [{
    name: 'ISO 17025',
    description: 'Compétence des laboratoires d\'essais et d\'étalonnage'
  }, {
    name: 'ISO 9001',
    description: 'Système de management de la qualité'
  }, {
    name: 'HACCP',
    description: 'Analyse des dangers et maîtrise des points critiques'
  }, {
    name: 'GLP',
    description: 'Bonnes pratiques de laboratoire'
  }];
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 hero-background-laboratory text-foreground relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-primary/25 rounded-full blur-2xl animate-float" style={{
        animationDelay: '1s'
      }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in">
            <span className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              ✨ Laboratoire Certifié
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Laboratoire d'Analyse
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Expertise physico-chimique, ISO, HACCP, analyses complètes de haute précision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg rounded-xl">
                Découvrir nos analyses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg rounded-xl">
                  Contactez-nous
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
                🔬 Laboratoire de Pointe
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-primary">Excellence</span>
                <span className="text-accent"> & Innovation</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Notre laboratoire d'analyse physico-chimique est équipé des technologies les plus avancées
                  pour répondre à tous vos besoins d'analyse et de contrôle qualité.
                </p>
                <p>
                  Avec une équipe de techniciens qualifiés et des équipements de dernière génération,
                  nous garantissons des résultats précis, fiables et dans les délais convenus.
                </p>
                <p>
                  Nos services s'adressent aux industries agroalimentaires, pharmaceutiques,
                  cosmétiques, environnementales et à tous les secteurs nécessitant des analyses de qualité.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img alt="Laboratoire EXFORM" className="w-full h-[500px] object-cover" src="/lovable-uploads/ff209731-f3ad-4d7b-92d4-2cf33cf9f770.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl border border-white/20">
                    <h3 className="text-xl font-bold mb-2">Certification ISO</h3>
                    <p className="text-white/90">Qualité garantie</p>
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
              ⚗️ Nos Analyses
            </span>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Services </span>
              <span className="text-accent">d'Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une gamme complète d'analyses pour garantir la qualité et la conformité de vos produits avec les standards les plus élevés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                  {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-3 bg-accent/5 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Équipements de Pointe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre laboratoire dispose d'équipements modernes et calibrés pour des analyses précises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.map((equipment, index) => <div key={index} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {equipment}
                </h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Certifications & Accréditations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre laboratoire respecte les plus hautes normes de qualité et de sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
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
              </div>)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Processus d'Analyse
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un processus rigoureux pour garantir la qualité de nos analyses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[{
            step: '01',
            title: 'Réception',
            description: 'Réception et enregistrement de l\'échantillon'
          }, {
            step: '02',
            title: 'Préparation',
            description: 'Préparation selon les protocoles standards'
          }, {
            step: '03',
            title: 'Analyse',
            description: 'Analyse avec équipements calibrés'
          }, {
            step: '04',
            title: 'Contrôle',
            description: 'Contrôle qualité et validation'
          }, {
            step: '05',
            title: 'Rapport',
            description: 'Rapport détaillé et certifié'
          }].map((process, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl animate-float" style={{
        animationDelay: '1.5s'
      }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Besoin d'Analyses de Qualité ?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins d'analyse et obtenir un devis personnalisé adapté à vos exigences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg rounded-xl font-semibold">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-xl">
                Tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};