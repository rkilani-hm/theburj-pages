import { useLanguage } from "@/contexts/LanguageContext";

const ContinuitySection = () => {
  const { t } = useLanguage();

  return (
    <section id="continuity" className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-16">
          {t("continuity.title")}
        </h2>

        {/* Stacked Text Blocks */}
        <div className="max-w-3xl space-y-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("continuity.p1")}
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("continuity.p2")}
          </p>

          {/* Quote Block */}
          <blockquote className="border-l-2 border-foreground pl-8 py-4">
            <p className="text-xl md:text-2xl font-light text-foreground italic">
              {t("continuity.quote")}
            </p>
          </blockquote>
        </div>

        {/* Minimal Timeline */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="flex justify-between max-w-2xl">
            <div className="text-center">
              <p className="text-xl font-light text-foreground mb-1">2005</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Ground Breaking</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-light text-foreground mb-1">2011</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Completion</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-light text-foreground mb-1">2024</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuitySection;
