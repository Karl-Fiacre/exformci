import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOConfig {
  titleKey: string;
  descriptionKey: string;
  path?: string;
  image?: string;
}

const seoConfigs: Record<string, SEOConfig> = {
  home: {
    titleKey: 'seo.home.title',
    descriptionKey: 'seo.home.description',
    path: '/',
    image: '/images/hero-bg.jpg'
  },
  about: {
    titleKey: 'seo.about.title',
    descriptionKey: 'seo.about.description',
    path: '/about',
    image: '/images/about-hero.jpg'
  },
  services: {
    titleKey: 'seo.services.title',
    descriptionKey: 'seo.services.description',
    path: '/services',
    image: '/images/service-construction.jpg'
  },
  laboratory: {
    titleKey: 'seo.laboratory.title',
    descriptionKey: 'seo.laboratory.description',
    path: '/laboratory',
    image: '/images/laboratory-hero.jpg'
  },
  training: {
    titleKey: 'seo.training.title',
    descriptionKey: 'seo.training.description',
    path: '/training',
    image: '/images/training-hero.jpg'
  },
  contact: {
    titleKey: 'seo.contact.title',
    descriptionKey: 'seo.contact.description',
    path: '/contact',
    image: '/images/contact-hero.jpg'
  },
  register: {
    titleKey: 'seo.register.title',
    descriptionKey: 'seo.register.description',
    path: '/register',
    image: '/images/training-hero.jpg'
  },
  thanks: {
    titleKey: 'seo.thanks.title',
    descriptionKey: 'seo.thanks.description',
    path: '/thanks',
    image: '/images/hero-bg.jpg'
  },
  notfound: {
    titleKey: 'seo.notfound.title',
    descriptionKey: 'seo.notfound.description',
    path: '/404',
    image: '/images/hero-bg.jpg'
  }
};

const BASE_URL = 'https://exform.ci';

export const useSEO = (page: keyof typeof seoConfigs) => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    const config = seoConfigs[page];
    if (!config) return;

    const title = t(config.titleKey);
    const description = t(config.descriptionKey);
    const url = `${BASE_URL}${config.path || '/'}`;
    const imageUrl = `${BASE_URL}${config.image || '/images/hero-bg.jpg'}`;
    const locale = language === 'fr' ? 'fr_CI' : 'en_US';

    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    }

    // Update Open Graph tags
    const updateMetaTag = (selector: string, content: string) => {
      const tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute('content', content);
      }
    };

    // Open Graph
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[property="og:image"]', imageUrl);
    updateMetaTag('meta[property="og:locale"]', locale);
    updateMetaTag('meta[property="og:type"]', 'website');
    updateMetaTag('meta[property="og:site_name"]', 'EXFORM');

    // Twitter Card
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', imageUrl);
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');

    // Update html lang attribute
    document.documentElement.lang = language;

  }, [page, t, language]);
};
