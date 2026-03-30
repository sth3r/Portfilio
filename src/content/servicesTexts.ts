export type ServiceGroup = {
  category: string;
  items: string[];
};

export type ServicesContent = {
  title: string;
  description: string;
  cta: string;
  groups: ServiceGroup[];
};

export const servicesContent: Record<"pt" | "en" | "es", ServicesContent> = {
  pt: {
    title: "Serviços",
    description:
      "Design e tecnologia integrados — do conceito à entrega, sem precisar coordenar uma equipe inteira. Atuo em branding, interfaces, desenvolvimento web e conteúdo visual com profundidade em cada área.",
    cta: "Solicitar orçamento",
    groups: [
      {
        category: "Desenvolvimento Web & Sistemas",
        items: [
          "Sites institucionais e landing pages com design próprio",
          "Aplicações web modernas com React e TypeScript",
          "Desenvolvimento Full-Stack (front-end + back-end)",
          "Aplicativos mobile com React Native",
          "Integração com APIs e serviços externos",
          "Modelagem e integração de bancos de dados",
          "Manutenção e refatoração de sistemas existentes",
          "Boas práticas de segurança e controle de acesso",
        ],
      },
      {
        category: "UI/UX & Design de Interfaces",
        items: [
          "Design de interfaces (UI) do zero ou a partir de briefing",
          "Pesquisa e definição de experiência do usuário (UX)",
          "Prototipação de alta fidelidade no Figma",
          "Wireframes e fluxos de navegação",
          "Redesign de interfaces com análise de usabilidade",
          "Handoff organizado para desenvolvimento",
        ],
      },
      {
        category: "Identidade Visual & Design Gráfico",
        items: [
          "Criação de logotipos com conceito",
          "Sistema de identidade visual completo",
          "Paleta de cores e tipografia com critério",
          "Manual de marca para uso independente",
          "Materiais gráficos digitais e para redes sociais",
          "Padronização visual de marcas existentes",
        ],
      },
      {
        category: "Arte Digital & Conteúdo Visual",
        items: [
          "Retoque e tratamento profissional de imagens",
          "Correção de cor e composição",
          "Ilustração digital autoral",
          "Arte conceitual e visuais criativos",
          "Thumbnails, capas e materiais para plataformas digitais",
          "Artes para feed, stories e campanhas",
        ],
      },
    ],
  },

  en: {
    title: "Services",
    description:
      "Design and technology integrated — from concept to delivery, without coordinating a whole team. I work across branding, interfaces, web development, and visual content with depth in each area.",
    cta: "Request a quote",
    groups: [
      {
        category: "Web Development & Systems",
        items: [
          "Institutional websites and landing pages with custom design",
          "Modern web applications with React and TypeScript",
          "Full-Stack development (front-end + back-end)",
          "Mobile applications with React Native",
          "API and third-party service integration",
          "Database modeling and integration",
          "Maintenance and refactoring of existing systems",
          "Security best practices and access control",
        ],
      },
      {
        category: "UI/UX & Interface Design",
        items: [
          "Interface design (UI) from scratch or from a brief",
          "User experience (UX) research and definition",
          "High-fidelity prototyping in Figma",
          "Wireframes and user flows",
          "Interface redesign with usability analysis",
          "Organized handoff for development",
        ],
      },
      {
        category: "Visual Identity & Graphic Design",
        items: [
          "Logo design with concept",
          "Complete visual identity systems",
          "Color palette and typography with intention",
          "Brand guidelines for independent use",
          "Digital graphic materials and social media assets",
          "Visual standardization for existing brands",
        ],
      },
      {
        category: "Digital Art & Visual Content",
        items: [
          "Professional image retouching and editing",
          "Color correction and composition",
          "Custom digital illustration",
          "Concept art and creative visuals",
          "Thumbnails, covers, and assets for digital platforms",
          "Feed, stories, and campaign visuals",
        ],
      },
    ],
  },

  es: {
    title: "Servicios",
    description:
      "Diseño y tecnología integrados — del concepto a la entrega, sin coordinar un equipo entero. Trabajo en branding, interfaces, desarrollo web y contenido visual con profundidad en cada área.",
    cta: "Solicitar presupuesto",
    groups: [
      {
        category: "Desarrollo Web y Sistemas",
        items: [
          "Sitios institucionales y landing pages con diseño propio",
          "Aplicaciones web modernas con React y TypeScript",
          "Desarrollo Full-Stack (front-end + back-end)",
          "Aplicaciones móviles con React Native",
          "Integración con APIs y servicios externos",
          "Modelado e integración de bases de datos",
          "Mantenimiento y refactorización de sistemas existentes",
          "Buenas prácticas de seguridad y control de acceso",
        ],
      },
      {
        category: "UI/UX y Diseño de Interfaces",
        items: [
          "Diseño de interfaces (UI) desde cero o desde un brief",
          "Investigación y definición de experiencia de usuario (UX)",
          "Prototipado de alta fidelidad en Figma",
          "Wireframes y flujos de navegación",
          "Rediseño de interfaces con análisis de usabilidad",
          "Handoff organizado para desarrollo",
        ],
      },
      {
        category: "Identidad Visual y Diseño Gráfico",
        items: [
          "Diseño de logotipos con concepto",
          "Sistema de identidad visual completo",
          "Paleta de colores y tipografía con criterio",
          "Manual de marca para uso independiente",
          "Materiales gráficos digitales y para redes sociales",
          "Estandarización visual de marcas existentes",
        ],
      },
      {
        category: "Arte Digital y Contenido Visual",
        items: [
          "Retoque y tratamiento profesional de imágenes",
          "Corrección de color y composición",
          "Ilustración digital personalizada",
          "Arte conceptual y visuales creativos",
          "Miniaturas, portadas y materiales para plataformas digitales",
          "Artes para feed, stories y campañas",
        ],
      },
    ],
  },
};