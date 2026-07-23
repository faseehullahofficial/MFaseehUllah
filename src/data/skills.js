export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    comment: "// what the user sees",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    comment: "// what makes it work",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express", level: 60 },
    ],
  },
  {
    id: "database",
    label: "Database",
    comment: "// where it lives",
    skills: [
      { name: "MySQL", level: 65 },
      { name: "MongoDB", level: 60 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    comment: "// how it ships",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Linux", level: 70 },
      { name: "Docker", level: 35, learning: true },
    ],
  },
];
