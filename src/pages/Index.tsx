import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/CapabilityMap";
import { Projects } from "@/components/Projects";
import { Systems, About } from "@/components/EngineeringSystems";
import { Experience } from "@/components/EditorialExperience";
import { Achievements } from "@/components/EditorialAchievements";
import { Profiles } from "@/components/EditorialProfiles";
import { Footer } from "@/components/Footer";
import { ScrollVelocity } from "@/components/ScrollVelocity";
import { TechnologyStack } from "@/components/TechnologyStack";

const Index = () => (
  <div className="grid-bg relative min-h-screen overflow-x-clip bg-background">
    <Header />
    <main className="relative z-10">
      <Hero />
      <section className="focus-velocity-strip" aria-label="Engineering focus">
        <h2 className="sr-only">Engineering focus</h2>
        <div className="focus-velocity-motion" aria-hidden="true"><ScrollVelocity texts={["REAL-TIME SYSTEMS   •   RELIABLE BACKENDS   •   APPLIED AI   •   ENGINEERING WITH EVIDENCE"]} velocity={190} damping={70} stiffness={300} numCopies={3} fadeEdges skewWithVelocity={4} scaleWithVelocity={0.03} fontSize="clamp(1rem, 2.35vw, 2rem)" fontWeight={550} color="#cbc8d8" gap={0} pauseOnHover /></div>
        <p className="focus-velocity-static sr-only">REAL-TIME SYSTEMS <span>•</span> RELIABLE BACKENDS <span>•</span> APPLIED AI <span>•</span> ENGINEERING WITH EVIDENCE</p>
      </section>
      <TechnologyStack />
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
