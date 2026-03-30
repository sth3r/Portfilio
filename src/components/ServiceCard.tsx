import { Link } from "react-router-dom";

type Language = "pt" | "en" | "es";

type Service = {
  slug: string;
  title: Record<Language, string>;
  content: Record<Language, string[]>;
};

type Props = {
  service: Service;
  lang: "pt" | "en" | "es";
};

export default function ServiceCard({ service, lang }: Props) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <h3>{service.title[lang]}</h3>
      <ul>
        {service.content[lang].slice(0, 3).map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="service-link">Ver detalhes →</span>
    </Link>
  );
}