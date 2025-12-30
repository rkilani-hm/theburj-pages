import { Building2, Users, Server, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BusinessSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Building2,
      title: t("business.offices"),
      description: t("business.offices.desc"),
    },
    {
      icon: Users,
      title: t("business.environment"),
      description: t("business.environment.desc"),
    },
    {
      icon: Server,
      title: t("business.infrastructure"),
      description: t("business.infrastructure.desc"),
    },
    {
      icon: Headphones,
      title: t("business.support"),
      description: t("business.support.desc"),
    },
  ];

  return (
    <section id="business" className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-16">
          {t("business.title")}
        </h2>

        {/* Grid of Content Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Icon Placeholder */}
              <div className="w-12 h-12 bg-muted flex items-center justify-center">
                <item.icon size={20} className="text-muted-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
