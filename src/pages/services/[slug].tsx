// import { useParams } from "react-router-dom";
// import { services } from "../../content/services.data";

// export default function ServicePage({ lang }: any) {
//   const { slug } = useParams();
//   const service = services.find((s) => s.slug === slug);

//   if (!service) return null;

//   return (
//     <section className="service-page">
//       <h1>{service.title[lang]}</h1>

//       <ul>
//         {service.items[lang].map((item: string) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }
