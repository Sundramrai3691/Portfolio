import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Code2, Award, CheckCircle2 } from 'lucide-react';

export const Profiles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const profiles = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@Sundramra3691',
      link: 'https://github.com/Sundramra3691',
      color: 'from-primary to-primary/50',
    },
    {
      icon: Code2,
      name: 'CodeChef',
      username: '@sundram_45',
      link: 'https://www.codechef.com/users/sundram_45',
      color: 'from-accent to-accent/50',
    },
    {
      icon: Code2,
      name: 'Codeforces',
      username: '@nerdy_specs11',
      link: 'https://codeforces.com/profile/nerdy_specs11',
      color: 'from-secondary to-secondary/50',
    },
    {
      icon: Code2,
      name: 'LeetCode',
      username: '@Sundram_21',
      link: 'https://leetcode.com/Sundram_21',
      color: 'from-primary via-accent to-secondary',
    },
  ];

  const certifications = [
    'Deep Learning Fundamentals (DeepLearning.TV)',
    'Intro to Machine Learning (Kaggle)',
    'Introduction to Zero Trust (Microsoft)',
    'Postman API Fundamentals Student Expert',
  ];

  return (
    <section id="profiles" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Coding Profiles & Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with me across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${profile.color} mb-4 group-hover:scale-110 transition-transform`}>
                <profile.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.username}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
