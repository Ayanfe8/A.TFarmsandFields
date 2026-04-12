import { motion } from "framer-motion";
import aboutImg from "@/assets/about-team.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImg}
              alt="A.T Farms team working in a greenhouse"
              className="rounded-2xl shadow-xl object-cover w-full aspect-[4/3]"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              About us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Building value, cultivating opportunity
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A.T Farms and Fields Limited is a modern agricultural and livestock
              enterprise rooted in sustainability, growth, and long-term food
              security. We combine traditional farming practices with
              forward-thinking systems to deliver premium produce and create
              economic opportunities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are not just farmers — we are builders of value, cultivators of
              opportunity, and stewards of the land. Our mission is to provide
              premium agricultural products through ethical farming while
              contributing to food security across Nigeria and beyond.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { stat: "500+", label: "Hectares managed" },
                { stat: "50+", label: "Export partners" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-bold text-primary">{item.stat}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
