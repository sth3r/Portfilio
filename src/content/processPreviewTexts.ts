import type { Language } from "../context/LanguageContext";

export type ProcessPreviewTexts = {
  sectionTitle: string;
  description: string;
  steps: string[];
  cta: string;
};

export const processPreviewTexts: Record<Language, ProcessPreviewTexts> = {
  pt: {
    sectionTitle: "Como eu trabalho",
    description:
      "Por trabalhar sozinha nas duas pontas — design e código — consigo tomar decisões mais rápido, sem ruído entre etapas. O processo é estruturado, mas não engessado.",
    steps: [
      "Entendimento real do projeto: negócio, público, contexto e o que já foi tentado antes",
      "Definição visual antes de escrever uma linha de código — wireframe, referências, identidade",
      "Desenvolvimento com o design em mente o tempo todo, não como decoração no final",
      "Entrega documentada: você recebe o que precisa para usar, manter ou evoluir sem depender de mim",
    ],
    cta: "Ver serviços e processo completo",
  },

  en: {
    sectionTitle: "How I work",
    description:
      "Because I work alone on both ends — design and code — I can make decisions faster, with no noise between steps. The process is structured, but not rigid.",
    steps: [
      "Real project understanding: business, audience, context, and what's already been tried",
      "Visual definition before writing a single line of code — wireframe, references, identity",
      "Development with design in mind throughout, not as decoration at the end",
      "Documented delivery: you get what you need to use, maintain, or evolve without depending on me",
    ],
    cta: "View services and full process",
  },

  es: {
    sectionTitle: "Cómo trabajo",
    description:
      "Por trabajar sola en ambos extremos — diseño y código — puedo tomar decisiones más rápido, sin ruido entre etapas. El proceso es estructurado, pero no rígido.",
    steps: [
      "Entendimiento real del proyecto: negocio, público, contexto y lo que ya se intentó antes",
      "Definición visual antes de escribir una sola línea de código — wireframe, referencias, identidad",
      "Desarrollo con el diseño en mente todo el tiempo, no como decoración al final",
      "Entrega documentada: recibes lo que necesitas para usar, mantener o evolucionar sin depender de mí",
    ],
    cta: "Ver servicios y proceso completo",
  },
};