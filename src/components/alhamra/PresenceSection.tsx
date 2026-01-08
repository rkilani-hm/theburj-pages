import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useScrollReveal, revealVariants } from "@/hooks/useScrollReveal";
import towerSunset from "@/assets/tower-sunset.png";
import towerBW from "@/assets/tower-bw-1.png";

const PresenceSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isInView } = useScrollReveal();
  const { ref: imageRef, isInView: imageInView } = useScrollReveal();
  const { ref: statsRef, isInView: statsInView } = useScrollReveal();

  const stats = [
    { label: t("presence.height"), value: t("presence.height.value") },
    { label: t("presence.year"), value: t("presence.year.value") },
    { label: t("presence.location"), value: t("presence.location.value") },
  ];

  return (
    <section id="presence" className="py-section bg-background relative texture-noise">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div 
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">01</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-headline font-light tracking-wide text-foreground mb-20"
        >
          {t("presence.title")}
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={revealVariants.slideLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:pr-8"
          >
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              {t("presence.p1")}
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              {t("presence.p2")}
            </p>
          </motion.div>

          {/* Images Grid */}
          <motion.div 
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={revealVariants.slideRight}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={towerSunset}
                  alt="Al Hamra Tower at sunset"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border border-border -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={towerBW}
                  alt="Al Hamra Tower architectural detail"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center border border-border">
                <div className="text-center p-4">
                  <span className="text-4xl font-light text-foreground">412m</span>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Architectural Height</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                variants={revealVariants.fadeUp}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center lg:text-left"
              >
                <p className="text-3xl lg:text-5xl font-light text-foreground mb-3 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PresenceSection;
