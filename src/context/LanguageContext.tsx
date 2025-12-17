import { createContext, useContext, useEffect, useState } from "react";

export type Language = "pt" | "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/* 🔎 Detecta idioma do navegador */
function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "pt";

  const lang = navigator.language.toLowerCase();

  if (lang.startsWith("pt")) return "pt";
  if (lang.startsWith("es")) return "es";
  return "en"; // fallback
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    // 1️⃣ Primeiro tenta localStorage
    const saved = localStorage.getItem("language") as Language | null;

    if (saved) {
      setLanguage(saved);
    } else {
      // 2️⃣ Senão, detecta idioma do navegador
      setLanguage(detectBrowserLanguage());
    }
  }, []);

  // 3️⃣ Salva quando o usuário troca
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
