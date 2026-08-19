export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  tags: string[];
  features: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'hotel_tv' | 'signage' | 'hardware' | 'pms';
  description: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CaseStudyItem {
  title: string;
  clientType: string;
  screensCount: string;
  solution: string;
  description: string;
  results: string[];
}

export interface EstimateFormState {
  facilityType: string;
  unitsCount: number;
  cablingType: string;
  features: string[];
  signageLocations: string[];
  contactEmail: string;
  contactPhone: string;
  notes: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  facilitySize: string;
  message: string;
}
