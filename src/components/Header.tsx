import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PERSONAL } from "@/data";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Achievements", id: "achievements" },
  { name: "Profiles", id: "profiles" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "skills", "projects", "experience", "achievements", "profiles", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -35% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-background/70 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        style={{ width: `${progress}%`, height: 2, background: "linear-gradient(90deg, #00C8FF, #7B61FF)" }}
        className="fixed left-0 top-0 z-[100] transition-none"
      />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#hero"
          onClick={closeMobileMenu}
          className="font-heading text-lg font-bold uppercase tracking-[0.35em] text-white transition-opacity hover:opacity-80"
        >
          SR
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "nav-link text-sm font-medium tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
                activeSection === link.id && "active text-white",
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,200,255,0.22)]"
          >
            <a href={`mailto:${PERSONAL.email}`} data-cursor="OPEN">
              Contact Me
            </a>
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="border-b border-white/10 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="space-y-4 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMobileMenu}
                className={cn(
                  "nav-link block w-full text-left text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground",
                  activeSection === link.id && "active text-white",
                )}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
              <a href={`mailto:${PERSONAL.email}`} onClick={closeMobileMenu} data-cursor="OPEN">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
};
