import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "A.T Farms transformed our idle land into a productive cassava and maize farm within six months. Their professionalism and attention to detail exceeded our expectations.",
    name: "Chief Adebayo O.",
    role: "Landowner, Ogun State",
  },
  {
    quote:
      "As a diaspora investor, I needed a partner I could trust to manage my farm remotely. AT Farms delivers regular reports and has consistently met their targets.",
    name: "Dr. Ngozi E.",
    role: "Investor, United Kingdom",
  },
  {
    quote:
      "Their export sourcing service helped us access international markets we never thought possible. The quality control and documentation were world-class.",
    name: "Alhaji Musa K.",
    role: "Cooperative Lead, Kwara State",
  },
];

const AUTO_MS = 6000;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (next: number) => setIndex((next + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section id="testimonials" className="bg-secondary" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
        >
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-card p-8 md:p-10 border-l-4 border-primary"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <Quote size={28} className="text-primary/30 mb-4" />
                <p className="text-lg md:text-xl italic leading-relaxed text-accent-foreground">
                  "{t.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-heading font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-primary' : 'w-2.5 bg-primary/30 hover:bg-primary/50'}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
