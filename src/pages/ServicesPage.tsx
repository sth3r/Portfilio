import React from "react";
import "../styles/components/Services.css";
import { servicesContent } from "../content/servicesTexts";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import ServicePackages from "../components/ServicePackages";

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const t = servicesContent[language];

  return (
    <section className="services-section">
      <Navbar />
      <header className="services-header">
        <h1>{t.title}</h1>
        <p>{t.description}</p>
      </header>

      {/* Grid invisível (desktop) */}
      <div className="services-grid">
        {t.groups.map((group) => (
          <article key={group.category} className="service-card">
            <h2>{group.category}</h2>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <a
          href="https://wa.me/5553984166749"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          aria-label={t.cta}
        >
          {t.cta}
        </a>
      </div>

      <ServicePackages />
    </section>
  );
};

export default ServicesPage;
