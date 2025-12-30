import { useLanguage } from "@/contexts/LanguageContext";

const PerspectiveSection = () => {
  const { t } = useLanguage();

  return (
    <section id="perspective" className="py-section bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-16">
          {t("perspective.title")}
        </h2>

        {/* Panoramic Image Placeholder */}
        <div className="aspect-[21/9] bg-muted flex items-center justify-center mb-8">
          <div className="text-center text-muted-foreground">
            <div className="w-32 h-16 mx-auto mb-4 border-2 border-dashed border-grey-soft flex items-center justify-center">
              <span className="text-xs uppercase tracking-wider">Panorama</span>
            </div>
            <p className="text-xs uppercase tracking-wider">Full-width panoramic view</p>
          </div>
        </div>

        {/* Caption */}
        <p className="text-lg text-muted-foreground text-center italic">
          {t("perspective.caption")}
        </p>

        {/* Optional View Strip */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-[16/9] bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                View {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;
