import React from 'react';

export const PartnerCarousel: React.FC = () => {
  const partners = [
    { name: 'Cargill', color: 'from-green-500 to-green-600' },
    { name: 'ARO', color: 'from-blue-500 to-blue-600' },
    { name: 'Waterleau', color: 'from-cyan-500 to-cyan-600' },
    { name: 'CODINORM', color: 'from-indigo-500 to-indigo-600' },
    { name: 'CORAXEL', color: 'from-purple-500 to-purple-600' },
    { name: 'Olam Cocoa', color: 'from-amber-500 to-amber-600' },
    { name: 'El Paradis', color: 'from-pink-500 to-pink-600' },
    { name: 'INHP', color: 'from-teal-500 to-teal-600' },
    { name: 'LBTP', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Partenaires
          </span>
          <h2 className="text-section text-foreground mb-4 text-gradient-animate">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions
          </p>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-scroll">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 lg:mx-6"
              >
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-24 w-52 flex items-center justify-center border border-border/50 hover-lift overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 relative z-10">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 lg:mx-6"
              >
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 h-24 w-52 flex items-center justify-center border border-border/50 hover-lift overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 relative z-10">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
