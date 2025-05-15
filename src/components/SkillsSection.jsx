import { useState } from "react";
import { cn } from "@/lib/utils";

const skillsData = [
  {
    name: "HTML/CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "frontend",
    proficiency: "Advanced",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "frontend",
    proficiency: "Advanced",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frontend",
    proficiency: "Advanced",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "frontend",
    proficiency: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    category: "frontend",
    proficiency: "Advanced",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    category: "frontend",
    proficiency: "Intermediate",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "backend",
    proficiency: "Intermediate",
  },
  {
    name: "Express",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "backend",
    proficiency: "Intermediate",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "backend",
    proficiency: "Intermediate",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "backend",
    proficiency: "Intermediate",
  },
  {
    name: "GraphQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    category: "backend",
    proficiency: "Basic",
  },
  {
    name: "Git/GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "tools",
    proficiency: "Advanced",
  },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "tools",
    proficiency: "Basic",
  },
  {
    name: "Figma",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    category: "tools",
    proficiency: "Intermediate",
  },
  {
    name: "VS Code",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tools",
    proficiency: "Advanced",
  },
];

const certificatesData = [
  {
    title: "Adv. Diploma- Computer Programming",
    issuer: "George Brown College",
    date: "2025",
    url: "#",
    image: "https://placehold.co/600x400/EEE/31343C",
  },
  
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("skills");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-16 px-4 bg-gradient-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto max-w-6xl z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-foreground">
          Skills & <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are the technologies I work with and the certifications I've
          earned to validate my expertise.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-secondary/50 rounded-lg p-1 gap-1">
            <button
              onClick={() => setActiveTab("skills")}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                activeTab === "skills"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-secondary/70"
              )}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                activeTab === "certificates"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-secondary/70"
              )}
            >
              Certificates
            </button>
          </div>
        </div>

        {activeTab === "skills" ? (
          <>
            {/* Skill Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-1.5 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/70 text-foreground hover:bg-secondary/90 hover:shadow-sm"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Desktop Skills Grid */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-sm">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{skill.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-full bg-secondary/20 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            skill.proficiency === "Advanced"
                              ? "bg-green-500 w-full"
                              : skill.proficiency === "Intermediate"
                              ? "bg-blue-500 w-2/3"
                              : "bg-yellow-500 w-1/3"
                          }`}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Skills List */}
            <div className="sm:hidden space-y-3">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-sm">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Desktop Certificates Grid */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatesData.map((cert) => (
                <a
                  key={`${cert.issuer}-${cert.title}`}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/600x400/EEE/31343C";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile Certificates List */}
            <div className="sm:hidden space-y-4">
              {certificatesData.map((cert) => (
                <a
                  key={`${cert.issuer}-${cert.title}`}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background border border-border rounded-lg overflow-hidden"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/600x400/EEE/31343C";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{cert.title}</h3>
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
