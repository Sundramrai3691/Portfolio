import { Starfield } from "@/components/Starfield";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/CapabilityMap";
import { Projects } from "@/components/Projects";
import { Systems, About } from "@/components/EngineeringSystems";
import { Experience } from "@/components/EditorialExperience";
import { Achievements } from "@/components/EditorialAchievements";
import { Profiles } from "@/components/EditorialProfiles";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="grid-bg relative min-h-screen overflow-x-clip bg-background">
    <Starfield />
    <Header />
    <main className="relative z-10">
      <Hero />
      <Projects />
      <Systems />
      <Achievements />
      <Skills />
      <Experience />
      <About />
      <Profiles />
    </main>
    <Footer />
  </div>
);

export default Index;
