import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "HTML/CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frontend",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    category: "frontend",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    category: "frontend",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "backend",
  },
  {
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "backend",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "backend",
  },
  {
    name: "GraphQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    category: "backend",
  },
  {
    name: "Git/GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "tools",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "tools",
  },
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "tools",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const hasMoreThanSix = filteredSkills.length > 6;

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-secondary/30 dark:bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-3 gap-6 text-center sm:hidden">
          {filteredSkills.slice(0, 6).map((skill, key) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-white dark:bg-white rounded-full flex items-center justify-center shadow-md dark:shadow-none transition">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
          {hasMoreThanSix && (
            <div className="col-span-3 text-sm font-medium text-foreground text-center">
              ...and many more
            </div>
          )}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-white dark:bg-white rounded-full flex items-center justify-center shadow-md dark:shadow-none transition">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
