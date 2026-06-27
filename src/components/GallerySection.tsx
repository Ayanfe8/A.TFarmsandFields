import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";

const images = [
  { src: gallery1, alt: "Cassava crop field at A.T Farms and Fields, Ogun State" },
  { src: gallery2, alt: "Hydroponics irrigation system at A.T Farms and Fields" },
  { src: gallery3, alt: "Poultry production at A.T Farms and Fields" },
  { src: gallery4, alt: "Livestock care and management at A.T Farms and Fields" },
  { src: gallery5, alt: "Land preparation with tractors at A.T Farms and Fields" },
  { src: gallery6, alt: "Vegetable crop production at A.T Farms and Fields" },
  { src: gallery7, alt: "Capacity building and training session at A.T Farms and Fields" },
  { src: gallery8, alt: "Young plant seedling in Ogun State farm soil" },
  { src: gallery9, alt: "Farm worker in cassava field at A.T Farms and Fields" },
  { src: gallery10, alt: "Tree nursery and forestry seedlings at A.T Farms and Fields" },
];

export default function GallerySection() {
  const [active, setActive] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const triggerIndexRef = useRef<number | null>(null);

  const openAt = (i: number) => {
    triggerIndexRef.current = i;
    setActive(i);
  };

  const close = () => setActive(null);

  useEffect(() => {
    if (active === null) {
      // Return focus to the trigger that opened the lightbox
      const idx = triggerIndexRef.current;
      if (idx !== null) {
        triggerRefs.current[idx]?.focus();
        triggerIndexRef.current = null;
      }
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActive((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-background" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            See Our Work
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">
            From Our Farms
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              ref={(el) => { triggerRefs.current[i] = el; }}
              type="button"
              onClick={() => openAt(i)}
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="block w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setActive(null); }}
              aria-label="Close"
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? null : (i - 1 + images.length) % images.length)); }}
              aria-label="Previous image"
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[active].src}
              alt={images[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain"
            />
            <button
              onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? null : (i + 1) % images.length)); }}
              aria-label="Next image"
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={22} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/75" aria-live="polite">
              Image {active + 1} of {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
