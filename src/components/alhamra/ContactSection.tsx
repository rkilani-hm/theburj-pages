import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-8">
          {t("contact.title")}
        </h2>

        <p className="text-lg text-muted-foreground mb-16 max-w-xl">
          {t("contact.intro")}
        </p>

        {/* Contact Form */}
        <form className="max-w-xl space-y-8">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("contact.name")}
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
              disabled
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("contact.email")}
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
              disabled
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("contact.subject")}
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors"
              disabled
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground uppercase tracking-wider">
              {t("contact.message")}
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              disabled
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="px-8 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-wider hover:bg-foreground transition-colors"
            disabled
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
