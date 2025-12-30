import { useLanguage } from "@/contexts/LanguageContext";

const PresenceSection = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t("presence.height"), value: t("presence.height.value") },
    { label: t("presence.year"), value: t("presence.year.value") },
    { label: t("presence.location"), value: t("presence.location.value") },
  ];

  return (
    <section id="presence" className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-16">
          {t("presence.title")}
        </h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Column */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("presence.p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("presence.p2")}
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="aspect-[4/5] bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 mx-auto mb-4 border-2 border-dashed border-grey-soft flex items-center justify-center">
                <span className="text-xs uppercase tracking-wider">Image</span>
              </div>
              <p className="text-xs uppercase tracking-wider">Architectural visual</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-3xl font-light text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
