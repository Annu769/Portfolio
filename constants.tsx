
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
    github: "https://github.com/Annu769",
    play: "https://play.unity.com/api/v1/games/game/9a0fff43-1281-4631-aeb8-b6d78ecb7304/build/latest/frame",
    imageUrl: "https://images.unsplash.com/photo-1552824734-8e6231d66bc5?auto=format&fit=crop&q=80&w=800",
    description: [
      "Built using MVC architecture for clean code separation.",
      "Implemented zombie AI with State Machine (idle, patrol, chase, attack).",
      "Optimized performance using Object Pooling and Scriptable Objects."
    ],
    tech: ["Unity 3D", "MVC", "AI", "C#"]
  },
  {
    title: "The Explorer",
    type: "2D",
    status: "COMPLETED",
    github: "https://github.com/Annu769",
    play: "https://play.unity.com/api/v1/games/game/ef235f82-cf73-47c7-acbe-8f1df9b717ed/build/latest/frame",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    description: [
      "2D side-scrolling exploration game with platforming mechanics.",
      "Features dynamic environment interaction and puzzle-solving elements.",
      "Implemented smooth character movement and custom physics handling."
    ],
    tech: ["Unity 2D", "C#", "Level Design"]
  },
  {
    title: "Battle Tank Game",
    type: "3D",
    status: "COMPLETED",
    github: "https://github.com/Annu769",
    play: "https://play.unity.com/api/v1/games/game/bc0496f4-7cd7-4fab-9281-545cc719f1b9/build/latest/frame",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    description: [
      "Created flexible Player and Enemy systems with Scriptable Objects.",
      "Enemy AI uses Unity Navigation and State Machines.",
      "Achievement system implemented with Observer Pattern."
    ],
    tech: ["Unity 3D", "NavMesh", "C#", "Observer"]
  },
  {
    title: "Snake Game 2D",
    type: "2D",
    status: "COMPLETED",
    github: "https://github.com/Annu769/2DSnakeGame",
    play: "https://play.unity.com/api/v1/games/game/653387ae-5333-41ee-898b-e4f20ef69364/build/latest/frame",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    description: [
      "Classic arcade gameplay recreated with modern Unity 2D systems.",
      "Implemented dynamic snake growth mechanics and grid-based collision.",
      "Smooth performance optimization for web deployment."
    ],
    tech: ["Unity 2D", "C#", "Logic Systems"]
  },
  {
    title: "Block Buster",
    type: "2D",
    status: "COMPLETED",
    github: "https://github.com/Annu769/Breakout-Game",
    play: "https://play.unity.com/api/v1/games/game/121661a3-4db0-409a-b6be-2c8a869cb6aa/build/latest/frame",
    imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
    description: [
      "Advanced breakout clone featuring physics-based ball interaction.",
      "Integrated satisfy destruction particle effects and power-up systems.",
      "Clean UI/UX design for an engaging retro experience."
    ],
    tech: ["Unity 2D", "Physics", "C#"]
  },
  {
    title: "Chest System",
    type: "2D",
    status: "COMPLETED",
    github: "https://github.com/Annu769/Chest-System-",
    imageUrl: "https://images.unsplash.com/photo-1533234458569-ce74357efb19?auto=format&fit=crop&q=80&w=800",
    description: [
      "Advanced UI system inspired by Clash Royale's loot mechanics.",
      "Features a real-time timer system and rarity-based reward logic.",
      "Implemented using clean architectural patterns for high scalability."
    ],
    tech: ["Unity UI", "State Machine", "C#", "MVC"]
  }
];
