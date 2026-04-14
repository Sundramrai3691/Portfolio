import { Starfield } from '@/components/Starfield';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Achievements } from '@/components/Achievements';
import { Profiles } from '@/components/Profiles';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="grid-bg relative min-h-screen overflow-x-clip bg-background">
      <Starfield />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Profiles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
