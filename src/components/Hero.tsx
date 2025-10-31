import { motion } from "framer-motion";
import { Github, Linkedin, Globe, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Sundramrai3691",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sundram-kumar-rai",
      label: "LinkedIn",
    },
    { icon: Globe, href: "#", label: "Portfolio" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Sundram Kumar Rai
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        >
          B.Tech final year at NIT Raipur — Full-Stack & ML Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all group"
            onClick={() =>
              (window.location.href = "mailto:sundramrai4687@gmail.com")
            }
          >
            Contact Me
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            View Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="p-3 rounded-full border border-border hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all"
              aria-label={social.label}
            >
              <social.icon
                size={24}
                className="text-muted-foreground hover:text-primary transition-colors"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
