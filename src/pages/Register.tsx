import React, { useState } from 'react';
import { GraduationCap, User, Mail, Phone, Building, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

// Validation schemas
const step1Schema = z.object({
  first_name: z.string().trim().min(2, "Le prénom doit contenir au moins 2 caractères").max(100, "Le prénom ne peut pas dépasser 100 caractères"),
  last_name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().trim().email("Adresse email invalide").max(255, "L'email ne peut pas dépasser 255 caractères"),
  phone: z.string().trim().min(8, "Numéro de téléphone invalide").max(20, "Numéro de téléphone trop long").regex(/^[+]?[\d\s-]+$/, "Format de téléphone invalide"),
});

const step2Schema = z.object({
  company: z.string().trim().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères").max(200, "Le nom de l'entreprise ne peut pas dépasser 200 caractères"),
  position: z.string().trim().min(2, "Le poste doit contenir au moins 2 caractères").max(100, "Le poste ne peut pas dépasser 100 caractères"),
  experience_level: z.string().optional(),
});

const step3Schema = z.object({
  preferred_training: z.string().min(1, "Veuillez sélectionner une formation"),
  start_date: z.string().min(1, "Veuillez sélectionner une date"),
  motivation: z.string().max(2000, "La motivation ne peut pas dépasser 2000 caractères").optional(),
});

type FormErrors = {
  [key: string]: string;
};

export const Register: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience_level: '',
    preferred_training: '',
    start_date: '',
    motivation: '',
  });

  const trainings = [
    { value: 'vibration', label: t('training.vibration') },
    { value: 'hydraulics', label: t('training.hydraulics') },
    { value: 'ammonia', label: t('training.ammonia') },
    { value: 'filtration', label: t('training.filtration') },
    { value: 'pressure', label: t('training.pressure') },
    { value: 'management', label: t('training.management') },
  ];

  const validateStep = (step: number): boolean => {
    let result;
    switch (step) {
      case 1:
        result = step1Schema.safeParse({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
        });
        break;
      case 2:
        result = step2Schema.safeParse({
          company: formData.company,
          position: formData.position,
          experience_level: formData.experience_level,
        });
        break;
      case 3:
        result = step3Schema.safeParse({
          preferred_training: formData.preferred_training,
          start_date: formData.start_date,
          motivation: formData.motivation,
        });
        break;
      default:
        return false;
    }

    if (!result.success) {
      const newErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const validateField = (name: string, value: string) => {
    let fieldSchema;
    switch (name) {
      case 'first_name':
      case 'last_name':
        fieldSchema = z.string().trim().min(2, `Le ${name === 'first_name' ? 'prénom' : 'nom'} doit contenir au moins 2 caractères`).max(100);
        break;
      case 'email':
        fieldSchema = z.string().trim().email("Adresse email invalide").max(255);
        break;
      case 'phone':
        fieldSchema = z.string().trim().min(8, "Numéro invalide").regex(/^[+]?[\d\s-]+$/, "Format invalide");
        break;
      case 'company':
        fieldSchema = z.string().trim().min(2, "Min. 2 caractères").max(200);
        break;
      case 'position':
        fieldSchema = z.string().trim().min(2, "Min. 2 caractères").max(100);
        break;
      default:
        return;
    }

    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      setErrors(prev => ({ ...prev, [name]: result.error.errors[0].message }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('register.toast.success'),
        description: t('register.toast.description'),
      });
      navigate('/thanks');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (touched.has(name)) {
      validateField(name, value);
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => new Set(prev).add(name));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 3) {
      setCurrentStep(currentStep + 1);
      setTouched(new Set());
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
      setTouched(new Set());
    }
  };

  const getInputClassName = (fieldName: string) => {
    const hasError = errors[fieldName] && touched.has(fieldName);
    return `transition-all duration-300 ${hasError ? 'border-destructive focus:ring-destructive' : 'focus:ring-accent'}`;
  };

  return (
    <div className="min-h-screen pt-20 py-20 gradient-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 gradient-accent rounded-2xl mb-6 shadow-lg shadow-accent/30 animate-pulse-glow">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-display text-foreground mb-4 text-gradient-animate">
            {t('register.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('register.subtitle')}
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${
                    step < currentStep
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : step === currentStep
                      ? 'bg-accent text-white shadow-lg shadow-accent/30 animate-pulse-glow'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-6 w-6" /> : step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 md:w-20 h-1 mx-2 md:mx-4 rounded-full transition-all duration-500 ${
                      step < currentStep ? 'bg-green-500' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2 md:space-x-8">
            <span className={`text-xs md:text-sm text-center ${currentStep >= 1 ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
              {t('register.step1.label')}
            </span>
            <span className={`text-xs md:text-sm text-center ${currentStep >= 2 ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
              {t('register.step2.label')}
            </span>
            <span className={`text-xs md:text-sm text-center ${currentStep >= 3 ? 'text-accent font-medium' : 'text-muted-foreground'}`}>
              {t('register.step3.label')}
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="card-elevated max-w-2xl mx-auto animate-fade-in-up hover-lift" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-section text-foreground">
                    {t('register.step1.title')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('register.firstName')} *
                    </label>
                    <Input
                      value={formData.first_name}
                      onChange={(e) => handleChange('first_name', e.target.value)}
                      onBlur={() => handleBlur('first_name')}
                      placeholder={t('register.firstName.placeholder')}
                      className={getInputClassName('first_name')}
                      maxLength={100}
                    />
                    {errors.first_name && touched.has('first_name') && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                        <AlertCircle className="h-4 w-4" /> {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('register.lastName')} *
                    </label>
                    <Input
                      value={formData.last_name}
                      onChange={(e) => handleChange('last_name', e.target.value)}
                      onBlur={() => handleBlur('last_name')}
                      placeholder={t('register.lastName.placeholder')}
                      className={getInputClassName('last_name')}
                      maxLength={100}
                    />
                    {errors.last_name && touched.has('last_name') && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                        <AlertCircle className="h-4 w-4" /> {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    {t('register.email')} *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder={t('register.email.placeholder')}
                    className={getInputClassName('email')}
                    maxLength={255}
                  />
                  {errors.email && touched.has('email') && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                      <AlertCircle className="h-4 w-4" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    {t('register.phone')} *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder={t('register.phone.placeholder')}
                    className={getInputClassName('phone')}
                    maxLength={20}
                  />
                  {errors.phone && touched.has('phone') && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                      <AlertCircle className="h-4 w-4" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-section text-foreground">
                    {t('register.step2.title')}
                  </h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('register.company')} *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    onBlur={() => handleBlur('company')}
                    placeholder={t('register.company.placeholder')}
                    className={getInputClassName('company')}
                    maxLength={200}
                  />
                  {errors.company && touched.has('company') && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                      <AlertCircle className="h-4 w-4" /> {errors.company}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('register.position')} *
                  </label>
                  <Input
                    value={formData.position}
                    onChange={(e) => handleChange('position', e.target.value)}
                    onBlur={() => handleBlur('position')}
                    placeholder={t('register.position.placeholder')}
                    className={getInputClassName('position')}
                    maxLength={100}
                  />
                  {errors.position && touched.has('position') && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                      <AlertCircle className="h-4 w-4" /> {errors.position}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('register.experience')}
                  </label>
                  <Select onValueChange={(value) => handleChange('experience_level', value)} value={formData.experience_level}>
                    <SelectTrigger className="transition-all duration-300">
                      <SelectValue placeholder={t('register.experience.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">{t('register.experience.0-2')}</SelectItem>
                      <SelectItem value="3-5">{t('register.experience.3-5')}</SelectItem>
                      <SelectItem value="6-10">{t('register.experience.6-10')}</SelectItem>
                      <SelectItem value="10+">{t('register.experience.10+')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Training Selection */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-section text-foreground">
                    {t('register.step3.title')}
                  </h2>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('register.training')} *
                  </label>
                  <Select onValueChange={(value) => handleChange('preferred_training', value)} value={formData.preferred_training}>
                    <SelectTrigger className={errors.preferred_training ? 'border-destructive' : ''}>
                      <SelectValue placeholder={t('register.training.placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {trainings.map((training) => (
                        <SelectItem key={training.value} value={training.value}>
                          {training.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.preferred_training && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                      <AlertCircle className="h-4 w-4" /> {errors.preferred_training}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('register.startDate')} *
                  </label>
                  <Input
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => handleChange('start_date', e.target.value)}
                    className={errors.start_date ? 'border-destructive' : ''}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.start_date && (
                    <p className="text-destructive text-sm mt-1 flex items-center gap-1 animate-fade-in-up">
                      <AlertCircle className="h-4 w-4" /> {errors.start_date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('register.motivation')}
                  </label>
                  <Textarea
                    value={formData.motivation}
                    onChange={(e) => handleChange('motivation', e.target.value)}
                    placeholder={t('register.motivation.placeholder')}
                    rows={4}
                    maxLength={2000}
                    className="transition-all duration-300"
                  />
                  <p className="text-muted-foreground text-xs mt-1 text-right">
                    {formData.motivation.length}/2000 {t('register.characters')}
                  </p>
                </div>

                {/* Summary */}
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {t('register.summary')}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">{t('register.fullName')}:</span>
                      <p className="font-medium text-foreground">{formData.first_name} {formData.last_name}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('register.email')}:</span>
                      <p className="font-medium text-foreground">{formData.email}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('register.company')}:</span>
                      <p className="font-medium text-foreground">{formData.company}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('register.position')}:</span>
                      <p className="font-medium text-foreground">{formData.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="hover-lift">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('register.previous')}
                </Button>
              ) : (
                <Link to="/training">
                  <Button type="button" variant="outline" className="hover-lift">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('register.backToTraining')}
                  </Button>
                </Link>
              )}

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary hover-lift"
                >
                  {t('register.next')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      {t('register.submitting')}
                    </span>
                  ) : (
                    <>
                      {t('register.submit')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
