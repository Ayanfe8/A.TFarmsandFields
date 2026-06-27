import { FaInstagram, FaFacebookF, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-primary-foreground py-16">
      <div className="mx-auto max-w-[1200px] px-[clamp(1rem,5vw,2rem)]">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="A.T Farms logo" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-heading text-lg font-bold text-primary-foreground">
                A.T Farms &amp; Fields
              </span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-wider text-primary-foreground/60">
              Offering Proactive Agricultural Solutions
            </p>
            <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed max-w-xs">
              A premium agricultural and livestock enterprise delivering
              sustainable growth and long-term food security across Nigeria.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Connect With Us
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="mailto:atfarmsfields.agricsolutions@gmail.com" className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors">
                  atfarmsfields.agricsolutions@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2347088415768" className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors">07088415768</a>
              </li>
              <li>
                <p className="text-sm text-primary-foreground/75">Ogun State, Nigeria</p>
              </li>
            </ul>
            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/at_farms_fields?igsh=MnJyNGpwbTEwZ2E5X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://x.com/at_farms_fields?s=21&t=2r2FYe3OQFhGnI_w3uP2pQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/14ohzHSSvMz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://vt.tiktok.com/ZSCNWjguv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} A.T Farms and Fields Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
