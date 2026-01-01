import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'flip-up' | 'flip-down';

export const getAnimationStyles = (isVisible: boolean, animation: AnimationType, duration: number, delay: number) => {
  const baseStyles = {
    opacity: isVisible ? 1 : 0,
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
  };

  switch (animation) {
    case 'fade-up':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      };
    case 'fade-down':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateY(0)' : 'translateY(-40px)',
      };
    case 'fade-left':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
      };
    case 'fade-right':
      return {
        ...baseStyles,
        transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
      };
    case 'zoom-in':
      return {
        ...baseStyles,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
      };
    case 'zoom-out':
      return {
        ...baseStyles,
        transform: isVisible ? 'scale(1)' : 'scale(1.1)',
      };
    case 'flip-up':
      return {
        ...baseStyles,
        transform: isVisible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(10deg)',
      };
    case 'flip-down':
      return {
        ...baseStyles,
        transform: isVisible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-10deg)',
      };
    default:
      return baseStyles;
  }
};

export const getStaggerStyles = (isVisible: boolean, index: number, staggerDelay: number) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: `all 500ms cubic-bezier(0.4, 0, 0.2, 1) ${index * staggerDelay}ms`,
});
