import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();
  useSEO('notfound');

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/10 animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary/10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-accent/15 animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] md:text-[200px] font-bold leading-none text-gradient-animate opacity-90">
            404
          </span>
        </div>
        
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center animate-pulse-glow">
            <Search className="w-10 h-10 text-accent" />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-section text-foreground mb-4 animate-fade-in-up">
          {t('notfound.title')}
        </h1>
        
        {/* Description */}
        <p className="text-body text-muted-foreground mb-8 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('notfound.description')}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild className="btn-hero gap-2">
            <Link to="/">
              <Home className="w-5 h-5" />
              {t('notfound.home')}
            </Link>
          </Button>
          <Button asChild variant="outline" className="btn-outline gap-2">
            <Link to="/contact">
              <ArrowLeft className="w-5 h-5" />
              {t('notfound.contact')}
            </Link>
          </Button>
        </div>
        
        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-caption mb-4">{t('notfound.suggestions')}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/services" className="text-sm text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">
              {t('nav.services')}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/laboratory" className="text-sm text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">
              {t('nav.laboratory')}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/training" className="text-sm text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">
              {t('nav.training')}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/about" className="text-sm text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">
              {t('nav.about')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
