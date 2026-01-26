
import React from 'react';
import { Project, Experience, SkillGroup } from './types';

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "C++", "OOPs", "Data Structures"]
  },
  {
    category: "Game Engines",
    items: ["Unity 3D", "Unity 2D", "Mirror Networking"]
  },
  {
    category: "Architecture",
    items: ["MVC", "Observer Pattern", "State Machine", "Object Pooling", "Singleton", "Service Locator"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "AR / VR Developer",
    company: "Mouse and Cheese Design",
    period: "October 2024 - Present",
    tech: ["Unity 3d", "C#", "VR Development", "UI/UX Design"],
    description: [
      "Virtual Walkthrough – Schindler elevator Training: Designed interactive VR module for exploration and safety troubleshooting.",
      "Farmator VF7 Elevator Training – Schindler: Developed training system for learning elevator reservation and fault handling."
    ]
  },
  {
    role: "Junior Game Developer",
    company: "Quexi",
    period: "June 2024 – September 2024",
    tech: ["Unity 3D", "C#", "Animator", "State Machine"],
    description: [
      "Bee The Adventure – A 3D endless runner Game: Built complete player system with selection, animation, and gameplay logic."
    ]
  },
  {
    role: "Full Stack Game Developer",
    company: "Outscal Pvt. Ltd.",
    period: "July 2022 - May 2024",
    tech: ["Unity", "C#", "OOPs", "Design Patterns"],
    description: [
      "Mastered core game development principles, performance optimization, and advanced architectural patterns."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "FPS Zombie Land",
    type: "3D",
    status: "DEMO_READY",
    github: "https://github.com",
    play: "#",
    imageUrl: "https://images.unsplash.com/photo-1552824734-8e6231d66bc5?auto=format&fit=crop&q=80&w=800",
    description: [
      "Built using MVC architecture for clean code separation.",
      "Implemented zombie AI with State Machine (idle, patrol, chase, attack).",
      "Optimized performance using Object Pooling and Scriptable Objects."
    ],
    tech: ["Unity 3D", "MVC", "AI", "C#"]
  },
  {
    title: "Battle Tank Game",
    type: "3D",
    status: "COMPLETED",
    github: "https://github.com",
    play: "#",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    description: [
      "Created flexible Player and Enemy systems with Scriptable Objects.",
      "Enemy AI uses Unity Navigation and State Machines.",
      "Achievement system implemented with Observer Pattern."
    ],
    tech: ["Unity 3D", "NavMesh", "C#", "Observer"]
  },
  {
    title: "The Explorer",
    type: "2D",
    status: "IN_PROGRESS",
    github: "https://github.com",
    play: "#",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    description: [
      "Developed 2D platformer with customizable levels using Tile Maps.",
      "Unity Timeline used for dramatic boss entries.",
      "Player progress saved using PlayerPrefs."
    ],
    tech: ["Unity 2D", "TileMaps", "C#", "Timeline"]
  }
];
