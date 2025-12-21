import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../content/texts";
import "./Navbar.css";

export default function Navbar() {
  const { language } = useLanguage();
  const t = texts[language];
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      {/* LEFT — vazio (equilíbrio visual) */}
      <div className="navbar-spacer" />

      {/* CENTER — menu */}
      <nav className={`navbar-pill ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <a href="#about" className="nav-item">
          {t.nav.about}
        </a>
        <a href="#curriculo" className="nav-item">
          {t.nav.curriculo}
        </a>
        <a href="#habilidades" className="nav-item">
          {t.nav.skills}
        </a>

        <a href="#projects" className="nav-item">
          {t.nav.projects}
        </a>
        <a href="#processo" className="nav-item">
          {t.nav.processo}
        </a>
      </nav>

      <div className="right-controls">
        {/* Language switcher stays outside the collapsible menu */}
        <LanguageSwitcher />

        {/* Hamburger — visible on small screens */}
        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}
