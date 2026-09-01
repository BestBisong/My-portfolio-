export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  frontendRepo?: string;
  backendRepo?: string;
  contractsRepo?: string;
  isDeployed?: boolean;
}

export interface DashboardProject extends Project {
  metric: string;
  businessImpact: string;
  category?: 'ai' | 'ecommerce' | 'web3' | 'fullstack';
}

export interface Skill {
  name: string;
  iconClass: string;
}

export interface Service {
  title: string;
  description: string;
  iconClass: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

