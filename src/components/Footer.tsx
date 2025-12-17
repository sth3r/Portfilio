import { useLanguage } from "../context/LanguageContext";
import { texts } from "../content/texts";

export default function Footer() {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <footer id="contato" className="footer">
      <p>
        {t.footer.contact}:
        <a href="mailto:vrodrigues.esther@gmail.com">
          vrodrigues.esther@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/esther-rodrigues/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        {/* |{" "}
        <a href="https://github.com/sth3r" target="_blank">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://www.behance.net/esthervrodrigues" target="_blank">
          Behance
        </a> */}
      </p>

      <p>
        © 2025 Esther Rodrigues — {t.footer.rights}
      </p>
    </footer>
  );
}
