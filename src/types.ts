/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  includes: string[];
  icon: string;
  isNew?: boolean;
  isPremium?: boolean;
  badge?: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  workflows: string[];
  challenges: string;
  solution: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  substeps: string[];
}

export interface TrustCounter {
  id: string;
  value: string;
  label: string;
  suffix: string;
  description: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  logo: string;
}

export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  result: string;
  icon: string;
}
