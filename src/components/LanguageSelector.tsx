import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-primary-foreground/70" />
      <div className="flex rounded-lg overflow-hidden border border-white/20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 text-xs rounded-none transition-all duration-300 ${
            language === 'fr'
              ? 'bg-accent text-white'
              : 'text-primary-foreground/70 hover:text-white hover:bg-white/10'
          }`}
        >
          FR
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-xs rounded-none transition-all duration-300 ${
            language === 'en'
              ? 'bg-accent text-white'
              : 'text-primary-foreground/70 hover:text-white hover:bg-white/10'
          }`}
        >
          EN
        </Button>
      </div>
    </div>
  );
};
