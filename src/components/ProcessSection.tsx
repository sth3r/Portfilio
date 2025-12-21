import { useLanguage } from "../context/LanguageContext";
import { projectsTexts } from "../content/projectsTexts";
import "../styles/components/Projects.css";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = projectsTexts[language];

  return (
    <>
      <section id="processo" className="sessao processos">
        <h2>{t.processTitle}</h2>

        <details className="processo-detalhes">
          <summary>{t.processSummary}</summary>
          <div className="conteudo">
            {t.processContent.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </details>
      </section>

</>
  );
}
