import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';

export const Responsibilities = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const positions = [
    {
      title: 'Executive',
      organization: 'Technocracy (Technical Committee)',
      location: 'NIT Raipur',
      period: 'Oct 2024 – Present',
      description: 'Managed shortlisting and technical evaluation for Vigyaan; handled 50+ submissions with comprehensive assessment.',
    },
    {
      title: 'Executive',
      organization: 'Innovation Cell',
      location: 'NIT Raipur',
      period: 'Sept 2024 – Jun 2025',
      description: 'Led monthly technical sessions and supported Avinya\'25 execution, fostering innovation among students.',
    },
  ];

  return (
    <section id="responsibilities" className="py-24 md:py-40 px-6 relative">
      <div className="max-w-6xl mx-auto">
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
              Leadership & Impact
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Positions of Responsibility
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Driving innovation and fostering technical excellence in student communities
          </p>
        </motion.div>

        <div className="space-y-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title + position.organization}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Users size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-primary mb-3">
                    <span className="font-semibold">{position.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {position.organization} • {position.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {position.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
