import { useLanguage } from "../context/LanguageContext";
import { servicesTexts } from "../content/servicesPreviewTexts";
import "../styles/components/Services.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConstructionScreen from "../components/ConstructionScreen";

export default function ServicesPage() {
  const { language } = useLanguage();
  const content = servicesTexts[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // small timeout to ensure element exists/rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  return (
      <section className="sessao services-section" id="services">
        <Navbar />
        <ConstructionScreen />
      <h2>{content.sectionTitle}</h2>
      <p className="services-intro">{content.sectionIntro}</p>

      <div className="services-list">
        {content.services.map((service, index) => (
          <details
            key={index}
            className="service-item"
            open={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <summary className="service-title">{service.title}</summary>
            <p className="service-description">{service.description}</p>
          </details>
        ))}
      </div>

      <div className="services-cta">
        <a href="/servicos" className="btn primary">
          {content.cta}
        </a>
      </div>
    </section>
  );
}
