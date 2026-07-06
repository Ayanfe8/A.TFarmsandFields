import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Lush Nigerian farmland at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        {/* SPEC: overlay-hero rgba(20,92,56,0.65) */}
        <div className="absolute inset-0" style={{ background: 'var(--overlay-hero)' }} />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)] py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Tagline */}
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.15em] text-primary-foreground/75 uppercase">
            Offering Proactive Agricultural Solutions
          </span>

          {/* PRD headline */}
          <h1 className="mt-4 font-heading font-black leading-tight tracking-tight text-primary-foreground" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Building the Future of Nigerian Agriculture
          </h1>

          {/* PRD subheadline */}
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Premium agricultural management, crop &amp; livestock production, and
            international export solutions — rooted in Ogun State, growing across
            Nigeria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-green-dark transition-colors"
            >
              Enquire Now
              <ArrowRight size={16} />
            </a>
            {/* Secondary CTA — ghost/outline */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 transition-colors"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown size={28} className="text-primary-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}
