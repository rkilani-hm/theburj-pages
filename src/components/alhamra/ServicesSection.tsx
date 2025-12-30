import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    t("services.concierge"),
    t("services.dining"),
    t("services.conference"),
    t("services.wellness"),
    t("services.valet"),
  ];

  return (
    <section id="services" className="py-section bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-16">
          {t("services.title")}
        </h2>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Column */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("services.intro")}
            </p>

            {/* Service List */}
            <ul className="space-y-4 pt-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-foreground border-b border-border pb-4 last:border-0"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="aspect-[4/3] bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-24 h-24 mx-auto mb-4 border-2 border-dashed border-grey-soft flex items-center justify-center">
                <span className="text-xs uppercase tracking-wider">Image</span>
              </div>
              <p className="text-xs uppercase tracking-wider">Interior visual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
