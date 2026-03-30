import type { Language } from "../context/LanguageContext";

export type ResumeSection = {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    period?: string;
    description?: string;
  }[];
};

export type ResumeTexts = {
  pageTitle: string;
  download: string;
  sections: ResumeSection[];
};

export const resumeTexts: Record<Language, ResumeTexts> = {
  en: {
    pageTitle: "Resume",
    download: "Download Resume (PDF)",
    sections: [
      {
        title: "Education",
        items: [
          {
            title: "Bachelor's Degree in Internet Systems",
            subtitle: "IFSul",
            period: "2020 – 2025",
            description:
              "Web development, system architecture, databases, software engineering, network security, and UI design — with a final thesis focused on applied digital solutions.",
          },
          {
            title: "Technical Degree in Visual Communication",
            subtitle: "IFSul",
            period: "2015 – 2019",
            description:
              "Graphic design, visual identity, typography, and digital communication. Foundation that directly informs how I approach interface and brand design today.",
          },
          {
            title: "English Language Program — Master Level",
            subtitle: "CCAA",
            period: "2013 – 2018",
            description: "Advanced proficiency in written and spoken English.",
          },
        ],
      },
      {
        title: "Professional Experience",
        items: [
          {
            title: "Scientific Research Assistant",
            subtitle: "IFSul — MTur / Mundi Project",
            period: "2022 – 2023",
            description:
              "Managed student data for a distance learning platform (Mundi/IFSul), contributing to interface structure, data organization, and system logic in an academic research context.",
          },
          {
            title: "Freelance Designer",
            period: "2013 – 2021",
            description:
              "Over 8 years delivering visual identity, UI design, and front-end solutions independently. Work includes logo systems, brand materials, image retouching, thumbnails, and visual concepts for music video productions published on YouTube.",
          },
          {
            title: "Marketing Intern",
            subtitle: "DNA Sell",
            period: "2021",
            description:
              "Created visual identity, illustrations, and digital posts. Managed content for social media (feed and stories), supporting the brand's digital presence and communication consistency.",
          },
        ],
      },
      {
        title: "Technical Skills",
        items: [
          {
            title: "Front-End & Web",
            description:
              "HTML, CSS, JavaScript, TypeScript, React, React Native — comfortable taking a design from Figma to a responsive, functional interface.",
          },
          {
            title: "Back-End & Databases",
            description:
              "PHP, Laravel, Java, SQL, MongoDB, Cloud Firestore — experience building and integrating back-end logic with data-driven systems.",
          },
          {
            title: "Design & UI/UX",
            description:
              "Figma, Adobe Photoshop, Illustrator, InDesign — interface design, logo systems, visual identity, and digital content production.",
          },
          {
            title: "Other",
            description:
              "Git/GitHub, Agile methodologies, requirements analysis, network security concepts (VPN, firewall, IDS/IPS).",
          },
        ],
      },
      {
        title: "Talks & Events",
        items: [
          {
            title: "Speaker — Projects Qualification Meeting (CSTSI)",
            period: "2025",
            description: "Presented final degree project to an academic panel.",
          },
          {
            title: "Participant — SASPI 11 (IFSul Academic Week)",
            period: "2023",
            description: "80-hour technology and systems integration event.",
          },
          {
            title: "Highlight — 5th Student Video Festival, Pelotas",
            period: "2018",
            description: "Received a Direction Highlight award.",
          },
        ],
      },
    ],
  },

  pt: {
    pageTitle: "Currículo",
    download: "Baixar Currículo (PDF)",
    sections: [
      {
        title: "Educação",
        items: [
          {
            title: "Tecnólogo em Sistemas para Internet",
            subtitle: "IFSul",
            period: "2020 – 2025",
            description:
              "Desenvolvimento web, arquitetura de sistemas, bancos de dados, engenharia de software, segurança de redes e design de interfaces — com TCC voltado a soluções digitais aplicadas.",
          },
          {
            title: "Técnico em Comunicação Visual",
            subtitle: "IFSul",
            period: "2015 – 2019",
            description:
              "Design gráfico, identidade visual, tipografia e comunicação digital. Base que informa diretamente minha abordagem em design de interface e marca.",
          },
          {
            title: "Inglês — Nível Master",
            subtitle: "CCAA",
            period: "2013 – 2018",
            description: "Proficiência avançada em inglês escrito e falado.",
          },
        ],
      },
      {
        title: "Experiência Profissional",
        items: [
          {
            title: "Bolsista de Iniciação Científica",
            subtitle: "IFSul — Projeto MTur / Mundi",
            period: "2022 – 2023",
            description:
              "Gerenciamento de dados de alunos da plataforma EAD Mundi/IFSul, com contribuições em estrutura de interfaces, organização de dados e lógica de sistema em contexto de pesquisa acadêmica.",
          },
          {
            title: "Freelancer — Design",
            period: "2013 – 2021",
            description:
              "Mais de 8 anos entregando identidade visual, design de interface e soluções front-end de forma independente. Trabalhos incluem sistemas de logotipo, materiais de marca, retoque de imagens, thumbnails e conceitos visuais para videoclipes publicados no YouTube.",
          },
          {
            title: "Estagiária de Marketing",
            subtitle: "DNA Sell",
            period: "2021",
            description:
              "Criação de identidade visual, ilustrações e postagens digitais. Gestão de conteúdo para redes sociais (feed e stories), apoiando a presença digital e a consistência de comunicação da marca.",
          },
        ],
      },
      {
        title: "Habilidades Técnicas",
        items: [
          {
            title: "Front-End & Web",
            description:
              "HTML, CSS, JavaScript, TypeScript, React, React Native — do layout no Figma à interface responsiva e funcional.",
          },
          {
            title: "Back-End & Banco de Dados",
            description:
              "PHP, Laravel, Java, SQL, MongoDB, Cloud Firestore — experiência em lógica de back-end e sistemas orientados a dados.",
          },
          {
            title: "Design & UI/UX",
            description:
              "Figma, Adobe Photoshop, Illustrator, InDesign — design de interfaces, sistemas de identidade visual e produção de conteúdo digital.",
          },
          {
            title: "Outros",
            description:
              "Git/GitHub, metodologias ágeis, análise de requisitos, conceitos de segurança de redes (VPN, firewall, IDS/IPS).",
          },
        ],
      },
      {
        title: "Palestras e Eventos",
        items: [
          {
            title: "Palestrante — Encontro de Projetos de Qualificação CSTSI",
            period: "2025",
            description: "Apresentação do projeto de TCC para banca acadêmica.",
          },
          {
            title: "Participante — SASPI 11 (Semana Acadêmica IFSul)",
            period: "2023",
            description: "Evento de tecnologia e integração de sistemas — 80h.",
          },
          {
            title: "Destaque Direção — 5º Festival de Vídeo Estudantil de Pelotas",
            period: "2018",
            description: "Reconhecimento na categoria direção.",
          },
        ],
      },
    ],
  },

  es: {
    pageTitle: "Currículum",
    download: "Descargar Currículum (PDF)",
    sections: [
      {
        title: "Educación",
        items: [
          {
            title: "Tecnólogo en Sistemas de Internet",
            subtitle: "IFSul",
            period: "2020 – 2025",
            description:
              "Desarrollo web, arquitectura de sistemas, bases de datos, ingeniería de software, seguridad de redes y diseño de interfaces — con proyecto final orientado a soluciones digitales aplicadas.",
          },
          {
            title: "Técnico en Comunicación Visual",
            subtitle: "IFSul",
            period: "2015 – 2019",
            description:
              "Diseño gráfico, identidad visual, tipografía y comunicación digital. Base que informa directamente mi enfoque en diseño de interfaces y marca.",
          },
          {
            title: "Inglés — Nivel Avanzado",
            subtitle: "CCAA",
            period: "2013 – 2018",
            description: "Dominio avanzado del inglés escrito y hablado.",
          },
        ],
      },
      {
        title: "Experiencia Profesional",
        items: [
          {
            title: "Becaria de Investigación Científica",
            subtitle: "IFSul — Proyecto MTur / Mundi",
            period: "2022 – 2023",
            description:
              "Gestión de datos de estudiantes en la plataforma de e-learning Mundi/IFSul, con aportes en estructura de interfaces, organización de datos y lógica de sistema en contexto académico.",
          },
          {
            title: "Freelance — Diseño",
            period: "2013 – 2021",
            description:
              "Más de 8 años entregando identidad visual, diseño de interfaz y soluciones front-end de forma independiente. Trabajos incluyen sistemas de logotipo, materiales de marca, retoque de imágenes, thumbnails y conceptos visuales para videoclips publicados en YouTube.",
          },
          {
            title: "Pasantía en Marketing",
            subtitle: "DNA Sell",
            period: "2021",
            description:
              "Creación de identidad visual, ilustraciones y publicaciones digitales. Gestión de contenido para redes sociales (feed y stories), apoyando la presencia digital y la coherencia de comunicación de marca.",
          },
        ],
      },
      {
        title: "Habilidades Técnicas",
        items: [
          {
            title: "Front-End & Web",
            description:
              "HTML, CSS, JavaScript, TypeScript, React, React Native — del diseño en Figma a la interfaz responsiva y funcional.",
          },
          {
            title: "Back-End & Bases de Datos",
            description:
              "PHP, Laravel, Java, SQL, MongoDB, Cloud Firestore — experiencia en lógica de back-end y sistemas orientados a datos.",
          },
          {
            title: "Diseño & UI/UX",
            description:
              "Figma, Adobe Photoshop, Illustrator, InDesign — diseño de interfaces, sistemas de identidad visual y producción de contenido digital.",
          },
          {
            title: "Otros",
            description:
              "Git/GitHub, metodologías ágiles, análisis de requisitos, conceptos de seguridad de redes (VPN, firewall, IDS/IPS).",
          },
        ],
      },
      {
        title: "Charlas y Eventos",
        items: [
          {
            title: "Ponente — Encuentro de Proyectos de Calificación CSTSI",
            period: "2025",
            description: "Presentación del proyecto final ante panel académico.",
          },
          {
            title: "Participante — SASPI 11 (Semana Académica IFSul)",
            period: "2023",
            description: "Evento de tecnología e integración de sistemas — 80h.",
          },
          {
            title: "Mención Dirección — 5º Festival de Vídeo Estudiantil de Pelotas",
            period: "2018",
            description: "Reconocimiento en la categoría dirección.",
          },
        ],
      },
    ],
  },
};