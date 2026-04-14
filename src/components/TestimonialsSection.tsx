import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card p-8 border-l-4 border-primary"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-lg italic leading-relaxed text-accent-foreground">
                "{t.quote}"
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
