import { useLanguage } from "../context/LanguageContext";
import { processPreviewTexts } from "../content/processPreviewTexts";
// usando <a> em vez de react-router-dom Link para evitar dependência
import "../styles/components/ProcessPreview.css";

export default function ProcessPreview() {
  const { language } = useLanguage();
  const text = processPreviewTexts[language];

  return (
    <section className="sessao process-preview" id="processo">
      <h2>{text.sectionTitle}</h2>
      <p className="process-preview-description">{text.description}</p>

      <ul className="process-preview-steps">
        {text.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>

      <div className="process-preview-cta">
        <a href="/servicos" className="btn primary">
          {text.cta}
        </a>
      </div>
    </section>
  );
}
