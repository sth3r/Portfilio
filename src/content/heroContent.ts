import type { Language } from "../context/LanguageContext";

export const heroContent: Record<Language, {
  title: string;
  intro: string;
  highlight: string;
  projects: string;
  contact: string;
}> = {
  pt: {
    title: "Olá! Sou Esther Rodrigues",
    intro:
      "Design e tecnologia sob o mesmo teto — do visual ao funcional, sem depender de outra pessoa.",
    highlight:
      "Formada em Sistemas para Internet e Design Gráfico, entrego desde a identidade visual até o sistema rodando: UI/UX, front-end, back-end e comunicação de marca integrados em uma visão só.",
    projects: "O que eu faço",
    contact: "Baixar currículo",
  },

  en: {
    title: "Hi! I'm Esther Rodrigues",
    intro:
      "Design and technology under one roof — from the visual to the functional, no middleman needed.",
    highlight:
      "Trained in both Internet Systems and Graphic Design, I deliver from brand identity to working systems: UI/UX, front-end, back-end, and visual communication driven by a single, unified vision.",
    projects: "What I do",
    contact: "Download resume",
  },

  es: {
    title: "¡Hola! Soy Esther Rodrigues",
    intro:
      "Diseño y tecnología bajo el mismo techo — de lo visual a lo funcional, sin intermediarios.",
    highlight:
      "Con formación en Sistemas de Internet y Diseño Gráfico, entrego desde la identidad visual hasta el sistema funcionando: UI/UX, front-end, back-end y comunicación de marca con una visión unificada.",
    projects: "Qué hago",
    contact: "Descargar mi currículum",
  },
};