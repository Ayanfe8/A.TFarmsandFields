import { motion } from "framer-motion";
import projectsImg from "@/assets/projects-farm.jpg";

const projects = [
  {
    title: "Integrated crop estate — Ogun state",
    category: "Crop production",
    description:
      "200-hectare mechanised farm producing maize, cassava, and soybeans for domestic and export markets.",
  },
  {
    title: "Poultry hub — Ibadan",
    category: "Livestock",
    description:
      "Modern poultry facility producing 50,000 birds per cycle with automated feeding and climate control systems.",
  },
  {
    title: "Export-grade cashew sourcing",
    category: "Export & sourcing",
    description:
      "Aggregation and processing of premium raw cashew nuts sourced from smallholder farmers across Northern Nigeria.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our projects
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Impact you can see
          </h2>
          <p className="mt-4 text-muted-foreground">
            A look at some of our active initiatives creating real value across the
            agricultural value chain.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={projectsImg}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
