// services.data.ts
// Padrão de conteúdo para replicar nos demais serviços.
// Cada item de `content` deve responder: o que você entrega de concreto?
// Evite frases como "foco em escalabilidade" — diga o que isso significa na prática.

export const services = [
  {
    slug: "desenvolvimento-web-profissional",
    seo: {
      title: {
        pt: "Desenvolvimento Web Profissional | Esther Rodrigues",
        en: "Professional Web Development | Esther Rodrigues",
        es: "Desarrollo Web Profesional | Esther Rodrigues",
      },
      description: {
        pt: "Sites e sistemas web desenvolvidos do zero — com código limpo, design consistente e integração completa.",
        en: "Websites and web systems built from scratch — clean code, consistent design, and full integration.",
        es: "Sitios y sistemas web desarrollados desde cero — código limpio, diseño coherente e integración completa.",
      },
    },
    title: {
      pt: "Desenvolvimento Web & Sistemas",
      en: "Web Development & Systems",
      es: "Desarrollo Web y Sistemas",
    },
    content: {
      pt: [
        "Sites institucionais e landing pages com design próprio — não templates.",
        "Aplicações web com React e TypeScript, estruturadas para crescer sem virar bagunça.",
        "Integração com APIs, bancos de dados e sistemas de terceiros.",
        "Do layout no Figma ao deploy: você não precisa de outra pessoa no meio.",
      ],
      en: [
        "Institutional websites and landing pages with custom design — no templates.",
        "Web applications built with React and TypeScript, structured to scale without becoming a mess.",
        "API, database, and third-party system integration.",
        "From Figma layout to deployment: no middleman needed.",
      ],
      es: [
        "Sitios institucionales y landing pages con diseño propio — sin plantillas.",
        "Aplicaciones web con React y TypeScript, estructuradas para crecer sin desorden.",
        "Integración con APIs, bases de datos y sistemas externos.",
        "Del diseño en Figma al deploy: sin intermediarios.",
      ],
    },
  },

  // ─── MODELO PARA REPLICAR ────────────────────────────────────────────────────
  // {
  //   slug: "identidade-visual",
  //   seo: {
  //     title: {
  //       pt: "Identidade Visual & Branding | Esther Rodrigues",
  //       en: "Visual Identity & Branding | Esther Rodrigues",
  //       es: "Identidad Visual & Branding | Esther Rodrigues",
  //     },
  //     description: {
  //       pt: "Criação de identidade visual completa — logotipo, paleta, tipografia e manual de marca.",
  //       en: "Full visual identity creation — logo, color palette, typography and brand guidelines.",
  //       es: "Creación de identidad visual completa — logotipo, paleta, tipografía y manual de marca.",
  //     },
  //   },
  //   title: {
  //     pt: "Identidade Visual & Branding",
  //     en: "Visual Identity & Branding",
  //     es: "Identidad Visual & Branding",
  //   },
  //   content: {
  //     pt: [
  //       "Logotipo com conceito — não só uma fonte bonita.",
  //       "Paleta de cores, tipografia e aplicações definidas com consistência.",
  //       "Manual de marca para você usar sem precisar perguntar toda hora.",
  //       "Arquivos organizados para todos os formatos: digital, impresso, redes sociais.",
  //     ],
  //     en: [
  //       "Logo with a concept — not just a pretty font.",
  //       "Color palette, typography and usage rules defined consistently.",
  //       "Brand guidelines so you can apply everything without asking every time.",
  //       "Files organized for every format: digital, print, social media.",
  //     ],
  //     es: [
  //       "Logotipo con concepto — no solo una fuente bonita.",
  //       "Paleta de colores, tipografía y aplicaciones definidas con coherencia.",
  //       "Manual de marca para que puedas usarlo sin preguntar cada vez.",
  //       "Archivos organizados para todos los formatos: digital, impreso, redes sociales.",
  //     ],
  //   },
  // },
];