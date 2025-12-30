import { Route, Plane, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();

  const accessPoints = [
    { icon: Route, label: t("location.highway") },
    { icon: Plane, label: t("location.airport") },
    { icon: Building, label: t("location.district") },
  ];

  return (
    <section id="location" className="py-section bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-16">
          {t("location.title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Map Placeholder */}
          <div className="aspect-[4/3] bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-32 h-24 mx-auto mb-4 border-2 border-dashed border-grey-soft flex items-center justify-center">
                <span className="text-xs uppercase tracking-wider">Map</span>
              </div>
              <p className="text-xs uppercase tracking-wider">Location visual</p>
            </div>
          </div>

          {/* Text & Access Points */}
          <div className="space-y-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("location.desc")}
            </p>

            {/* Access Points */}
            <div className="space-y-6">
              {accessPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted flex items-center justify-center">
                    <point.icon size={18} className="text-muted-foreground" />
                  </div>
                  <span className="text-foreground">{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
