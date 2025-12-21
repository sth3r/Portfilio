// import type { Language } from "../context/LanguageContext";

export type ServiceItem = {
  title: string;
  description: string;
  details: string[];
};

export type ServicesTexts = {
  sectionTitle: string;
  intro?: string;
  items: ServiceItem[];
  viewMore: string;
  ctaTitle: string;
  ctadescription: string;
  cta: string;
};

export const servicesTexts = {
  pt: {
    sectionTitle: "Serviços",
    sectionIntro:
      "Soluções visuais e digitais que unem design, tecnologia e estratégia — do conceito à entrega final.",
    cta: "Ver todos os serviços",
    services: [
      {
        title: "Branding & Design Visual",
        description:
          "Criação de identidades visuais completas para marcas e projetos autorais, incluindo logotipos, sistemas visuais, materiais gráficos e aplicações consistentes."
      },
      {
        title: "UI/UX & Desenvolvimento Web",
        description:
          "Design e desenvolvimento de interfaces modernas e sites responsivos, atuando em front-end e back-end, com foco em usabilidade, performance e clareza."
      },
      {
        title: "Arquitetura Web & Segurança",
        description:
          "Estruturação de aplicações web organizadas e confiáveis, com atenção à segurança, bancos de dados, controle de acesso e boas práticas de infraestrutura."
      },
      {
        title: "Arte Digital, Conteúdo & Produtos",
        description:
          "Criação de arte digital, ilustrações e conteúdo visual para mídias digitais e produtos físicos, do conceito à preparação para produção."
      }
    ],
    viewMore: "Ver detalhes",
    ctaTitle: "Todos os serviços",
    ctaDescription:
      "Veja a lista completa de serviços, processos, prazos e formas de contratação.",
  },

  en: {
    sectionTitle: "Services",
    sectionIntro:
      "Visual and digital solutions that combine design, technology and strategy — from concept to final delivery.",
    cta: "View all services",
    services: [
      {
        title: "Branding & Visual Design",
        description:
          "Complete visual identities for brands and creative projects, including logos, visual systems and consistent brand assets."
      },
      {
        title: "UI/UX & Web Development",
        description:
          "Design and development of modern, responsive websites, working across front-end and back-end with a focus on usability and performance."
      },
      {
        title: "Web Architecture & Security",
        description:
          "Structured and reliable web applications with attention to security, databases, access control and infrastructure best practices."
      },
      {
        title: "Digital Art, Content & Products",
        description:
          "Digital artwork, illustrations and visual content for online platforms and physical products, from concept to production-ready files."
      }
    ],
    viewMore: "View details",
    ctaTitle: "All services",
    ctaDescription:
      "Explore the full list of services, processes, timelines and pricing models.",
  },

  es: {
    sectionTitle: "Servicios",
    sectionIntro:
      "Soluciones visuales y digitales que combinan diseño, tecnología y estrategia — del concepto a la entrega final.",
    cta: "Ver todos los servicios",
    services: [
      {
        title: "Branding y Diseño Visual",
        description:
          "Identidades visuales completas para marcas y proyectos creativos, incluyendo logotipos, sistemas visuales y aplicaciones coherentes."
      },
      {
        title: "UI/UX y Desarrollo Web",
        description:
          "Diseño y desarrollo de sitios web modernos y responsivos, trabajando en front-end y back-end con foco en usabilidad y rendimiento."
      },
      {
        title: "Arquitectura Web y Seguridad",
        description:
          "Estructuración de aplicaciones web confiables, con atención a seguridad, bases de datos, control de accesos y buenas prácticas."
      },
      {
        title: "Arte Digital, Contenido y Productos",
        description:
          "Creación de arte digital, ilustraciones y contenido visual para plataformas digitales y productos físicos."
      }
    ],
    viewMore: "Ver detalles",
    ctaTitle: "Todos los servicios",
    ctaDescription:
      "Consulta la lista completa de servicios, procesos y condiciones.",
  }
};
