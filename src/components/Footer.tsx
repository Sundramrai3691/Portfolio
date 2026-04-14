import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { PERSONAL } from "@/data";

const SOCIAL_LINKS = [
  { label: "GitHub", href: PERSONAL.github, icon: Github },
  { label: "LinkedIn", href: PERSONAL.linkedin, icon: Linkedin },
  { label: "LeetCode", href: PERSONAL.leetcode, icon: Code2 },
];

export const Footer = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy email");
    }
  };

  return (
    <footer id="contact" className="relative px-6 pb-12 pt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-[2rem] border border-white/10 px-8 py-10 md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">Contact</p>
          <h2 className="font-heading mt-5 text-4xl font-semibold text-white md:text-6xl">Let&apos;s build something great.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Open to impactful full-stack builds, collaborative developer products, and ML-driven ideas that need both engineering and execution.
          </p>

          <button
            type="button"
            onClick={copyEmail}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition-all hover:-translate-y-1 hover:bg-cyan-400/15 hover:shadow-[0_0_28px_rgba(0,200,255,0.2)]"
            data-cursor="COPY"
          >
            <Mail size={18} />
            {PERSONAL.email}
          </button>

          <div className="mt-8 flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-cursor="OPEN"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">© 2026 Sundram Kumar Rai</p>
      </div>
    </footer>
  );
};
