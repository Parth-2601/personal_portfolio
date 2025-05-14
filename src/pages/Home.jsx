
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectSection";
import { NavbarDemo } from "../components/Navbar"
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Navbar*/}
       <NavbarDemo />
      {/*Main Content*/}
        <main>
           <HeroSection />
           <AboutSection />
           <SkillsSection /> 
           <ProjectsSection/>
           <ContactSection />
        </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
};
