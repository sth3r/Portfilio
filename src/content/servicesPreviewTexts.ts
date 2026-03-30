export type ServiceItem = {
  title: string;
  description: string;
  details: string[];
};

export type ServicesTexts = {
  sectionTitle: string;
  sectionIntro?: string;
  cta: string;
  services: ServiceItem[];
  viewMore: string;
  ctaTitle: string;
  ctaDescription: string;
};

export const servicesTexts = {
  pt: {
    sectionTitle: "Serviços",
    sectionIntro:
      "Do conceito à entrega — design e tecnologia integrados, sem precisar de uma equipe inteira.",
    cta: "Ver todos os serviços",
    services: [
      {
        title: "Branding & Design Visual",
        description:
          "Identidades visuais que têm conceito, não só uma fonte bonita. Logotipo, sistema de cores, tipografia e aplicações que funcionam juntos — e que você consegue usar sem me ligar toda hora.",
      },
      {
        title: "UI/UX & Desenvolvimento Web",
        description:
          "Design de interface e código na mesma mão. Do wireframe ao deploy, com front-end e back-end integrados — sem ruído de tradução entre designer e desenvolvedor.",
      },
      {
        title: "Arquitetura Web & Segurança",
        description:
          "Aplicações organizadas para durar: banco de dados bem modelado, controle de acesso, boas práticas de segurança e estrutura que não vira bagunça quando o projeto cresce.",
      },
      {
        title: "Arte Digital & Conteúdo Visual",
        description:
          "Ilustrações, retoques, thumbnails e materiais visuais para digital e físico — com acabamento de quem entende de composição, não só de ferramentas.",
      },
    ],
    viewMore: "Ver detalhes",
    ctaTitle: "Todos os serviços",
    ctaDescription:
      "Lista completa com entregas, processo e formas de contratação.",
  },

  en: {
    sectionTitle: "Services",
    sectionIntro:
      "From concept to delivery — design and technology integrated, without needing a whole team.",
    cta: "View all services",
    services: [
      {
        title: "Branding & Visual Design",
        description:
          "Visual identities built on concept, not just a nice font. Logo, color system, typography, and applications that work together — and that you can actually use without calling me every time.",
      },
      {
        title: "UI/UX & Web Development",
        description:
          "Interface design and code in the same hands. From wireframe to deployment, with front-end and back-end integrated — no translation noise between designer and developer.",
      },
      {
        title: "Web Architecture & Security",
        description:
          "Applications built to last: well-modeled databases, access control, security best practices, and a structure that doesn't fall apart when the project scales.",
      },
      {
        title: "Digital Art & Visual Content",
        description:
          "Illustrations, retouching, thumbnails, and visual materials for digital and print — with the finish of someone who understands composition, not just tools.",
      },
    ],
    viewMore: "View details",
    ctaTitle: "All services",
    ctaDescription:
      "Full list with deliverables, process, and engagement models.",
  },

  es: {
    sectionTitle: "Servicios",
    sectionIntro:
      "Del concepto a la entrega — diseño y tecnología integrados, sin necesitar un equipo entero.",
    cta: "Ver todos los servicios",
    services: [
      {
        title: "Branding y Diseño Visual",
        description:
          "Identidades visuales con concepto, no solo una fuente bonita. Logotipo, sistema de colores, tipografía y aplicaciones que funcionan juntos — y que puedes usar sin llamarme cada vez.",
      },
      {
        title: "UI/UX y Desarrollo Web",
        description:
          "Diseño de interfaz y código en las mismas manos. Del wireframe al deploy, con front-end y back-end integrados — sin ruido de traducción entre diseñador y desarrollador.",
      },
      {
        title: "Arquitectura Web y Seguridad",
        description:
          "Aplicaciones organizadas para durar: bases de datos bien modeladas, control de acceso, buenas prácticas de seguridad y estructura que no se desordena cuando el proyecto crece.",
      },
      {
        title: "Arte Digital y Contenido Visual",
        description:
          "Ilustraciones, retoques, miniaturas y materiales visuales para digital e impresión — con el acabado de quien entiende de composición, no solo de herramientas.",
      },
    ],
    viewMore: "Ver detalles",
    ctaTitle: "Todos los servicios",
    ctaDescription:
      "Lista completa con entregables, proceso y modalidades de contratación.",
  },
};