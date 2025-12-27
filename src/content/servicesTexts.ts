// content/services.ts

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
  /* =========================
     🇧🇷 PORTUGUÊS
  ========================= */
  pt: {
    title: "Serviços",
    description:
      "Soluções digitais completas que unem tecnologia, design e estratégia. Atuo do conceito à implementação, criando experiências funcionais, escaláveis e visualmente consistentes para marcas, produtos e projetos acadêmicos.",
    cta: "Solicitar orçamento",
    groups: [
      {
        category: "Desenvolvimento Web & Sistemas",
        items: [
          "Sites institucionais e landing pages",
          "Aplicações web modernas e responsivas",
          "Desenvolvimento Full-Stack",
          "Aplicativos mobile (React Native)",
          "Integração com APIs e serviços externos",
          "Integração e modelagem de bancos de dados",
          "Manutenção, refatoração e evolução de sistemas",
          "Implementação de boas práticas de segurança"
        ]
      },
      {
        category: "UI/UX & Design de Interfaces",
        items: [
          "Design de interfaces (UI)",
          "Experiência do usuário (UX)",
          "Prototipação de alta fidelidade",
          "Wireframes e fluxos de navegação",
          "Redesign de interfaces existentes",
          "Análise e melhoria de usabilidade"
        ]
      },
      {
        category: "Identidade Visual & Design Gráfico",
        items: [
          "Criação de logotipos",
          "Desenvolvimento de identidade visual completa",
          "Definição de paleta de cores e tipografia",
          "Materiais gráficos digitais",
          "Artes para redes sociais",
          "Padronização visual para marcas"
        ]
      },
      {
        category: "Edição de Imagens & Ilustração Digital",
        items: [
          "Retoque e tratamento profissional de imagens",
          "Correções de cor e composição",
          "Ilustração digital autoral",
          "Artes conceituais e visuais criativos",
          "Produção de thumbnails e capas digitais"
        ]
      },
      {
        category: "Marketing Digital & Conteúdo Visual",
        items: [
          "Criação de conteúdo visual para marcas",
          "Artes para feed e stories",
          "Apoio visual para campanhas digitais",
          "Desenvolvimento de identidade visual para redes sociais"
        ]
      },
      {
        category: "Consultoria Acadêmica & Técnica",
        items: [
          "Apoio a projetos acadêmicos e TCC",
          "Orientação técnica em Sistemas para Internet",
          "Consultoria em design e desenvolvimento web",
          "Mentorias e oficinas introdutórias"
        ]
      }
    ]
  },

  /* =========================
     🇺🇸 ENGLISH
  ========================= */
  en: {
    title: "Services",
    description:
      "Comprehensive digital solutions that combine technology, design, and strategy. I work from concept to implementation, delivering functional, scalable, and visually consistent experiences for brands, products, and academic projects.",
    cta: "Request a quote",
    groups: [
      {
        category: "Web Development & Systems",
        items: [
          "Institutional websites and landing pages",
          "Modern and responsive web applications",
          "Full-Stack development",
          "Mobile applications (React Native)",
          "API and third-party service integrations",
          "Database modeling and integration",
          "System maintenance, refactoring, and evolution",
          "Implementation of security best practices"
        ]
      },
      {
        category: "UI/UX & Interface Design",
        items: [
          "User Interface (UI) design",
          "User Experience (UX) design",
          "High-fidelity prototyping",
          "Wireframes and user flows",
          "Interface redesigns",
          "Usability analysis and improvements"
        ]
      },
      {
        category: "Visual Identity & Graphic Design",
        items: [
          "Logo design",
          "Complete visual identity systems",
          "Color palette and typography definition",
          "Digital graphic materials",
          "Social media visuals",
          "Brand visual standardization"
        ]
      },
      {
        category: "Image Editing & Digital Illustration",
        items: [
          "Professional image retouching",
          "Color correction and composition",
          "Custom digital illustration",
          "Concept art and creative visuals",
          "Thumbnail and digital cover creation"
        ]
      },
      {
        category: "Digital Marketing & Visual Content",
        items: [
          "Visual content creation for brands",
          "Feed and stories design",
          "Visual support for digital campaigns",
          "Social media visual identity development"
        ]
      },
      {
        category: "Academic & Technical Consulting",
        items: [
          "Support for academic projects and theses",
          "Technical guidance in Internet Systems",
          "Web development and design consulting",
          "Mentorships and introductory workshops"
        ]
      }
    ]
  },

  /* =========================
     🇪🇸 ESPAÑOL
  ========================= */
  es: {
    title: "Servicios",
    description:
      "Soluciones digitales integrales que combinan tecnología, diseño y estrategia. Trabajo desde el concepto hasta la implementación, creando experiencias funcionales, escalables y visualmente coherentes para marcas, productos y proyectos académicos.",
    cta: "Solicitar presupuesto",
    groups: [
      {
        category: "Desarrollo Web y Sistemas",
        items: [
          "Sitios institucionales y landing pages",
          "Aplicaciones web modernas y responsivas",
          "Desarrollo Full-Stack",
          "Aplicaciones móviles (React Native)",
          "Integración con APIs y servicios externos",
          "Modelado e integración de bases de datos",
          "Mantenimiento, refactorización y evolución de sistemas",
          "Implementación de buenas prácticas de seguridad"
        ]
      },
      {
        category: "UI/UX y Diseño de Interfaces",
        items: [
          "Diseño de interfaces (UI)",
          "Experiencia de usuario (UX)",
          "Prototipado de alta fidelidad",
          "Wireframes y flujos de navegación",
          "Rediseño de interfaces",
          "Análisis y mejora de usabilidad"
        ]
      },
      {
        category: "Identidad Visual y Diseño Gráfico",
        items: [
          "Diseño de logotipos",
          "Desarrollo de identidad visual completa",
          "Definición de paleta de colores y tipografía",
          "Materiales gráficos digitales",
          "Artes para redes sociales",
          "Estandarización visual de marcas"
        ]
      },
      {
        category: "Edición de Imágenes e Ilustración Digital",
        items: [
          "Retoque y tratamiento profesional de imágenes",
          "Corrección de color y composición",
          "Ilustración digital personalizada",
          "Arte conceptual y visual creativo",
          "Creación de miniaturas y portadas digitales"
        ]
      },
      {
        category: "Marketing Digital y Contenido Visual",
        items: [
          "Creación de contenido visual para marcas",
          "Diseño para feed y stories",
          "Soporte visual para campañas digitales",
          "Desarrollo de identidad visual para redes sociales"
        ]
      },
      {
        category: "Consultoría Académica y Técnica",
        items: [
          "Apoyo a proyectos académicos y trabajos finales",
          "Orientación técnica en Sistemas para Internet",
          "Consultoría en diseño y desarrollo web",
          "Mentorías y talleres introductorios"
        ]
      }
    ]
  }
};
