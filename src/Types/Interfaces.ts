export interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    techs: Array<{
      name: string;
      color: string;
    }>;
    githubLink: string;
    siteLink?: string;
    features: string[];
    category: 'frontend' | 'fullstack' | 'mobile';
  }
  
  export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    skills: string[];
    credentialUrl: string;
    description: string;
  }

 export  interface TechSkill {
    name: string;
    icon: JSX.Element;
    color: string;
    proficiency: number;
  }
 export interface SoftSkill {
    title: string;
    description: string;
    icon: string;
  }
  