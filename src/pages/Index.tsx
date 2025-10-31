import { Starfield } from '@/components/Starfield';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Responsibilities } from '@/components/Responsibilities';
import { Achievements } from '@/components/Achievements';
import { OpenSource } from '@/components/OpenSource';
import { Profiles } from '@/components/Profiles';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Profiles />
        <Projects />
        <Experience />
        <Achievements />
        <OpenSource />
        <Responsibilities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
