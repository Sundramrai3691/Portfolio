import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="relative py-12 px-6 border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              Let's Connect
            </h3>
            <p className="text-muted-foreground">
              Open to collaboration and opportunities
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sundramra3691"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sundram-kumar-rai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sundramrai@example.com"
              className="p-3 rounded-full border border-border hover:border-primary bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Sundram Kumar Rai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
