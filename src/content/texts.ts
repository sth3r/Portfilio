import type { Language } from "../context/LanguageContext";

// ⚠️ ATENÇÃO: o bloco `hero` abaixo pode estar duplicando heroContent.ts.
// Verifique qual dos dois é importado no componente hero.tsx e remova o outro.
// Se heroContent.ts for o usado, delete o tipo HeroTexts e o campo hero daqui.

type HeroTexts = {
  title: string;
  intro: string;
  highlight: string;
  projects: string;
  contact: string;
};

type HeaderTexts = {
  mode: "split" | "possessive";
  line1: string;
  prefix?: string;
  name: string;
};

type FooterTexts = {
  contact: string;
  rights: string;
};

type NavTexts = {
  about: string;
  projects: string;
  curriculo: string;
  skills: string;
  processo: string;
  services: string;
};

export type AppTexts = {
  header: HeaderTexts;
  hero: HeroTexts;
  footer: FooterTexts;
  nav: NavTexts;
};

export const texts: Record<Language, AppTexts> = {
  pt: {
    nav: {
      about: "Sobre mim",
      projects: "Projetos",
      services: "Serviços",
      curriculo: "Currículo",
      skills: "Habilidades",
      processo: "Processo",
    },
    header: {
      mode: "split",
      line1: "Portfólio",
      prefix: "DA",
      name: "Esther",
    },
    // Se heroContent.ts for o usado no componente, este bloco pode ser removido.
    hero: {
      title: "Olá! Sou Esther Rodrigues",
      intro:
        "Design e tecnologia sob o mesmo teto — do visual ao funcional, sem depender de outra pessoa.",
      highlight:
        "Formada em Sistemas para Internet e Design Gráfico, entrego desde a identidade visual até o sistema rodando: UI/UX, front-end, back-end e comunicação de marca integrados em uma visão só.",
      projects: "O que eu faço",
      contact: "Baixar currículo",
    },
    footer: {
      contact: "Contato",
      rights: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      curriculo: "Resume",
      skills: "Skills",
      processo: "Process",
      services: "Services",
    },
    header: {
      mode: "possessive",
      line1: "Esther's",
      name: "Portfolio",
    },
    hero: {
      title: "Hi! I'm Esther Rodrigues",
      intro:
        "Design and technology under one roof — from the visual to the functional, no middleman needed.",
      highlight:
        "Trained in both Internet Systems and Graphic Design, I deliver from brand identity to working systems: UI/UX, front-end, back-end, and visual communication driven by a single, unified vision.",
      projects: "What I do",
      contact: "Download resume",
    },
    footer: {
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      curriculo: "Currículum",
      skills: "Habilidades",
      processo: "Proceso",
      services: "Servicios",
    },
    header: {
      mode: "split",
      line1: "Portafolio",
      prefix: "DE",
      name: "Esther",
    },
    hero: {
      title: "¡Hola! Soy Esther Rodrigues",
      intro:
        "Diseño y tecnología bajo el mismo techo — de lo visual a lo funcional, sin intermediarios.",
      highlight:
        "Con formación en Sistemas de Internet y Diseño Gráfico, entrego desde la identidad visual hasta el sistema funcionando: UI/UX, front-end, back-end y comunicación de marca con una visión unificada.",
      projects: "Qué hago",
      contact: "Descargar mi currículum",
    },
    footer: {
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
  },
};