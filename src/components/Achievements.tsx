import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code, Award, Star } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Trophy3D } from './Trophy3D';
import { Suspense } from 'react';

export const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
    {
      icon: Code,
      title: 'Competitive Programming',
      description: 'CodeChef 3★ (max 1712) • Codeforces Pupil (max 1322) • LeetCode 1727 rating, 1000+ problems solved',
      color: 'from-primary to-primary/50',
      gradient: 'bg-gradient-to-br from-primary/20 to-primary/5',
    },
    {
      icon: Award,
      title: '₹25K Seed Grant',
      description: 'Awarded ₹25K seed grant by NITRRIFIE for pet-health startup',
      color: 'from-accent to-accent/50',
      gradient: 'bg-gradient-to-br from-accent/20 to-accent/5',
    },
    {
      icon: Trophy,
      title: 'Hackathon Achievements',
      description: 'Finalist at RoboRithm (NIT Raipur) & TOP 25 at 0 to 1 Hackathon, IIT Delhi',
      color: 'from-secondary to-secondary/50',
      gradient: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
      is3D: true,
    },
    {
      icon: Star,
      title: 'Case Ops 3.0 Winner',
      description: 'Winner of Case Ops 3.0, NIT Raipur',
      color: 'from-primary via-accent to-secondary',
      gradient: 'bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/5',
    },
  ];

  return (
    <section id="achievements" className="py-24 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Recognition & Milestones
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            A track record of excellence in competitive programming, hackathons, and entrepreneurship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <div className={`relative h-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 overflow-hidden
                hover:border-primary/50 transition-all duration-500
                hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]
                ${achievement.is3D ? 'md:col-span-2' : ''}`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 ${achievement.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--secondary)) 100%)`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className={`relative z-10 ${achievement.is3D ? 'md:flex md:items-center md:gap-12' : ''}`}>
                  {achievement.is3D ? (
                    <>
                      {/* 3D Trophy Section */}
                      <div className="md:w-1/2 h-[300px] md:h-[400px] mb-6 md:mb-0">
                        <Canvas>
                          <Suspense fallback={null}>
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                            <OrbitControls 
                              enableZoom={false}
                              autoRotate
                              autoRotateSpeed={2}
                              maxPolarAngle={Math.PI / 2}
                              minPolarAngle={Math.PI / 3}
                            />
                            <Trophy3D />
                          </Suspense>
                        </Canvas>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} mb-6 
                          group-hover:scale-110 transition-transform duration-500`}>
                          <achievement.icon size={32} className="text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {achievement.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                        
                        {/* Animated pulse effect */}
                        <motion.div
                          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} mb-6 
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <achievement.icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {achievement.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Floating particles effect */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-primary/40"
                          style={{
                            top: `${20 + i * 30}%`,
                            right: `${10 + i * 20}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.2, 0.8, 0.2],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
