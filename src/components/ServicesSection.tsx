import { useLanguage } from "../context/LanguageContext";
import { servicesTexts } from "../content/servicesPreviewTexts";
import "../styles/components/ServicesPreview.css";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = servicesTexts[language];

  return (
    <section className="sessao services-section" id="services">
      <header className="services-header">
        <h2>{content.sectionTitle}</h2>
        <p className="services-intro">{content.sectionIntro}</p>
      </header>

      <div className="services-grid">
  {content.services.map((service, index) => (
    <article key={index} className="service-card fade-up">
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>

      <span className="service-link">
        {content.viewMore}
      </span>
    </article>
  ))}

  {/* CTA Card */}
  <Link to="/servicos" className="service-card service-cta-card fade-up">
    <h3>{content.ctaTitle}</h3>
    <p>{content.ctaDescription}</p>
    <span className="service-link">{content.cta}</span>
  </Link>
</div>

      
    </section>
  );
}
