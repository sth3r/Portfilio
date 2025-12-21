import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import HeroSection from "./components/hero";
import Footer from "./components/Footer";
// import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
import ProcessPreview from "./components/ProcessPreview";
// import ConstructionScreen from "./components/ConstructionScreen";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Header />

      {/* 1️⃣ Posicionamento claro */}
      <HeroSection />

      {/* 2️⃣ O que você faz (valor imediato) */}
      <ServicesSection />

      {/* 3️⃣ Profundidade técnica (rápido p/ recrutador) */}
      <SkillsSection />

      {/* 4️⃣ Provas reais */}
      <ProjectsSection />

      {/* 5️⃣ Como você trabalha (confiança p/ clientes) */}
      <ProcessPreview />

      {/* 6️⃣ Credibilidade formal */}
      <ResumeSection />

      <Footer />
    </LanguageProvider>
  );
}
