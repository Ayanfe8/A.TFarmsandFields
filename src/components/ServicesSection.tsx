import { motion } from "framer-motion";
import {
  Beef, Wheat, Layers, Ship, Building2, Droplet, BookOpen, TreePine, TrendingUp, Cpu,
} from "lucide-react";

const services = [
  {
    icon: Beef,
    title: "Livestock Production",
    description:
      "We engage in sustainable livestock farming, including cattle, sheep, and poultry, with a focus on productivity, animal health, and modern management practices.",
  },
  {
    icon: Wheat,
    title: "Crop Production",
    description:
      "Our crop operations span staple and high-value crops, using improved inputs, proper timing, and efficient farm management to maximize yield and profitability.",
  },
  {
    icon: Layers,
    title: "Farm Management & Development",
    description:
      "We provide end-to-end farm management services for individuals and investors, including planning, setup, operations, and performance tracking.",
  },
  {
    icon: Ship,
    title: "Sourcing & Exportation of Agricultural Commodities",
    description:
      "We source quality commodities such as ginger, sesame, and hibiscus, and connect them to local and international markets through structured export channels.",
  },
  {
    icon: Building2,
    title: "Agricultural Estate Development",
    description:
      "We develop integrated agricultural estates with essential infrastructure, expert support, and shared facilities to enable scalable and profitable farming.",
  },
  {
    icon: Droplet,
    title: "Hydroponics Farming",
    description:
      "We design and implement modern hydroponic systems for efficient, space-saving, and year-round crop production, ideal for homes and commercial use.",
  },
  {
    icon: BookOpen,
    title: "Capacity Building & Training",
    description:
      "We train farmers, agripreneurs, and investors with practical knowledge, extension support, and hands-on guidance to improve productivity and sustainability.",
  },
  {
    icon: TreePine,
    title: "Forestry & Agroforestry",
    description:
      "We promote tree planting and integrated farming systems that support environmental sustainability, long-term income, and climate resilience.",
  },
  {
    icon: TrendingUp,
    title: "Commodity Trading",
    description:
      "We actively participate in the trading of agricultural commodities, ensuring quality supply, market access, and value optimization across the value chain.",
  },
  {
    icon: Cpu,
    title: "Technological Solutions",
    description:
      "We leverage digital tools, data, and innovative technologies to improve farm operations, monitoring, and decision-making, including mobile extension services, farm management systems, and smart agriculture solutions.",
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
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
