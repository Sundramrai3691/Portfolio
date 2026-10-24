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

const Index = () => (
  <div className="grid-bg relative min-h-screen overflow-x-clip bg-background">
    <Header />
    <main className="relative z-10">
      <Hero />
      <section className="focus-velocity-strip" aria-label="Engineering focus">
        <h2 className="sr-only">Engineering focus</h2>
        <ScrollVelocity texts={["REAL-TIME SYSTEMS   \u00b7   RELIABLE BACKENDS   \u00b7   APPLIED AI   \u00b7"]} velocity={150} damping={70} stiffness={300} numCopies={3} fadeEdges fontSize="clamp(1rem, 2.35vw, 2rem)" fontWeight={550} color="#cbc8d8" gap={0} pauseOnHover />
      </section>
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
