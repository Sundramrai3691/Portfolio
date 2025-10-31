import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Wrench, Cloud, Heart } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
      color: 'from-primary to-primary/50',
    },
    {
      icon: Wrench,
      title: 'Web Development',
      skills: ['React', 'Tailwind CSS', 'Vite', 'shadcn/ui', 'HTML5', 'CSS'],
      color: 'from-accent to-accent/50',
    },
    {
      icon: Cloud,
      title: 'Tools & Technologies',
      skills: ['PyTorch', 'scikit-learn', 'YOLO', 'OpenCV', 'EasyOCR', 'NLTK', 'Vercel', 'Postman'],
      color: 'from-secondary to-secondary/50',
    },
    {
      icon: Heart,
      title: 'Soft Skills',
      skills: ['Leadership', 'Team Management', 'Problem Solving', 'Project Management', 'Technical Mentoring'],
      color: 'from-primary via-accent to-secondary',
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-40 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Technical Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive technology stack powering innovation and problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-500"
              style={{ perspective: '1000px' }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
