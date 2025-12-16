import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOConfig {
  titleKey: string;
  descriptionKey: string;
  path?: string;
}

const seoConfigs: Record<string, SEOConfig> = {
  home: {
    titleKey: 'seo.home.title',
    descriptionKey: 'seo.home.description',
    path: '/'
  },
  about: {
    titleKey: 'seo.about.title',
    descriptionKey: 'seo.about.description',
    path: '/about'
  },
  services: {
    titleKey: 'seo.services.title',
    descriptionKey: 'seo.services.description',
    path: '/services'
  },
  laboratory: {
    titleKey: 'seo.laboratory.title',
    descriptionKey: 'seo.laboratory.description',
    path: '/laboratory'
  },
  training: {
    titleKey: 'seo.training.title',
    descriptionKey: 'seo.training.description',
    path: '/training'
  },
  contact: {
    titleKey: 'seo.contact.title',
    descriptionKey: 'seo.contact.description',
    path: '/contact'
  },
  register: {
    titleKey: 'seo.register.title',
    descriptionKey: 'seo.register.description',
    path: '/register'
  },
  thanks: {
    titleKey: 'seo.thanks.title',
    descriptionKey: 'seo.thanks.description',
    path: '/thanks'
  }
};

export const useSEO = (page: keyof typeof seoConfigs) => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    const config = seoConfigs[page];
    if (!config) return;

    // Update document title
    document.title = t(config.titleKey);

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t(config.descriptionKey));
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t(config.titleKey));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t(config.descriptionKey));
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t(config.titleKey));
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t(config.descriptionKey));
    }

    // Update html lang attribute
    document.documentElement.lang = language;

  }, [page, t, language]);
};
