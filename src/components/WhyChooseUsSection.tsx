import { motion } from "framer-motion";
import { MapPin, Layers, Leaf, Users } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Southwest Nigeria Expertise",
    description: "Deep roots in Ogun State with operations across Southwest Nigeria.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    description: "From farm management to international export, we handle the full agricultural value chain.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Every operation is guided by our commitment to the land, the community, and future generations.",
  },
  {
    icon: Users,
    title: "Trusted by Investors & Farmers",
    description: "We serve both individual farmers and institutional investors with the same level of professionalism and care.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-background" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Why Work With Us
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            Why Work With Us
          </h2>
        </div>

        {/* 4-col grid, 2 on tablet, 1 on mobile — open layout, no card borders */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              {/* Icon circle */}
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-secondary">
                <reason.icon size={32} className="text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
