import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { resumeTexts } from "../content/resumeTexts";

export default function Resume() {
  const { language } = useLanguage();
  const resume = resumeTexts[language];

  return (
    <section id="curriculo" className="sessao resume">
      {/* <h2>{resume.pageTitle}</h2>
      <a href={resume.downloadLink} download className="botao-curriculo">
        {resume.download}
      </a> */}

      <div className="resume-container">
        {resume.sections.map((section, sIdx) => (
          <div key={sIdx} className="resume-section">
            <div className="timeline">
              {/* Título da seção em coluna separada */}
              <div className="timeline-title-column">
                <h3>{section.title}</h3>
              </div>

              <div className="timeline-items-column">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="timeline-item">
                    {item.period && <div className="timeline-year">{item.period}</div>}
                    <div className="timeline-content">
                      <strong>{item.title}</strong>
                      {item.subtitle && <span className="subtitle"> — {item.subtitle}</span>}
                      {/* {item.description && <p>{item.description}</p>} */}
                    </div>
                    {iIdx < section.items.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
