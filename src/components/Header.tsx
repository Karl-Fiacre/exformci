import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-primary/95 backdrop-blur-2xl shadow-2xl' : 'bg-gradient-to-r from-primary via-primary-dark to-primary backdrop-blur-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src="/images/logo-exform.png" 
              alt="EXFORM Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-500 ${isActive(item.href) ? 'text-accent bg-accent/15' : 'text-primary-foreground/90 hover:text-accent hover:bg-accent/10'}`}>
                {item.name}
              </Link>
            ))}
          </nav>
          <Button variant="ghost" size="sm" className="lg:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden glass-nav">
            <nav className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className={`block px-4 py-3 rounded-xl text-sm font-medium ${isActive(item.href) ? 'gradient-accent text-white' : 'text-foreground hover:bg-accent/5'}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
