import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-[clamp(1rem,5vw,2rem)] py-3">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="A.T Farms logo" width={40} height={40} loading="eager" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-heading text-lg font-bold text-foreground tracking-tight">
              A.T Farms <span className="text-primary">&amp; Fields</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden lg:inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-brand-green-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Get In Touch
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded p-1"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay — rendered as sibling so it covers the header too */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-50 flex flex-col"
            style={{
              backgroundColor: "hsl(152, 65%, 22%)",
              width: "100vw",
              height: "100dvh",
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* Top bar — matches nav height */}
            <div className="flex items-center justify-between px-[clamp(1rem,5vw,2rem)] py-3 border-b border-white/10">
              <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt="A.T Farms logo" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                <span className="font-heading text-lg font-bold text-white tracking-tight">
                  A.T Farms &amp; Fields
                </span>
              </a>
              <button
                onClick={() => setOpen(false)}
                className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded p-1"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Links — centered in remaining space */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              <ul className="flex flex-col items-center gap-7">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-heading text-[2rem] font-bold text-white active:text-brand-green-muted hover:text-brand-green-muted transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg active:bg-white/90"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
