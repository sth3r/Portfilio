import { motion } from "framer-motion";
import { services } from "../content/services.data";
import { useLanguage, Language } from "../context/LanguageContext";
import { servicesTexts } from "../content/servicesPreviewTexts";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { useState } from "react";

export default function ServicesSection() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const t = servicesTexts[language as Language];

  return (
    <section className="services-section">
      <header className="services-header">
        <h2>{t.sectionTitle}</h2>
        <p>{t.sectionIntro}</p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard service={service} lang={language} />
          </motion.div>
        ))}
      </div>

      <div className="services-cta">
        <button onClick={() => setOpen(true)} className="cta-button">
          {t.cta}
        </button>
      </div>

      {open && <ServiceModal onClose={() => setOpen(false)} />}
    </section>
  );
}
