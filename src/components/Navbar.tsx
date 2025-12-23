import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { texts } from "../content/texts";
import "../styles/components/Navbar.css";

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
        <Link to={{ pathname: "/", hash: "#about" }} className="nav-item">
          {t.nav.about}
        </Link>
        <Link to={{ pathname: "/", hash: "#services" }} className="nav-item">
          {t.nav.services}
        </Link>
        <Link to={{ pathname: "/", hash: "#habilidades" }} className="nav-item">
          {t.nav.skills}
        </Link>
        <Link to={{ pathname: "/", hash: "#projects" }} className="nav-item">
          {t.nav.projects}
        </Link>
        <Link to={{ pathname: "/", hash: "#processo" }} className="nav-item">
          {t.nav.processo}
        </Link>
        <Link to={{ pathname: "/", hash: "#curriculo" }} className="nav-item">
          {t.nav.curriculo}
        </Link>
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
