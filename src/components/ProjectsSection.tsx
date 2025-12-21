import { useLanguage } from "../context/LanguageContext";
import { projectsTexts } from "../content/projectsTexts";
import "../styles/components/Projects.css";

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = projectsTexts[language];

  return (
    <>
      {/* ======== PROJETOS ======== */}
      <section id="projects" className="sessao">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>

        <div className="projects">
          <div className="project-card">
            <h3>🌙 Calendário Lunar</h3>
            <a href="https://calendario-lunar.vercel.app/" target="_blank">
              {t.visit}
            </a>
          </div>

          <div className="project-card">
            <h3>🔮 Tarot Reading</h3>
            <a href="https://tarot-jogo.vercel.app/" target="_blank">
              {t.visit}
            </a>
          </div>

          <div className="project-card">
            <h3>🎓 Landing Page TCC</h3>
            <a href="https://jouresther.netlify.app/#/" target="_blank">
              {t.visit}
            </a>
          </div>
          
          <div className="project-card">
            <h3>🎮 Jogo em Aula</h3>
            <a  href="https://adorable-stardust-e9f9ff.netlify.app/"target="_blank">
              {t.visit}
            </a>
          </div>

          <div className="project-card">
            <h3>🗓️ Advanced Calendar</h3>
            <span className="linguagens">React, TypeScript, Vercel</span>
            <span className="funcionalidades">
              Month & days, moon phases, holidays, weather, PDF export
            </span>
            <a href="https://outro-calendario.vercel.app/" target="_blank">
              {t.visit}
            </a>
          </div>
        </div>
      </section>

      {/* ======== PROCESSO ======== */}
      
    </>
  );
}
