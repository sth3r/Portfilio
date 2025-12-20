import { useScrollReveal } from "./useScrollReveal";
import { heroContent } from "../content/heroContent";
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

export default function HeroSection() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const { language } = useLanguage(); // 👈 linguagem global

  const text = heroContent[language];

  return (
    <section id="about" className="hero">
      <div className="hero-content">
        {/* Image */}
        <div
          ref={ref}
          className={`scalloped-box reveal ${visible ? "visible" : ""}`}
        />

        {/* Text */}
        <div className={`hero-text reveal ${visible ? "visible" : ""}`}>
          <h1>{text.title}</h1>

          <p className="intro">{text.intro}</p>

          <p className="highlight">{text.highlight}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              {text.projects}
            </a>
            <a href="/EstherVieiraRodrigues-Curriculum.pdf" download className="btn ghost">
              {text.contact}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
