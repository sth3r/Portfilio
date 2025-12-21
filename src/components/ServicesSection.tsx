import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { servicesTexts } from "../content/servicesTexts";
import type { ServicesTexts, ServiceItem } from "../content/servicesTexts";
import "../styles/components/Services.css";

export default function ServicesSection() {
  const { language } = useLanguage();
  const services: ServicesTexts = servicesTexts[language] ?? servicesTexts.pt;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="sessao services-section" id="servicos">
      <h2>{services.sectionTitle}</h2>

      <div className="services-accordion">
        {services.items.map((service: ServiceItem, idx: number) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className={`service-card ${isOpen ? "open" : ""}`}>
              <button className="service-header" onClick={() => toggle(idx)} aria-expanded={isOpen}>
                <span className="service-title">{service.title}</span>
                <span className="service-icon">{isOpen ? "–" : "+"}</span>
              </button>

              <div className="service-content">
                <p className="service-description">{service.description}</p>

                <ul className="service-list">
                  {service.details.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
