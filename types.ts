
export interface Project {
  title: string;
  github?: string;
  play?: string;
  description: string[];
  tech: string[];
  type: '3D' | '2D' | 'VR';
  imageUrl?: string;
  status?: 'COMPLETED' | 'IN_PROGRESS' | 'DEMO_READY';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
  projects?: {
    name: string;
    details: string;
  }[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
