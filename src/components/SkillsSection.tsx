import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { skillsTexts } from "../content/skillsTexts";
import "../styles/components/Skills.css";

export default function SkillsSection() {
  const { language } = useLanguage();
  const skills = skillsTexts[language];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="sessao skills-section" id="habilidades">
      <h2>{skills.sectionTitle}</h2>

      <div className="skills-accordion">
        {skills.groups.map((group, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`skill-accordion-item ${isOpen ? "open" : ""}`}
            >
              <button
                className="skill-accordion-title"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
              >
                {group.title}
                <span className="accordion-icon">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="skill-items">
                  {group.items.map((item, i) => (
                    <span key={i} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
