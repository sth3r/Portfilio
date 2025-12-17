// src/content/projectsTexts.ts
import type { Language } from "../context/LanguageContext";

export const projectsTexts: Record<
  Language,
  {
    title: string;
    subtitle: string;
    visit: string;
    processTitle: string;
    processSummary: string;
    processContent: string[];
  }
> = {
  pt: {
    title: "Projetos",
    subtitle:
      "Veja alguns de meus projetos — alguns finalizados, outros em constante evolução",
    visit: "Visitar projeto",
    processTitle: "💡 Processo de Criação",
    processSummary: "Como é o meu processo de criação",
    processContent: [
      "Antes de iniciar qualquer projeto, realizo uma pesquisa aprofundada sobre o tema e o cliente.",
      "Em seguida, faço uma curadoria de referências visuais e prototipação no Figma.",
      "Com o design definido, escolho as tecnologias conforme as funcionalidades necessárias.",
      "Responsividade, otimização e testes fazem parte do processo.",
      "Após o lançamento, realizo o acompanhamento de métricas.",
    ],
  },

  en: {
    title: "Projects",
    subtitle:
      "Take a look at some of my projects — some completed, others constantly evolving",
    visit: "View project",
    processTitle: "💡 Creation Process",
    processSummary: "How my creation process works",
    processContent: [
      "Before starting any project, I conduct in-depth research about the client and the subject.",
      "Then I curate visual references and start prototyping in Figma.",
      "Once the design is defined, I choose the technologies according to the required features.",
      "Responsiveness, optimization, and testing are part of the process.",
      "After launch, I track metrics and performance.",
    ],
  },

  es: {
    title: "Proyectos",
    subtitle:
      "Mira algunos de mis proyectos — algunos finalizados, otros en constante evolución",
    visit: "Visitar proyecto",
    processTitle: "💡 Proceso de Creación",
    processSummary: "Cómo es mi proceso de creación",
    processContent: [
      "Antes de iniciar cualquier proyecto, realizo una investigación profunda sobre el cliente y el tema.",
      "Luego hago una curaduría de referencias visuales y prototipado en Figma.",
      "Con el diseño definido, elijo las tecnologías según las funcionalidades necesarias.",
      "La responsividad, optimización y pruebas forman parte del proceso.",
      "Después del lanzamiento, realizo el seguimiento de métricas.",
    ],
  },
};
