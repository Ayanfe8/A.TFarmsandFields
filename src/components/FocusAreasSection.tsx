import { motion } from "framer-motion";
import focusCrops from "@/assets/focus-crops.jpg";
import focusLivestock from "@/assets/focus-livestock.jpg";
import focusForestry from "@/assets/focus-forestry.jpg";

const areas = [
  {
    title: "Crops",
    description: "Grains, vegetables, and cash crops grown with precision and care.",
    image: focusCrops,
  },
  {
    title: "Livestock",
    description: "Ethical, productive animal husbandry across multiple species.",
    image: focusLivestock,
  },
  {
    title: "Forestry",
    description: "Commercial forestry and sustainable land use management.",
    image: focusForestry,
  },
];

export default function FocusAreasSection() {
  return (
    <section id="focus" className="bg-background" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            What We Focus On
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            Our Focus Areas
          </h2>
        </div>

        {/* 3-col cards with overlay */}
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: 380 }}
            >
              {/* Background image */}
              <img
                src={area.image}
                alt={area.title}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-70"
                style={{ background: 'var(--overlay-card)', opacity: 0.8 }}
              />
              {/* Text — bottom aligned */}
              <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-end p-8">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
