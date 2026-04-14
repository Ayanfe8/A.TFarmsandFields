import { motion } from "framer-motion";
import { Leaf, Shield, Lightbulb, TrendingUp, Star } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const values = [
  { icon: Leaf, label: "Sustainability" },
  { icon: Shield, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Star, label: "Quality" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* 2-col grid: text left, image right */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Who We Are
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-foreground">
              Who We Are
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A.T Farms and Fields Limited is a modern agricultural and livestock
              enterprise rooted in sustainability, growth, and long-term food
              security. We are builders of value, cultivators of opportunity, and
              stewards of the land — combining traditional farming with
              forward-thinking systems to deliver premium produce and services
              across Southwest Nigeria.
            </p>

            {/* Mission & Vision callout boxes */}
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border-l-4 border-primary bg-secondary p-6">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wide">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To provide premium agricultural products through ethical farming
                  practices while creating economic opportunities and contributing
                  to food security.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-primary bg-secondary p-6">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-wide">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To become a leading agricultural and livestock enterprise known
                  for sustainable farming, innovation, and high-quality food
                  production.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src={aboutImg}
              alt="A.T Farms team working on the farm"
              className="rounded-2xl object-cover w-full aspect-[4/3]"
              style={{ boxShadow: 'var(--shadow-lg)' }}
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>
        </div>

        {/* Brand Values — 5-item flex row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {values.map((v) => (
            <div key={v.label} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <v.icon size={24} />
              </div>
              <span className="text-sm font-medium text-foreground">{v.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
