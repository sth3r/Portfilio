 
export type SkillItem = {
  title: string;
  description: string;
};

export type SkillsTexts = {
  sectionTitle: string;
  subtitle?: string;
  items: SkillItem[];
};

export const skillsTexts = {
  pt: {
    sectionTitle: "Habilidades",

    groups: [
      {
        title: "Frontend & Mobile",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Expo",
          "Web Design Responsivo",
          "Acessibilidade básica (WCAG)",
        ],
      },
      {
        title: "Design, UI/UX & Branding",
        items: [
          "UI Design",
          "UX",
          "Design de Interfaces",
          "Identidade Visual",
          "Branding",
          "Estética Visual",
          "Tipografia",
          "Design Editorial",
          "Design de Logotipos",
          "Noções de Psicologia das Cores",
        ],
      },
      {
        title: "Back-end & Desenvolvimento",
        items: [
          "PHP",
          "Laravel",
          "Java",
          "Arquitetura básica de APIs",
          "Integração Front-end / Back-end",
        ],
      },
      {
        title: "Banco de Dados & Dados",
        items: [
          "SQL",
          "MongoDB",
          "Cloud Firestore",
          "SGBD Objeto-Relacional",
          "Modelagem de Dados",
          "Data Warehousing",
          "Data Mining (conceitos)",
        ],
      },
      {
        title: "Engenharia de Software",
        items: [
          "Análise de Requisitos",
          "Elaboração de Testes",
          "Ciclo de Vida de Software (SDLC)",
          "Metodologias Ágeis",
          "Versionamento com Git/GitHub",
        ],
      },
      {
        title: "Segurança & Redes de Computadores",
        items: [
          "Criptografia",
          "Firewall",
          "VPN",
          "IDS/IPS",
          "Monitoramento com InfluxDB",
          "Rotinas de Backup (Bacula)",
        ],
      },
      {
        title: "Ferramentas & Outros",
        items: [
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Pacote Office (Word, Excel, PowerPoint)",
          "Produção de Conteúdo Digital",
        ],
      },
    ],
  },
  en: {
    sectionTitle: "Skills",

    groups: [
      {
        title: "Frontend & Mobile",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Expo",
          "Responsive Web Design",
          "Basic accessibility (WCAG)",
        ],
      },
      {
        title: "Design, UI/UX & Branding",
        items: [
          "UI Design",
          "UX",
          "Interface Design",
          "Visual Identity",
          "Branding",
          "Visual Aesthetics",
          "Typography",
          "Editorial Design",
          "Logo Design",
          "Color Theory fundamentals",
        ],
      },
      {
        title: "Back-end & Development",
        items: [
          "PHP",
          "Laravel",
          "Java",
          "Basic API architecture",
          "Front-end / Back-end integration",
        ],
      },
      {
        title: "Databases & Data",
        items: [
          "SQL",
          "MongoDB",
          "Cloud Firestore",
          "Object-Relational DBMS",
          "Data Modeling",
          "Data Warehousing",
          "Data Mining (concepts)",
        ],
      },
      {
        title: "Software Engineering",
        items: [
          "Requirements Analysis",
          "Test Planning",
          "Software Development Life Cycle (SDLC)",
          "Agile Methodologies",
          "Version Control (Git/GitHub)",
        ],
      },
      {
        title: "Security & Networking",
        items: [
          "Cryptography",
          "Firewall",
          "VPN",
          "IDS/IPS",
          "Monitoring with InfluxDB",
          "Backup routines (Bacula)",
        ],
      },
      {
        title: "Tools & Other Skills",
        items: [
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Microsoft Office Suite",
          "Digital Content Production",
        ],
      },
    ],
  },
  es: {
    sectionTitle: "Habilidades",

    groups: [
      {
        title: "Frontend & Mobile",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Expo",
          "Diseño Web Responsivo",
          "Accesibilidad básica (WCAG)",
        ],
      },
      {
        title: "Diseño, UI/UX & Branding",
        items: [
          "Diseño UI",
          "UX",
          "Diseño de Interfaces",
          "Identidad Visual",
          "Branding",
          "Estética Visual",
          "Tipografía",
          "Diseño Editorial",
          "Diseño de Logotipos",
          "Fundamentos de teoría del color",
        ],
      },
      {
        title: "Back-end & Desarrollo",
        items: [
          "PHP",
          "Laravel",
          "Java",
          "Arquitectura básica de APIs",
          "Integración Front-end / Back-end",
        ],
      },
      {
        title: "Bases de Datos & Datos",
        items: [
          "SQL",
          "MongoDB",
          "Cloud Firestore",
          "SGBD Objeto-Relacional",
          "Modelado de Datos",
          "Data Warehousing",
          "Data Mining (conceptos)",
        ],
      },
      {
        title: "Ingeniería de Software",
        items: [
          "Análisis de Requisitos",
          "Elaboración de Pruebas",
          "Ciclo de Vida del Software (SDLC)",
          "Metodologías Ágiles",
          "Control de versiones con Git/GitHub",
        ],
      },
      {
        title: "Seguridad & Redes",
        items: [
          "Criptografía",
          "Firewall",
          "VPN",
          "IDS/IPS",
          "Monitoreo con InfluxDB",
          "Rutinas de respaldo (Bacula)",
        ],
      },
      {
        title: "Herramientas & Otros",
        items: [
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Paquete Office",
          "Producción de Contenido Digital",
        ],
      },
    ],
  },
};
