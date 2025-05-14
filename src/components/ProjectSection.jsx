"use client";
import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";
import WeatherApp from "@/assets/Projects/Weather-App.png";
import ServeEase from "@/assets/Projects/ServeEase.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A modern and responsive weather application that provides real-time weather information using city search or your current location. It uses Open Weather api to fetch data.",
    image: WeatherApp,
    tags: ["HTML", "Css", "Javascript", "Api"],
    demoUrl: "https://weather-app-beta-eight-29.vercel.app/",
    githubUrl: "https://github.com/Parth-2601/weather-app.git",
  },
  {
    id: 2,
    title: "ServeEase- Capstone Project",
    description:
      "ServeEase is a trusted home maintenance platform that connects homeowners with verified service providers (plumbers, electricians, etc.) via a mobile and web app.",
    image: ServeEase,
    tags: ["React-Native", "React", "Stripe", "Firebase"],
    demoUrl:
      "https://www.youtube.com/watch?v=BmXc4zeF28I&ab_channel=ServeEaseLtd",
    githubUrl: "https://github.com/Milan-p23/ServeEase.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <React.Fragment key={project.id}>
              {/* Mobile - Simple Card */}
              <div className="md:hidden block">
                <div className="relative flex flex-col p-4 tracking-tight text-slate-100/80 w-full h-full rounded-2xl shadow-lg dark:bg-black border border-white/[0.1]">
                  <div className="relative w-full h-64 rounded-lg mb-4 overflow-hidden flex items-center justify-center bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-2 left-2 flex gap-2 z-10">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-slate-400 hover:text-primary transition-colors bg-white/80 dark:bg-black/80 p-1 rounded"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-slate-400 hover:text-primary transition-colors bg-white/80 dark:bg-black/80 p-1 rounded"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-black dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black dark:text-slate-400 mb-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-black dark:text-slate-300">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary px-2 py-1 rounded-full text-secondary-foreground border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop - Pin Container */}
              <div key={`desktop-${project.id}`} className="hidden md:block">
                <PinContainer
                  href={project.githubUrl}
                  title={
                    <span className="flex items-center gap-1 text-white">
                      <Github size={14} />
                      {project.title}
                    </span>
                  }
                >
                  <div className="relative flex basis-full flex-col p-1 tracking-tight text-slate-100/80 w-[20rem] h-[20rem]">
                    <div className="relative flex-1 w-full rounded-lg overflow-hidden flex items-center justify-center bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full"
                      />
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 text-black dark:text-slate-400 hover:text-primary transition-colors bg-white/80 dark:bg-black/80 p-1 rounded z-10"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-black dark:text-slate-400 mb-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-black dark:text-slate-300 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary px-2 py-1 rounded-full text-secondary-foreground border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </PinContainer>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/parth-2601"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
