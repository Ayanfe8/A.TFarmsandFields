import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Aerial view of farmland with workers harvesting crops" },
  { src: gallery2, alt: "Fresh harvested vegetables in wooden crates" },
  { src: gallery3, alt: "Modern poultry farm interior" },
  { src: gallery4, alt: "Agricultural team in green field" },
  { src: gallery5, alt: "Export-grade produce stacked in warehouse" },
  { src: gallery6, alt: "Cattle grazing on lush green pasture" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-background" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            See Our Work
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            From Our Farms
          </h2>
        </div>

        {/* CSS columns masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="block w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
