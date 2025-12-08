import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    {
      name: t('nav.services'),
      href: '/services',
      submenu: [
        { name: t('nav.laboratory'), href: '/laboratory' },
        { name: t('nav.training'), href: '/training' }
      ]
    },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-2xl shadow-2xl shadow-accent/20 border-b border-accent/20'
          : 'bg-gradient-to-r from-primary via-primary-dark to-primary backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo-exform.png" 
              alt="EXFORM Logo" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-primary-foreground">
                <span className="text-primary-foreground">EX</span>
                <span className="text-accent">FORM</span>
              </span>
              <span className="text-xs text-primary-foreground/70 flex items-center gap-1">
                <span className="w-4 h-0.5 bg-accent"></span>
                Expertise & Formation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {'submenu' in item ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-500 flex items-center gap-1 ${
                        isActive(item.href) || item.submenu?.some(sub => isActive(sub.href))
                          ? 'text-accent bg-accent/15'
                          : 'text-primary-foreground/90 hover:text-accent hover:bg-accent/10'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 transition-all duration-300 ${
                        isServicesOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-5 py-4 text-sm font-medium transition-all duration-300 ${
                              isActive(subItem.href)
                                ? 'bg-accent/10 text-accent'
                                : 'text-foreground hover:bg-accent/5 hover:text-accent'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-500 ${
                      isActive(item.href)
                        ? 'text-accent bg-accent/15'
                        : 'text-primary-foreground/90 hover:text-accent hover:bg-accent/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary-foreground hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden glass-nav rounded-2xl mb-4 animate-fade-in">
            <nav className="px-4 py-6 space-y-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'gradient-accent text-white'
                        : 'text-foreground hover:bg-accent/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {'submenu' in item && item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                            isActive(subItem.href)
                              ? 'text-accent bg-accent/10'
                              : 'text-muted-foreground hover:text-accent'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
