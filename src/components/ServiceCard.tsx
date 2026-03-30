import { Link } from "react-router-dom";

type Service = {
  slug: string;
  title: Record<string, string>;
  items: Record<string, string[]>;
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
        {service.items[lang].slice(0, 3).map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="service-link">Ver detalhes →</span>
    </Link>
  );
}