import Header from "../components/Header";
import HeroSection from "../components/hero";
import Footer from "../components/Footer";
// import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ResumeSection from "../components/ResumeSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import ProcessPreview from "../components/ProcessPreview";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import ConstructionScreen from "./components/ConstructionScreen";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Header />

      {/* 1️⃣ Posicionamento claro */}
      <HeroSection />

     
      {/* 2️⃣ O que você faz (valor imediato) */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* 3️⃣ Profundidade técnica (rápido p/ recrutador) */}
      <SkillsSection />

      {/* 4️⃣ Provas reais */}
      <ProjectsSection />

      {/* 5️⃣ Como você trabalha (confiança p/ clientes) */}
      <ProcessPreview />

      {/* 6️⃣ Credibilidade formal */}
      <ResumeSection />

      <Footer />
    </>
  );
}
