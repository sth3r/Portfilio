export type SkillGroup = {
  title: string;
  items: string[];
};

export type SkillsTexts = {
  sectionTitle: string;
  subtitle?: string;
  groups: SkillGroup[];
};

export const skillsTexts: Record<"pt" | "en" | "es", SkillsTexts> = {
  pt: {
    sectionTitle: "Habilidades",
    subtitle:
      "Trabalho nas duas pontas — visual e técnica — com profundidade em cada uma.",
    groups: [
      {
        title: "Design & Identidade Visual",
        items: [
          "UI Design",
          "UX",
          "Identidade Visual & Branding",
          "Design de Logotipos",
          "Design Editorial",
          "Tipografia",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
        ],
      },
      {
        title: "Frontend & Interfaces",
        items: [
          "HTML & CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Expo",
          "Web Design Responsivo",
          "Acessibilidade (WCAG)",
        ],
      },
      {
        title: "Backend & Dados",
        items: [
          "PHP & Laravel",
          "Java",
          "Integração Front-end / Back-end",
          "SQL",
          "MongoDB",
          "Cloud Firestore",
          "Modelagem de Dados",
        ],
      },
      {
        title: "Processo & Metodologia",
        items: [
          "Análise de Requisitos",
          "Metodologias Ágeis",
          "Git & GitHub",
          "Ciclo de Vida de Software (SDLC)",
          "Testes e Qualidade",
          "Produção de Conteúdo Digital",
        ],
      },
    ],
  },

  en: {
    sectionTitle: "Skills",
    subtitle:
      "I work on both ends — visual and technical — with depth in each.",
    groups: [
      {
        title: "Design & Visual Identity",
        items: [
          "UI Design",
          "UX",
          "Visual Identity & Branding",
          "Logo Design",
          "Editorial Design",
          "Typography",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
        ],
      },
      {
        title: "Frontend & Interfaces",
        items: [
          "HTML & CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Expo",
          "Responsive Web Design",
          "Accessibility (WCAG)",
        ],
      },
      {
        title: "Backend & Data",
        items: [
          "PHP & Laravel",
          "Java",
          "Front-end / Back-end Integration",
          "SQL",
          "MongoDB",
          "Cloud Firestore",
          "Data Modeling",
        ],
      },
      {
        title: "Process & Methodology",
        items: [
          "Requirements Analysis",
          "Agile Methodologies",
          "Git & GitHub",
          "Software Development Life Cycle (SDLC)",
          "Testing & Quality",
          "Digital Content Production",
        ],
      },
    ],
  },

  es: {
    sectionTitle: "Habilidades",
    subtitle:
      "Trabajo en ambos extremos — visual y técnico — con profundidad en cada uno.",
    groups: [
      {
        title: "Diseño & Identidad Visual",
        items: [
          "Diseño UI",
          "UX",
          "Identidad Visual & Branding",
          "Diseño de Logotipos",
          "Diseño Editorial",
          "Tipografía",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
        ],
      },
      {
        title: "Frontend & Interfaces",
        items: [
          "HTML & CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Expo",
          "Diseño Web Responsivo",
          "Accesibilidad (WCAG)",
        ],
      },
      {
        title: "Backend & Datos",
        items: [
          "PHP & Laravel",
          "Java",
          "Integración Front-end / Back-end",
          "SQL",
          "MongoDB",
          "Cloud Firestore",
          "Modelado de Datos",
        ],
      },
      {
        title: "Proceso & Metodología",
        items: [
          "Análisis de Requisitos",
          "Metodologías Ágiles",
          "Git & GitHub",
          "Ciclo de Vida del Software (SDLC)",
          "Pruebas y Calidad",
          "Producción de Contenido Digital",
        ],
      },
    ],
  },
};