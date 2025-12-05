import iconBrasil from '../assets/icones/Ativo 7icones.png';
import me from '../assets/me.png';

// IMPORTANDO SVGs COMO COMPONENTES
import {
  EmailIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
  BehanceIcon
} from '../assets/icones/icones';

export default function Header() {
  return (
    <div className="container-rodape">
      <div className="textoeilustracao">
        <div className="portfolio-title">
          <span className="linha">Portfólio</span>

          <div className="linha-grupo">
            <span className="linha2">DA</span>
            <span className="linha3">Esther</span>
          </div>
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
