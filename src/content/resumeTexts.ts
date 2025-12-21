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
            title: "Bachelor’s Degree in Internet Systems",
            subtitle: "IFSul",
            period: "2020 – 2025",
            description:
              "Focused on web development, system architecture, databases, and user interface design."
          },
          {
            title: "Technical Degree in Visual Communication",
            subtitle: "IFSul",
            period: "2015 – 2019",
            description:
              "Strong foundation in graphic design, visual identity, and digital communication."
          },
          {
            title: "English Language Program — Advanced Level",
            subtitle: "CCAA",
            period: "2013 – 2018"
          }
        ]
      },
      {
        title: "Professional Experience",
        items: [
          {
            title: "Scientific Research Assistant",
            subtitle: "IFSul — MTur / Mundi Project",
            period: "2022 – 2023",
            description:
              "Contributed to research-oriented digital solutions, assisting with system logic, interface structure, and data organization."
          },
          {
            title: "Freelance Designer",
            period: "2013 – 2021",
            description:
              "Delivered UI design, visual identity, and front-end solutions for independent clients, focusing on usability, clarity, and responsive layouts."
          },
          {
            title: "Marketing Intern",
            subtitle: "DNA Sell",
            period: "2021",
            description:
              "Supported digital marketing strategies, visual content creation, and brand communication initiatives."
          }
        ]
      },
    //   {
    //     title: "Talks & Technical Events",
    //     items: [
    //       {
    //         title: "Academic & Technical Events Participation",
    //         description:
    //           "Participation in technology and design events such as SASPI, Design Week, and TSI Talks."
    //       }
    //     ]
    //   },
    //   {
    //     title: "Technical Skills",
    //     items: [
    //       {
    //         title: "Front-End & Web",
    //         description:
    //           "HTML, CSS, JavaScript, TypeScript, React, React Native, Laravel, PHP, Java"
    //       },
    //       {
    //         title: "Databases",
    //         description:
    //           "SQL, MongoDB, Firestore"
    //       },
    //       {
    //         title: "Design & UI/UX",
    //         description:
    //           "Adobe Photoshop, Illustrator, InDesign; experience with interface design and visual systems."
    //       }
    //     ]
    //   }
    ]
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
              "Foco em desenvolvimento web, arquitetura de sistemas, bancos de dados e design de interfaces."
          },
          {
            title: "Técnico em Comunicação Visual",
            subtitle: "IFSul",
            period: "2015 – 2019",
            description:
              "Base sólida em design gráfico, identidade visual e comunicação digital."
          },
          {
            title: "Inglês — Nível Avançado",
            subtitle: "CCAA",
            period: "2013 – 2018"
          }
        ]
      },
      {
        title: "Experiência Profissional",
        items: [
          {
            title: "Bolsista de Iniciação Científica",
            subtitle: "IFSul — Projeto MTur / Mundi",
            period: "2022 – 2023",
            description:
              "Contribuição em soluções digitais de pesquisa, auxiliando na lógica do sistema, estrutura de interfaces e organização de dados."
          },
          {
            title: "Freelancer — Design",
            period: "2013 – 2021",
            description:
              "Entrega de design de interface, identidade visual e soluções front-end para clientes independentes, com foco em usabilidade, clareza e layouts responsivos."
          },
          {
            title: "Estagiária de Marketing",
            subtitle: "DNA Sell",
            period: "2021",
            description:
              "Suporte em estratégias de marketing digital, criação de conteúdos visuais e comunicação de marca."
          }
        ]
      },
    //   {
    //     title: "Palestras e Eventos Técnicos",
    //     items: [
    //       {
    //         title: "Participação em Eventos Acadêmicos e Técnicos",
    //         description:
    //           "Participação em eventos de tecnologia e design, como SASPI, Semana do Design e TSI Talks."
    //       }
    //     ]
    //   },
    //   {
    //     title: "Habilidades Técnicas",
    //     items: [
    //       {
    //         title: "Front-End & Web",
    //         description:
    //           "HTML, CSS, JavaScript, TypeScript, React, React Native, Laravel, PHP, Java"
    //       },
    //       {
    //         title: "Bancos de Dados",
    //         description:
    //           "SQL, MongoDB, Firestore"
    //       },
    //       {
    //         title: "Design & UI/UX",
    //         description:
    //           "Adobe Photoshop, Illustrator, InDesign; experiência em design de interfaces e sistemas visuais."
    //       }
    //     ]
    //   }
    ]
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
              "Enfoque en desarrollo web, arquitectura de sistemas, bases de datos y diseño de interfaces."
          },
          {
            title: "Técnico en Comunicación Visual",
            subtitle: "IFSul",
            period: "2015 – 2019",
            description:
              "Base sólida en diseño gráfico, identidad visual y comunicación digital."
          },
          {
            title: "Inglés — Nivel Avanzado",
            subtitle: "CCAA",
            period: "2013 – 2018"
          }
        ]
      },
      {
        title: "Experiencia Profesional",
        items: [
          {
            title: "Becaria de Investigación Científica",
            subtitle: "IFSul — Proyecto MTur / Mundi",
            period: "2022 – 2023",
            description:
              "Contribuyó en soluciones digitales de investigación, asistiendo en la lógica del sistema, estructura de interfaces y organización de datos."
          },
          {
            title: "Freelance — Diseño",
            period: "2013 – 2021",
            description:
              "Entrega de diseño de interfaz, identidad visual y soluciones front-end para clientes independientes, con enfoque en usabilidad, claridad y diseños responsivos."
          },
          {
            title: "Pasantía en Marketing",
            subtitle: "DNA Sell",
            period: "2021",
            description:
              "Apoyo en estrategias de marketing digital, creación de contenido visual y comunicación de marca."
          }
        ]
      },
    //   {
    //     title: "Charlas y Eventos Técnicos",
    //     items: [
    //       {
    //         title: "Participación en Eventos Académicos y Técnicos",
    //         description:
    //           "Participación en eventos de tecnología y diseño, como SASPI, Semana del Diseño y TSI Talks."
    //       }
    //     ]
    //   },
    //   {
    //     title: "Habilidades Técnicas",
    //     items: [
    //       {
    //         title: "Front-End & Web",
    //         description:
    //           "HTML, CSS, JavaScript, TypeScript, React, React Native, Laravel, PHP, Java"
    //       },
    //       {
    //         title: "Bases de Datos",
    //         description:
    //           "SQL, MongoDB, Firestore"
    //       },
    //       {
    //         title: "Diseño & UI/UX",
    //         description:
    //           "Adobe Photoshop, Illustrator, InDesign; experiencia en diseño de interfaces y sistemas visuales."
    //       }
    //     ]
    //   }
    ]
  }
};
