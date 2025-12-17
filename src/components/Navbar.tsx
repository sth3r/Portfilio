import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../content/texts";

export default function Navbar() {
  const { language } = useLanguage();
  const t = texts[language];

  return (
    <header className="navbar">
      {/* LEFT — vazio (equilíbrio visual) */}
      <div className="navbar-spacer" />

      {/* CENTER — menu */}
      <nav className="navbar-pill">
        <a href="#about" className="nav-item">
          {t.nav.about}
        </a>
        <a href="#curriculo" className="nav-item">
          {t.nav.curriculo}
        </a>

        <a href="#projects" className="nav-item">
          {t.nav.projects}
        </a>
        <a href="#processo" className="nav-item">
          {t.nav.processo}
        </a>
      </nav>
      {/* RIGHT — language */}
      <LanguageSwitcher />
    </header>
  );
}
