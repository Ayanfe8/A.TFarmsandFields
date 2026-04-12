import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Contact us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Let's grow together
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're an investor, farmer, or business partner, we'd love to
              hear from you. Send us a message or reach out on WhatsApp.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@atfarmsandfields.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/2348000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    +234 800 000 0000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl bg-card border border-border p-12 text-center">
                <div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send size={24} />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-card border border-border p-8 shadow-sm"
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your needs..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Send message
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
