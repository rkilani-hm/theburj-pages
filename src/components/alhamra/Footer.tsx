import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { key: "nav.tower", href: "#presence" },
    { key: "nav.perspective", href: "#perspective" },
    { key: "nav.business", href: "#business" },
    { key: "nav.services", href: "#services" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Copyright */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-xs">LOGO</span>
              </div>
              <span className="ml-3 text-sm font-medium tracking-wide uppercase">
                Al Hamra Tower
              </span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Al Hamra Tower. {t("footer.rights")}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {t("footer.terms")}
              </a>
            </div>

            {/* Social Icons Placeholder */}
            <div className="flex gap-3">
              {["LI", "TW", "IG"].map((icon) => (
                <div
                  key={icon}
                  className="w-8 h-8 bg-primary-foreground/10 flex items-center justify-center text-xs text-primary-foreground/60 hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
