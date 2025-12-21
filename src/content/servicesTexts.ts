// import type { Language } from "../context/LanguageContext";

type ServiceItem = {
  title: string;
  description: string;
  features: string[];
};

type ServicesTexts = {
  sectionTitle: string;
  intro: string;
  items: ServiceItem[];
};

export const servicesTexts = {
  pt: {
    sectionTitle: "Serviços",
    items: [
      {
        title: "UI/UX & Design Visual",
        description:
          "Criação de interfaces claras, funcionais e visualmente consistentes.",
        details: [
          "Design de interfaces web e mobile",
          "Identidade visual e branding",
          "Prototipagem e wireframes",
          "Design system e consistência visual",
        ],
      },
      {
        title: "Desenvolvimento Front-end",
        description:
          "Implementação de interfaces modernas, acessíveis e responsivas.",
        details: [
          "React, TypeScript e Vite",
          "HTML, CSS e JavaScript",
          "Integração com APIs",
          "Foco em performance e usabilidade",
        ],
      },
      {
        title: "Desenvolvimento Back-end",
        description:
          "Estruturação de sistemas e lógica de negócio.",
        details: [
          "Laravel, PHP e Java",
          "APIs REST",
          "Autenticação e regras de negócio",
        ],
      },
    ],
  },
};
