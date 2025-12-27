import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
