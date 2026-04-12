import { motion } from "framer-motion";
import { ShieldCheck, Award, Lightbulb, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Proven reliability",
    description: "We deliver consistently on every project with transparent processes and measurable results.",
  },
  {
    icon: Award,
    title: "Deep expertise",
    description: "Decades of combined experience across crop science, livestock management, and agri-export.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-driven",
    description: "We integrate modern farming technologies to maximise yield, reduce waste, and protect resources.",
  },
  {
    icon: TrendingUp,
    title: "Growth-focused",
    description: "Our strategies are designed for long-term value creation for investors, partners, and communities.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
            Why choose us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Trust built on results
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            We stand at the intersection of tradition and innovation — delivering
            not just farm products, but a future of abundance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                <reason.icon size={26} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
