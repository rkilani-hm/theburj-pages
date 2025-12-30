import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useScrollReveal, revealVariants } from "@/hooks/useScrollReveal";
import panoramaCity from "@/assets/panorama-city.jpg";

const PerspectiveSection = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isInView: headerInView } = useScrollReveal();
  const { ref: imageRef, isInView: imageInView } = useScrollReveal();
  const { ref: captionRef, isInView: captionInView } = useScrollReveal();
  const { ref: viewsRef, isInView: viewsInView } = useScrollReveal();

  return (
    <section id="perspective" className="py-section bg-secondary relative">
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
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">02</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2 
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-headline font-light tracking-wide text-foreground mb-20"
        >
          {t("perspective.title")}
        </motion.h2>
      </div>

      {/* Full-width Panoramic Image */}
      <motion.div 
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={revealVariants.scaleUp}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative group"
      >
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={panoramaCity}
            alt="Kuwait City panoramic view"
            className="w-full h-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.02]"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary to-transparent" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Caption */}
        <motion.div 
          ref={captionRef}
          initial="hidden"
          animate={captionInView ? "visible" : "hidden"}
          variants={revealVariants.fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-2xl"
        >
          <blockquote className="relative">
            <span className="absolute -left-6 top-0 text-6xl text-border font-serif">"</span>
            <p className="text-xl lg:text-2xl text-foreground font-light italic leading-relaxed pl-4">
              {t("perspective.caption")}
            </p>
          </blockquote>
        </motion.div>

        {/* View Strip */}
        <motion.div 
          ref={viewsRef}
          initial="hidden"
          animate={viewsInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-3 gap-4 lg:gap-6"
        >
          {[
            { label: t("perspective.view1") || "Dawn", time: "06:00" },
            { label: t("perspective.view2") || "Noon", time: "12:00" },
            { label: t("perspective.view3") || "Dusk", time: "18:00" },
          ].map((view, i) => (
            <motion.div 
              key={i} 
              variants={revealVariants.fadeUp}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <div 
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${panoramaCity})`,
                    backgroundSize: "cover",
                    backgroundPosition: `${(i + 1) * 25}% center`,
                    filter: i === 0 ? "brightness(0.7) saturate(0.8)" : i === 2 ? "brightness(0.9) saturate(1.2) sepia(0.1)" : "none"
                  }}
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{view.label}</span>
                <span className="text-xs text-grey-medium font-mono">{view.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerspectiveSection;
