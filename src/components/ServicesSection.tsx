import { motion } from "framer-motion";
import { Leaf, Wheat, Bug, Ship } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Agricultural management",
    description:
      "End-to-end farm management services covering planning, operations, and monitoring for optimal productivity and returns.",
  },
  {
    icon: Wheat,
    title: "Crop production",
    description:
      "Large-scale cultivation of high-demand crops using modern techniques, quality seeds, and sustainable practices.",
  },
  {
    icon: Bug,
    title: "Livestock production",
    description:
      "Responsible rearing of poultry, cattle, and other livestock with focus on health, quality, and ethical standards.",
  },
  {
    icon: Ship,
    title: "Export & sourcing",
    description:
      "Connecting Nigerian agricultural produce to global markets through reliable sourcing, grading, and export logistics.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our services
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive agricultural solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            From farm management to global export, we cover every link in the
            agricultural value chain.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-card p-8 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
