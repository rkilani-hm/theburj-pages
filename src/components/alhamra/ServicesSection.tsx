import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal, revealVariants } from "@/hooks/useScrollReveal";
import lobbyInterior from "@/assets/interior-lobby.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isInView: headerInView } = useScrollReveal();
  const { ref: contentRef, isInView: contentInView } = useScrollReveal();

  const services = [
    t("services.concierge"),
    t("services.dining"),
    t("services.conference"),
    t("services.wellness"),
    t("services.valet"),
  ];

  return (
    <section id="services" className="py-section bg-secondary relative">
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
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">04</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-headline font-light tracking-wide text-foreground mb-20"
        >
          {t("services.title")}
        </motion.h2>

        {/* Split Layout */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <motion.div 
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={revealVariants.slideLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 space-y-12"
          >
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              {t("services.intro")}
            </p>

            {/* Service List */}
            <ul className="space-y-0">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  variants={revealVariants.fadeUp}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="group flex items-center gap-4 py-5 border-b border-border last:border-0 transition-all duration-300 hover:pl-2"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Check size={16} className="text-grey-medium transition-colors duration-300 group-hover:text-foreground" />
                  </div>
                  <span className="text-foreground transition-colors duration-300 group-hover:text-foreground">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            variants={revealVariants.slideRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={lobbyInterior}
                alt="Grand lobby interior"
                className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-border -z-10" />
            <div className="absolute top-1/2 -right-3 w-6 h-px bg-muted-foreground hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
