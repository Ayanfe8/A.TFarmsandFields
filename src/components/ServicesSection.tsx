import { motion } from "framer-motion";
import {
  Wheat, Drumstick, TreePine, Settings, Ship, Building2, BookOpen,
} from "lucide-react";

const services = [
  {
    icon: Wheat,
    title: "Crop Farming",
    description:
      "From land preparation to harvest, we produce high-yield crops including grains, vegetables, and cash crops using modern, sustainable farming techniques.",
  },
  {
    icon: Drumstick,
    title: "Livestock Production",
    description:
      "We raise healthy, high-quality livestock — including poultry, cattle, and small ruminants — through ethical practices that prioritise animal welfare and productivity.",
  },
  {
    icon: TreePine,
    title: "Forestry",
    description:
      "Our forestry operations combine commercial timber production with responsible land stewardship, supporting long-term environmental sustainability and revenue.",
  },
  {
    icon: Settings,
    title: "Farm Management",
    description:
      "We offer professional farm management services for landowners and investors — handling operations, staffing, inputs, and reporting so your farm runs at peak performance.",
  },
  {
    icon: Ship,
    title: "Export & Sourcing",
    description:
      "We connect Nigerian agricultural produce with international buyers, managing quality control, logistics, and documentation for seamless cross-border trade.",
  },
  {
    icon: Building2,
    title: "Integrated Farm Estate",
    description:
      "Our integrated farm estate model brings together crop, livestock, and forestry operations on a single landholding — ideal for investors seeking diversified agricultural returns.",
  },
  {
    icon: BookOpen,
    title: "Consulting & Advisory",
    description:
      "Our experienced agronomists and farm advisors provide tailored consulting for individuals, cooperatives, and businesses looking to start, grow, or optimise their agricultural operations.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-accent" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* Section header pattern */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end agricultural solutions for farmers, investors, and businesses.
          </p>
        </div>

        {/* 3-col grid on desktop, 2 on tablet, 1 on mobile */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-card p-8 border-2 border-transparent hover:border-primary hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex h-12 w-12 items-center justify-center text-primary">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-accent-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
