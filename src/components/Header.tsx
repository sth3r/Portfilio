import iconBrasil from "../assets/icones/Ativo 7icones.png";
import me from "../assets/me.png";

import {
  EmailIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  BehanceIcon,
} from "../assets/icones/icones";

import { useLanguage } from "../context/LanguageContext";
import { texts } from "../content/texts";

export default function Header() {
  const { language } = useLanguage();
  const h = texts[language].header;

  return (
    <div className="container-rodape">
      <div className="textoeilustracao">
        <div className="portfolio-title">
          {h.mode === "split" ? (
            <>
              <span className="linha">{h.line1}</span>

              <div className="linha-grupo">
                <span className="linha2">{h.prefix}</span>
                <span className="linha3">{h.name}</span>
              </div>
            </>
          ) : (
            <>
              <span className="linha">{h.line1}</span>
              <span className="linha3">{h.name}</span>
            </>
          )}
        </div>

        <img src={me} alt="ilustração" className="construction" />
      </div>

      <div className="iconesrodape">
        <a href="mailto:vrodrigues.esther@gmail.com" aria-label="Email">
          <EmailIcon className="icone" />
        </a>

        <a
          href="https://www.linkedin.com/in/esther-rodrigues/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="icone" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon className="icone" />
        </a>

        <a
          href="https://github.com/sth3r"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon className="icone" />
        </a>

        <a
          href="https://www.behance.net/esthervrodrigues"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
        >
          <BehanceIcon className="icone" />
        </a>

        <img src={iconBrasil} alt="Brasil" className="icone icone-img" />
      </div>
    </div>
  );
}
