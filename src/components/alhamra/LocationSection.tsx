import { Route, Plane, Building, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useScrollReveal, revealVariants } from "@/hooks/useScrollReveal";

const LocationSection = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isInView: headerInView } = useScrollReveal();
  const { ref: contentRef, isInView: contentInView } = useScrollReveal();

  const accessPoints = [
    { icon: Route, label: t("location.highway"), detail: t("location.highway.detail") || "Direct access to major routes" },
    { icon: Plane, label: t("location.airport"), detail: t("location.airport.detail") || "20 minutes to Kuwait International" },
    { icon: Building, label: t("location.district"), detail: t("location.district.detail") || "Heart of the business district" },
  ];

  return (
    <section id="location" className="py-section bg-secondary relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">06</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-headline font-light tracking-wide text-foreground mb-20"
        >
          {t("location.title")}
        </motion.h2>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Map Placeholder - Stylized */}
          <motion.div 
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={revealVariants.scaleUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-[4/3] bg-muted overflow-hidden">
              {/* Stylized map representation */}
              <div className="w-full h-full relative bg-gradient-to-br from-stone to-stone-warm">
                {/* Grid pattern */}
                <div className="absolute inset-0 architectural-grid opacity-30" />
                
                {/* Location pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border-2 border-foreground/40 flex items-center justify-center">
                        <MapPin size={16} className="text-foreground" />
                      </div>
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-foreground/10 animate-ping" style={{ animationDuration: "2s" }} />
                  </div>
                </div>

                {/* Abstract roads */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-0 right-0 h-px bg-border" />
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-border" />
                  <div className="absolute top-0 bottom-0 left-1/3 w-px bg-border" />
                  <div className="absolute top-0 bottom-0 right-1/4 w-px bg-border" />
                </div>

                {/* Location label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    29.3759° N, 47.9774° E
                  </p>
                  <p className="text-sm text-foreground mt-1">Kuwait City, Kuwait</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text & Access Points */}
          <motion.div 
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={revealVariants.slideRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              {t("location.desc")}
            </p>

            {/* Access Points */}
            <div className="space-y-8">
              {accessPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={revealVariants.fadeUp}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group flex items-start gap-6"
                >
                  <div className="w-14 h-14 border border-border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-muted group-hover:border-muted-foreground">
                    <point.icon size={20} className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">{point.label}</h3>
                    <p className="text-sm text-muted-foreground">{point.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
