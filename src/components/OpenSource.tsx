import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitBranch, GitPullRequest } from 'lucide-react';

export const OpenSource = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contributions = [
    {
      icon: GitBranch,
      title: 'GirlScript Summer Of Code 2025',
      description: 'Selected Contributor, contributing to open source projects',
      color: 'from-primary to-accent',
    },
    {
      icon: GitPullRequest,
      title: 'Hacktoberfest',
      description: 'Successfully completed Hacktoberfest by contributing to open source projects',
      color: 'from-accent to-secondary',
    },
  ];

  return (
    <section id="opensource" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Open Source Contributions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contributing to the developer community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${contribution.color} mb-4`}>
                <contribution.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{contribution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {contribution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
