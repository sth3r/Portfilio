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
import { useNavigate } from "react-router-dom";
// import ConstructionScreen from "./components/ConstructionScreen";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Header />

      {/* 1️⃣ Posicionamento claro */}
      <HeroSection />

      {/* Botão que usa DOM para rolar até a seção de serviços */}
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <button
          onClick={() => {
            // navegar para a página de serviços usando react-router-dom
            try {
              if (navigate) navigate("/servicos");
            } catch (e) {
              // fallback: localização direta
              window.location.href = "/servicos";
            }
          }}
          aria-label="Ver serviços"
          style={{ cursor: "pointer" }}
        >
          Ver serviços
        </button>
      </div>

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
