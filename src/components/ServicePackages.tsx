import React from "react";
import "../styles/components/ServicePackages.css";
import { packagesContent } from "../content/packages";
import { useLanguage } from "../context/LanguageContext";

const ServicePackages: React.FC = () => {
  const { language } = useLanguage();
  const t = packagesContent[language];

  return (
    <section className="packages-section">
      <header className="packages-header">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </header>

      <div className="packages-grid">
        {t.packages.map((pkg) => (
          <article
            key={pkg.id}
            className={`package-card ${
              pkg.highlighted ? "highlighted" : ""
            }`}
          >
            <header className="package-header">
              <span className="package-subtitle">{pkg.subtitle}</span>
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
            </header>

            <ul className="package-features">
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a
              href="https://wa.me/5553984166749"
              target="_blank"
              rel="noopener noreferrer"
              className="package-cta"
            >
              {pkg.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages;
