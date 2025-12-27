export type ServicePackage = {
  id: "starter" | "pro" | "custom";
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
  packages: ServicePackage[];
};

export const packagesContent: Record<"pt" | "en" | "es", PackagesContent> = {
  pt: {
    title: "Pacotes de Serviço",
    description:
      "Soluções pensadas para diferentes níveis de maturidade digital — do essencial ao totalmente personalizado.",
    packages: [
      {
        id: "starter",
        title: "Starter",
        subtitle: "Para quem está começando",
        description:
          "Ideal para projetos iniciais, validação de ideias ou presença digital objetiva.",
        features: [
          "Landing page ou site institucional simples",
          "Design responsivo",
          "Estrutura básica de SEO",
          "Entrega rápida e objetiva"
        ],
        cta: "Solicitar proposta"
      },
      {
        id: "pro",
        title: "Pro",
        subtitle: "Equilíbrio entre design e tecnologia",
        description:
          "Solução completa para marcas e projetos que buscam consistência visual, performance e escalabilidade.",
        features: [
          "Site ou aplicação web completa",
          "UI/UX personalizado",
          "Integração com APIs e banco de dados",
          "SEO técnico e estrutura escalável",
          "Acompanhamento e suporte inicial"
        ],
        cta: "Solicitar proposta",
        highlighted: true
      },
      {
        id: "custom",
        title: "Custom",
        subtitle: "Projetos sob medida",
        description:
          "Pensado para demandas específicas, projetos complexos ou soluções fora do padrão.",
        features: [
          "Escopo totalmente personalizado",
          "Consultoria técnica e estratégica",
          "Integrações avançadas",
          "Cronograma flexível"
        ],
        cta: "Falar sobre meu projeto"
      }
    ]
  },

  en: {
    title: "Service Packages",
    description:
      "Solutions designed for different levels of digital maturity — from essential to fully customized.",
    packages: [
      {
        id: "starter",
        title: "Starter",
        subtitle: "For early-stage projects",
        description:
          "Ideal for initial projects, idea validation, or a focused digital presence.",
        features: [
          "Landing page or simple institutional website",
          "Responsive design",
          "Basic SEO structure",
          "Fast and objective delivery"
        ],
        cta: "Request a quote"
      },
      {
        id: "pro",
        title: "Pro",
        subtitle: "Balance between design and technology",
        description:
          "Complete solution for brands and projects seeking visual consistency, performance, and scalability.",
        features: [
          "Complete website or web application",
          "Custom UI/UX",
          "API and database integration",
          "Technical SEO and scalable structure",
          "Initial support and follow-up"
        ],
        cta: "Request a quote",
        highlighted: true
      },
      {
        id: "custom",
        title: "Custom",
        subtitle: "Tailored solutions",
        description:
          "Designed for specific demands, complex projects, or non-standard solutions.",
        features: [
          "Fully customized scope",
          "Technical and strategic consulting",
          "Advanced integrations",
          "Flexible timeline"
        ],
        cta: "Discuss my project"
      }
    ]
  },

  es: {
    title: "Paquetes de Servicio",
    description:
      "Soluciones pensadas para distintos niveles de madurez digital — desde lo esencial hasta lo totalmente personalizado.",
    packages: [
      {
        id: "starter",
        title: "Starter",
        subtitle: "Para proyectos iniciales",
        description:
          "Ideal para comenzar, validar ideas o tener una presencia digital clara.",
        features: [
          "Landing page o sitio institucional simple",
          "Diseño responsivo",
          "Estructura básica de SEO",
          "Entrega rápida y objetiva"
        ],
        cta: "Solicitar presupuesto"
      },
      {
        id: "pro",
        title: "Pro",
        subtitle: "Equilibrio entre diseño y tecnología",
        description:
          "Solución completa para marcas y proyectos que buscan consistencia visual, rendimiento y escalabilidad.",
        features: [
          "Sitio o aplicación web completa",
          "UI/UX personalizado",
          "Integración con APIs y bases de datos",
          "SEO técnico y estructura escalable",
          "Soporte inicial"
        ],
        cta: "Solicitar presupuesto",
        highlighted: true
      },
      {
        id: "custom",
        title: "Custom",
        subtitle: "Proyectos a medida",
        description:
          "Pensado para necesidades específicas, proyectos complejos o soluciones fuera de estándar.",
        features: [
          "Alcance totalmente personalizado",
          "Consultoría técnica y estratégica",
          "Integraciones avanzadas",
          "Cronograma flexible"
        ],
        cta: "Hablar sobre mi proyecto"
      }
    ]
  }
};
