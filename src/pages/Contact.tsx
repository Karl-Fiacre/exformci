import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import MapboxMap from '@/components/MapboxMap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ first_name: '', last_name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Yopougon – en face du CHU'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info4@gmail.com'],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+225 07 14 61 34 89', '+225 27 33 74 72 17'],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lundi - Vendredi: 8h - 18h', 'Samedi: 8h - 13h'],
    },
  ];

  const faqs = [
    {
      question: 'Quels sont vos délais de réponse ?',
      answer: 'Nous nous engageons à répondre à toute demande dans les 24h ouvrées.'
    },
    {
      question: 'Proposez-vous des formations sur site ?',
      answer: 'Oui, nous pouvons organiser des formations directement dans vos locaux selon vos besoins.'
    },
    {
      question: 'Comment obtenir un devis pour une analyse ?',
      answer: 'Contactez-nous avec les détails de votre besoin, nous vous fournirons un devis gratuit sous 48h.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground">
            Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 gradient-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6 relative">
                  Envoyez-nous un Message
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-foreground mb-2">
                      Prénom *
                    </label>
                    <Input
                      id="first_name"
                      name="first_name"
                      type="text"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Votre prénom"
                    />
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <Input
                      id="last_name"
                      name="last_name"
                      type="text"
                      required
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full"
                      placeholder="Décrivez votre besoin ou votre question..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        Envoyer
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Nos Coordonnées
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <Link to="/training" className="block">
                  <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-accent/5">
                    <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                    S'inscrire à une formation
                  </Button>
                </Link>
                <Link to="/laboratory" className="block">
                  <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-accent/5">
                    <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                    Demander une analyse
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Notre Localisation
            </h2>
            <p className="text-muted-foreground">
              Retrouvez-nous facilement à Yopougon, en face du CHU
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="w-full h-[400px]">
              <MapboxMap
                latitude={5.357130}
                longitude={-4.088477}
                zoom={15}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 gradient-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Questions Fréquentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};