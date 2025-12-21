import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import HeroSection from "./components/hero";
import Footer from "./components/Footer";
// import LanguageSwitcher from "./components/LanguageSwitcher";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ProcessSection from "./components/ProcessSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
// import ConstructionScreen from "./components/ConstructionScreen";

export default function App() {
  return (
    <LanguageProvider>
       {/* <ConstructionScreen /> ← primeira tela */}
      <Navbar />
      {/* <LanguageSwitcher /> */}
      <Header />
      <HeroSection />
      <SkillsSection/>
      {/* <ServicesSection/> */}
      <ResumeSection />
      <ProjectsSection />
      <ProcessSection />
      <Footer />
    </LanguageProvider>
  );
}
