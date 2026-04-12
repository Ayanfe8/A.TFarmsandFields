import logo from "@/assets/logo.jpg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="A.T Farms logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-heading text-lg font-bold">
                A.T Farms & Fields
              </span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              A premium agricultural and livestock enterprise delivering
              sustainable growth and long-term food security.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              Quick links
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              Connect with us
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} A.T Farms and Fields Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
