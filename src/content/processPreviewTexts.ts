import type { Language } from "../context/LanguageContext";

export type ProcessPreviewTexts = {
  sectionTitle: string;
  description: string;
  steps: string[];
  cta: string;
};

export const processPreviewTexts: Record<Language, ProcessPreviewTexts> = {
  pt: {
    sectionTitle: "Processo de Trabalho",
    description:
      "Cada serviço é desenvolvido a partir de um processo estruturado que integra pesquisa, design, desenvolvimento e validação técnica.",
    steps: [
      "Pesquisa e entendimento do negócio, público e objetivos",
      "UI/UX design, referências visuais e prototipação",
      "Definição técnica: front-end, back-end, ferramentas e segurança",
      "Desenvolvimento, testes, otimização e entrega",
    ],
    cta: "Ver serviços e processo completo",
  },

  en: {
    sectionTitle: "Work Process",
    description:
      "Each service is developed through a structured process that integrates research, design, development, and technical validation.",
    steps: [
      "Research and understanding of business, audience, and goals",
      "UI/UX design, visual references, and prototyping",
      "Technical planning: front-end, back-end, tools, and security",
      "Development, testing, optimization, and delivery",
    ],
    cta: "View services and full process",
  },

  es: {
    sectionTitle: "Proceso de Trabajo",
    description:
      "Cada servicio se desarrolla a través de un proceso estructurado que integra investigación, diseño, desarrollo y validación técnica.",
    steps: [
      "Investigación y comprensión del negocio, público y objetivos",
      "Diseño UI/UX, referencias visuales y prototipado",
      "Definición técnica: front-end, back-end, herramientas y seguridad",
      "Desarrollo, pruebas, optimización y entrega",
    ],
    cta: "Ver servicios y proceso completo",
  },
};
  