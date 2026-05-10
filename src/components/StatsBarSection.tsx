import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 500, suffix: "+", label: "Farmers & Clients Served" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Hectares Under Management", format: (n: number) => n.toLocaleString() },
  { value: 5, suffix: "+", label: "States of Operation" },
];

function StatItem({ stat, inView, index }: { stat: typeof stats[number]; inView: boolean; index: number }) {
  const value = useCountUp(stat.value, 1800, inView);
  const display = stat.format ? stat.format(value) : value.toString();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`text-center py-6 lg:py-0 ${index < stats.length - 1 ? 'lg:border-r lg:border-primary-foreground/20' : ''}`}
    >
      <p
        className="font-heading font-black text-primary-foreground leading-none tabular-nums"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        {display}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/75">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsBarSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      className="bg-primary text-primary-foreground"
      style={{ padding: 'clamp(3rem,8vw,5rem) 0' }}
    >
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/60 mb-10">
          AT Farms in Numbers
        </p>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
