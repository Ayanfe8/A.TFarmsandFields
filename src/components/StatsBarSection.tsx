import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Farmers & Clients Served" },
  { number: "10+", label: "Years of Experience" },
  { number: "1,000+", label: "Hectares Under Management" },
  { number: "5+", label: "States of Operation" },
];

export default function StatsBarSection() {
  return (
    <section
      id="stats"
      className="bg-primary text-primary-foreground"
      style={{ padding: 'clamp(3rem,8vw,5rem) 0' }}
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* Optional label */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/60 mb-10">
          AT Farms in Numbers
        </p>

        {/* 4-col on desktop, 2x2 on mobile. Vertical dividers via border-right on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center py-6 lg:py-0 ${i < stats.length - 1 ? 'lg:border-r lg:border-primary-foreground/20' : ''}`}
            >
              <p
                className="font-heading font-black text-primary-foreground leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {stat.number}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/75">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
