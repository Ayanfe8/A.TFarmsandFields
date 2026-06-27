import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const subjects = [
  "Farm Management Enquiry",
  "Crop & Livestock",
  "Export & Sourcing",
  "Farm Estate Investment",
  "Consulting",
  "General Enquiry",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .regex(/^[+\d\s()-]*$/, "Phone may only contain digits and + ( ) -")
    .optional()
    .or(z.literal("")),
  subject: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const values = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "6ae5d473-1ffb-438d-ab07-0a54a910a269",
          ...values,
          botcheck: "",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.success) throw new Error("submit failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly at ayanfe4greatness@gmail.com");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const fieldClass = (k: keyof Errors) =>
    `${inputBase} ${errors[k] ? "border-destructive focus:ring-destructive" : "border-input"}`;

  const ErrorMsg = ({ id, msg }: { id: string; msg?: string }) =>
    msg ? (
      <p id={id} role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
        <AlertCircle size={12} /> {msg}
      </p>
    ) : null;

  return (
    <section id="contact" className="bg-background" style={{ padding: 'clamp(3rem,8vw,6rem) 0' }}>
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Contact</span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Have a question, investment enquiry, or sourcing request? Send us a message and we will respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><Mail size={18} /></div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a href="mailto:atfarmsfields.agricsolutions@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">atfarmsfields.agricsolutions@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><Phone size={18} /></div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a href="tel:+2347088415768" className="text-sm text-muted-foreground hover:text-primary transition-colors">07088415768</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><MapPin size={18} /></div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Ogun State, Southwest Nigeria</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/at_farms_fields?igsh=MnJyNGpwbTEwZ2E5X" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Follow us on Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/at_farms_fields?s=21&t=2r2FYe3OQFhGnI_w3uP2pQ" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Follow us on Twitter">
                <FaXTwitter size={18} />
              </a>
              <a href="https://www.facebook.com/share/14ohzHSSvMz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Follow us on Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="https://vt.tiktok.com/ZSCNWjguv/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Follow us on TikTok">
                <FaTiktok size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl bg-card border border-border p-12 text-center">
                <div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary"><Send size={24} /></div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">Enquiry sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-card border border-border p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input id="name" name="name" type="text" placeholder="Your full name"
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined}
                      className={fieldClass("name")} />
                    <ErrorMsg id="name-err" msg={errors.name} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <input id="email" name="email" type="email" placeholder="you@example.com"
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined}
                      className={fieldClass("email")} />
                    <ErrorMsg id="email-err" msg={errors.email} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone Number <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+234..."
                      aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined}
                      className={fieldClass("phone")} />
                    <ErrorMsg id="phone-err" msg={errors.phone} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <select id="subject" name="subject" className={fieldClass("subject")}>
                      <option value="">Select a subject</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us about your needs..."
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined}
                      className={`${fieldClass("message")} resize-none`} />
                    <ErrorMsg id="message-err" msg={errors.message} />
                  </div>
                  {submitError && (
                    <p role="alert" className="flex items-center gap-1.5 text-sm text-destructive">
                      <AlertCircle size={14} /> {submitError}
                    </p>
                  )}
                  <button type="submit" disabled={submitting} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-green-dark transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? "Sending..." : (<>Send Enquiry <Send size={16} /></>)}
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
