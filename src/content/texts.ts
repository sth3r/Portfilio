import type { Language } from "../context/LanguageContext";

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
      about: "Quem sou eu",
      projects: "Projetos",
      services: "Serviços",
      curriculo: "Currículo",
      skills: "Habilidades",
      processo: "Processo criativo",
    },
    header: {
      mode: "split",
      line1: "Portfólio",
      prefix: "DA",
      name: "Esther",
    },
    hero: {
      title: "Olá! Sou Esther Rodrigues",
      intro:
        "Sou apaixonada por design e desenvolvimento web, com foco em criar experiências digitais que unem estética, funcionalidade e propósito.",
      highlight:
        "Atuo com UI/UX design, front-end e identidade visual, transformando ideias em interfaces claras, intuitivas e visualmente marcantes.",
      projects: "Ver Projetos",
      contact: "Baixar Currículo",
    },
    footer: {
      contact: "Contato",
      rights: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      curriculo: "Resume",
      skills: "Skills",
      processo: "Creative Process",
      services: "Services",
    },
    header: {
      mode: "possessive",
      line1: "Esther’s",
      name: "Portfolio",
    },
    hero: {
      title: "Hi! I'm Esther Rodrigues",
      intro:
        "I'm passionate about design and web development, focused on creating digital experiences that combine aesthetics, functionality, and purpose.",
      highlight:
        "I work with UI/UX design, front-end development, and visual identity, turning ideas into clear, intuitive, and visually engaging interfaces.",
      projects: "View Projects",
      contact: "Download Resume",
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
      processo: "Proceso creativo",
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
        "Me apasiona el diseño y el desarrollo web, con enfoque en crear experiencias digitales que combinan estética, funcionalidad y propósito.",
      highlight:
        "Trabajo con diseño UI/UX, desarrollo front-end e identidad visual, transformando ideas en interfaces claras, intuitivas y visualmente atractivas.",
      projects: "Ver Proyectos",
      contact: "Descargar Currículum",
    },
    footer: {
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
  },
};
