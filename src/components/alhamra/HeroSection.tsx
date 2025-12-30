import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-muted">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-32 h-32 mx-auto mb-4 border-2 border-dashed border-grey-soft flex items-center justify-center">
              <span className="text-xs uppercase tracking-wider">Tower Image</span>
            </div>
            <p className="text-xs uppercase tracking-wider">Full-width visual placeholder</p>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4">
          {t("hero.headline")}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
          {t("hero.subline")}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-grey-soft" />
      </div>
    </section>
  );
};

export default HeroSection;
