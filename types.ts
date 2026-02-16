
import React from 'react';

export interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fullDescription: string;
  features: string[];
  benefits: string;
  imagePrompt: string;
  imageUrl?: string;
  caseStudy?: CaseStudy;
  testimonials?: Testimonial[];
}

export interface Metric {
  name: string;
  value: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  PERFORMANCE = 'performance',
  AI_STRATEGIST = 'ai-strategist',
  CONTACT = 'contact'
}
