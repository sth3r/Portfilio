// src/content/projectsTexts.ts
// processContent removido — estava duplicando o ProcessPreview da Home.
// Se necessário no futuro, reutilize o componente ProcessPreview diretamente.

import type { Language } from "../context/LanguageContext";

export const projectsTexts: Record<
  Language,
  {
    title: string;
    subtitle: string;
    visit: string;
  }
> = {
  pt: {
    title: "Projetos",
    subtitle:
      "Trabalhos reais — com contexto, decisões e o raciocínio por trás de cada escolha",
    visit: "Ver projeto",
  },

  en: {
    title: "Projects",
    subtitle:
      "Real work — with context, decisions, and the reasoning behind each choice",
    visit: "View project",
  },

  es: {
    title: "Proyectos",
    subtitle:
      "Trabajo real — con contexto, decisiones y el razonamiento detrás de cada elección",
    visit: "Ver proyecto",
  },
};