// src/content/packages.ts
// Estrutura em dois níveis:
// - simplePackages: pacotes por área, para demandas específicas
// - completePackages: pacotes combinados, para soluções completas

export type ServicePackage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type PackagesContent = {
  title: string;
  description: string;
  simpleSectionTitle: string;
  simpleSectionDescription: string;
  completeSectionTitle: string;
  completeSectionDescription: string;
  simplePackages: ServicePackage[];
  completePackages: ServicePackage[];
};

export const packagesContent: Record<"pt" | "en" | "es", PackagesContent> = {

  /* ============================================================
     🇧🇷 PORTUGUÊS
  ============================================================ */
  pt: {
    title: "Pacotes de Serviço",
    description:
      "Escolha pelo que o seu projeto precisa agora — uma área específica ou uma solução completa.",

    simpleSectionTitle: "Pacotes por Área",
    simpleSectionDescription:
      "Para quem já sabe o que precisa. Cada pacote cobre uma frente com profundidade.",

    completeSectionTitle: "Pacotes Completos",
    completeSectionDescription:
      "Design e tecnologia integrados. Para quem quer uma entrega coesa do início ao fim.",

    simplePackages: [
      {
        id: "branding",
        title: "Identidade Visual",
        subtitle: "Para marcas que precisam existir visualmente",
        description:
          "Criação de identidade visual completa — do conceito ao manual. Para empresas, produtos ou profissionais que precisam de uma marca consistente.",
        features: [
          "Logotipo com conceito e variações",
          "Paleta de cores e tipografia definidas",
          "Aplicações básicas (cartão, assinatura, redes sociais)",
          "Manual de marca para uso independente",
          "Arquivos organizados em todos os formatos",
        ],
        cta: "Solicitar proposta",
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        subtitle: "Para interfaces que precisam funcionar bem",
        description:
          "Design de interfaces do zero ou redesign do que já existe. Do wireframe ao protótipo de alta fidelidade, pronto para desenvolvimento.",
        features: [
          "Pesquisa e definição de fluxos de usuário",
          "Wireframes e arquitetura de informação",
          "Protótipo de alta fidelidade no Figma",
          "Design system básico (componentes reutilizáveis)",
          "Handoff organizado para desenvolvimento",
        ],
        cta: "Solicitar proposta",
      },
      {
        id: "webdev",
        title: "Desenvolvimento Web",
        subtitle: "Para quem já tem o design e precisa do site",
        description:
          "Desenvolvimento front-end e back-end a partir de um briefing ou design existente. Sites institucionais, landing pages e aplicações web.",
        features: [
          "Desenvolvimento com React e TypeScript",
          "Design responsivo para todos os dispositivos",
          "Integração com APIs e serviços externos",
          "SEO técnico configurado",
          "Código documentado e organizado para manutenção",
        ],
        cta: "Solicitar proposta",
      },
      {
        id: "content",
        title: "Arte Digital & Conteúdo Visual",
        subtitle: "Para quem precisa de visual pronto para usar",
        description:
          "Criação de materiais visuais para plataformas digitais — redes sociais, plataformas de streaming, produtos físicos ou campanhas.",
        features: [
          "Artes para feed, stories e capas",
          "Thumbnails para YouTube e plataformas de vídeo",
          "Retoque e tratamento profissional de imagens",
          "Ilustrações e artes conceituais",
          "Arquivos em resolução para digital e impressão",
        ],
        cta: "Solicitar proposta",
      },
      {
        id: "mobile",
        title: "Aplicativo Mobile",
        subtitle: "Para produtos que precisam estar no celular",
        description:
          "Design e desenvolvimento de aplicativos mobile com React Native. Da interface ao app funcional, para iOS e Android.",
        features: [
          "UI/UX adaptado para mobile",
          "Desenvolvimento com React Native e Expo",
          "Integração com APIs e banco de dados",
          "Build para iOS e Android",
          "Testes e ajustes de usabilidade",
        ],
        cta: "Solicitar proposta",
      },
    ],

    completePackages: [
      {
        id: "launch",
        title: "Presença Digital",
        subtitle: "Do zero ao ar, com identidade e site",
        description:
          "Para quem está começando ou quer reposicionar a marca. Identidade visual + site, entregues com consistência entre os dois.",
        features: [
          "Identidade visual completa (logo, cores, tipografia)",
          "Landing page ou site institucional de até 5 seções",
          "Design responsivo e alinhado à marca",
          "SEO básico configurado",
          "Manual de marca + arquivos organizados",
        ],
        cta: "Solicitar proposta",
      },
      {
        id: "product",
        title: "Produto Digital",
        subtitle: "Interface, sistema e marca integrados",
        description:
          "Para startups e produtos digitais que precisam de design e tecnologia funcionando juntos — sem ruído entre as duas pontas.",
        features: [
          "UI/UX completo com protótipo validado",
          "Desenvolvimento front-end e back-end",
          "Banco de dados e integrações configurados",
          "Identidade visual ou aplicação de marca existente",
          "SEO técnico e estrutura escalável",
          "Suporte e acompanhamento pós-entrega",
        ],
        cta: "Solicitar proposta",
        highlighted: true,
      },
      {
        id: "custom",
        title: "Projeto Personalizado",
        subtitle: "Para o que não cabe em nenhuma caixa",
        description:
          "Escopo definido junto, do zero. Para projetos complexos, multi-frentes ou com requisitos que não seguem um padrão.",
        features: [
          "Levantamento de requisitos e consultoria inicial",
          "Escopo, cronograma e entregáveis negociados",
          "Combinação livre de design, dev e conteúdo visual",
          "Integrações avançadas e soluções sob medida",
          "Documentação completa na entrega",
        ],
        cta: "Conversar sobre o projeto",
      },
    ],
  },

  /* ============================================================
     🇺🇸 ENGLISH
  ============================================================ */
  en: {
    title: "Service Packages",
    description:
      "Choose by what your project needs now — a specific area or a complete solution.",

    simpleSectionTitle: "Packages by Area",
    simpleSectionDescription:
      "For when you know exactly what you need. Each package covers one front with depth.",

    completeSectionTitle: "Complete Packages",
    completeSectionDescription:
      "Design and technology integrated. For a cohesive delivery from start to finish.",

    simplePackages: [
      {
        id: "branding",
        title: "Visual Identity",
        subtitle: "For brands that need to exist visually",
        description:
          "Complete visual identity creation — from concept to brand guidelines. For companies, products, or professionals who need a consistent brand.",
        features: [
          "Logo design with concept and variations",
          "Defined color palette and typography",
          "Basic applications (card, signature, social media)",
          "Brand guidelines for independent use",
          "Files organized in all formats",
        ],
        cta: "Request a quote",
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        subtitle: "For interfaces that need to work well",
        description:
          "Interface design from scratch or redesign of what already exists. From wireframe to high-fidelity prototype, ready for development.",
        features: [
          "User flow research and definition",
          "Wireframes and information architecture",
          "High-fidelity prototype in Figma",
          "Basic design system (reusable components)",
          "Organized handoff for development",
        ],
        cta: "Request a quote",
      },
      {
        id: "webdev",
        title: "Web Development",
        subtitle: "For when you have the design and need the site",
        description:
          "Front-end and back-end development from a brief or existing design. Institutional sites, landing pages, and web applications.",
        features: [
          "Development with React and TypeScript",
          "Responsive design for all devices",
          "API and third-party service integration",
          "Technical SEO configured",
          "Documented and organized code for maintenance",
        ],
        cta: "Request a quote",
      },
      {
        id: "content",
        title: "Digital Art & Visual Content",
        subtitle: "For when you need visuals ready to use",
        description:
          "Visual materials for digital platforms — social media, streaming platforms, physical products, or campaigns.",
        features: [
          "Feed, stories, and cover artwork",
          "Thumbnails for YouTube and video platforms",
          "Professional image retouching and editing",
          "Illustrations and concept art",
          "Files in resolution for digital and print",
        ],
        cta: "Request a quote",
      },
      {
        id: "mobile",
        title: "Mobile Application",
        subtitle: "For products that need to be on mobile",
        description:
          "Mobile app design and development with React Native. From interface to functional app, for iOS and Android.",
        features: [
          "UI/UX adapted for mobile",
          "Development with React Native and Expo",
          "API and database integration",
          "Build for iOS and Android",
          "Usability testing and adjustments",
        ],
        cta: "Request a quote",
      },
    ],

    completePackages: [
      {
        id: "launch",
        title: "Digital Presence",
        subtitle: "From zero to live, with identity and website",
        description:
          "For those starting out or repositioning their brand. Visual identity + website, delivered with consistency between the two.",
        features: [
          "Complete visual identity (logo, colors, typography)",
          "Landing page or institutional site up to 5 sections",
          "Responsive design aligned with the brand",
          "Basic SEO configured",
          "Brand guidelines + organized files",
        ],
        cta: "Request a quote",
      },
      {
        id: "product",
        title: "Digital Product",
        subtitle: "Interface, system, and brand integrated",
        description:
          "For startups and digital products that need design and technology working together — with no noise between the two ends.",
        features: [
          "Complete UI/UX with validated prototype",
          "Front-end and back-end development",
          "Database and integrations configured",
          "Visual identity or existing brand application",
          "Technical SEO and scalable structure",
          "Post-delivery support and follow-up",
        ],
        cta: "Request a quote",
        highlighted: true,
      },
      {
        id: "custom",
        title: "Custom Project",
        subtitle: "For what doesn't fit in any box",
        description:
          "Scope defined together, from scratch. For complex, multi-front projects or those with requirements that don't follow a standard.",
        features: [
          "Requirements gathering and initial consulting",
          "Negotiated scope, timeline, and deliverables",
          "Free combination of design, dev, and visual content",
          "Advanced integrations and tailored solutions",
          "Complete documentation at delivery",
        ],
        cta: "Talk about the project",
      },
    ],
  },

  /* ============================================================
     🇪🇸 ESPAÑOL
  ============================================================ */
  es: {
    title: "Paquetes de Servicio",
    description:
      "Elige por lo que tu proyecto necesita ahora — un área específica o una solución completa.",

    simpleSectionTitle: "Paquetes por Área",
    simpleSectionDescription:
      "Para cuando ya sabes lo que necesitas. Cada paquete cubre un frente con profundidad.",

    completeSectionTitle: "Paquetes Completos",
    completeSectionDescription:
      "Diseño y tecnología integrados. Para una entrega coherente de principio a fin.",

    simplePackages: [
      {
        id: "branding",
        title: "Identidad Visual",
        subtitle: "Para marcas que necesitan existir visualmente",
        description:
          "Creación de identidad visual completa — del concepto al manual. Para empresas, productos o profesionales que necesitan una marca coherente.",
        features: [
          "Diseño de logotipo con concepto y variaciones",
          "Paleta de colores y tipografía definidas",
          "Aplicaciones básicas (tarjeta, firma, redes sociales)",
          "Manual de marca para uso independiente",
          "Archivos organizados en todos los formatos",
        ],
        cta: "Solicitar presupuesto",
      },
      {
        id: "uiux",
        title: "UI/UX Design",
        subtitle: "Para interfaces que necesitan funcionar bien",
        description:
          "Diseño de interfaces desde cero o rediseño de lo que ya existe. Del wireframe al prototipo de alta fidelidad, listo para desarrollo.",
        features: [
          "Investigación y definición de flujos de usuario",
          "Wireframes y arquitectura de información",
          "Prototipo de alta fidelidad en Figma",
          "Design system básico (componentes reutilizables)",
          "Handoff organizado para desarrollo",
        ],
        cta: "Solicitar presupuesto",
      },
      {
        id: "webdev",
        title: "Desarrollo Web",
        subtitle: "Para cuando tienes el diseño y necesitas el sitio",
        description:
          "Desarrollo front-end y back-end a partir de un brief o diseño existente. Sitios institucionales, landing pages y aplicaciones web.",
        features: [
          "Desarrollo con React y TypeScript",
          "Diseño responsivo para todos los dispositivos",
          "Integración con APIs y servicios externos",
          "SEO técnico configurado",
          "Código documentado y organizado para mantenimiento",
        ],
        cta: "Solicitar presupuesto",
      },
      {
        id: "content",
        title: "Arte Digital y Contenido Visual",
        subtitle: "Para cuando necesitas visuales listos para usar",
        description:
          "Materiales visuales para plataformas digitales — redes sociales, plataformas de streaming, productos físicos o campañas.",
        features: [
          "Artes para feed, stories y portadas",
          "Miniaturas para YouTube y plataformas de video",
          "Retoque y tratamiento profesional de imágenes",
          "Ilustraciones y arte conceptual",
          "Archivos en resolución para digital e impresión",
        ],
        cta: "Solicitar presupuesto",
      },
      {
        id: "mobile",
        title: "Aplicación Mobile",
        subtitle: "Para productos que necesitan estar en el celular",
        description:
          "Diseño y desarrollo de aplicaciones mobile con React Native. De la interfaz a la app funcional, para iOS y Android.",
        features: [
          "UI/UX adaptado para mobile",
          "Desarrollo con React Native y Expo",
          "Integración con APIs y base de datos",
          "Build para iOS y Android",
          "Pruebas y ajustes de usabilidad",
        ],
        cta: "Solicitar presupuesto",
      },
    ],

    completePackages: [
      {
        id: "launch",
        title: "Presencia Digital",
        subtitle: "De cero a en línea, con identidad y sitio",
        description:
          "Para quienes están comenzando o quieren reposicionar su marca. Identidad visual + sitio web, entregados con coherencia entre los dos.",
        features: [
          "Identidad visual completa (logo, colores, tipografía)",
          "Landing page o sitio institucional de hasta 5 secciones",
          "Diseño responsivo alineado con la marca",
          "SEO básico configurado",
          "Manual de marca + archivos organizados",
        ],
        cta: "Solicitar presupuesto",
      },
      {
        id: "product",
        title: "Producto Digital",
        subtitle: "Interfaz, sistema y marca integrados",
        description:
          "Para startups y productos digitales que necesitan diseño y tecnología trabajando juntos — sin ruido entre los dos extremos.",
        features: [
          "UI/UX completo con prototipo validado",
          "Desarrollo front-end y back-end",
          "Base de datos e integraciones configuradas",
          "Identidad visual o aplicación de marca existente",
          "SEO técnico y estructura escalable",
          "Soporte y acompañamiento post-entrega",
        ],
        cta: "Solicitar presupuesto",
        highlighted: true,
      },
      {
        id: "custom",
        title: "Proyecto Personalizado",
        subtitle: "Para lo que no cabe en ninguna caja",
        description:
          "Alcance definido juntos, desde cero. Para proyectos complejos, multi-frentes o con requisitos que no siguen un estándar.",
        features: [
          "Relevamiento de requisitos y consultoría inicial",
          "Alcance, cronograma y entregables negociados",
          "Combinación libre de diseño, dev y contenido visual",
          "Integraciones avanzadas y soluciones a medida",
          "Documentación completa en la entrega",
        ],
        cta: "Hablar sobre el proyecto",
      },
    ],
  },
};