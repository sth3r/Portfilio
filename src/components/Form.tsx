import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
    });

    if (response.ok) setStatus("success");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" placeholder="Nome" required />
      <input name="email" type="email" placeholder="Email" required />
      <select name="type">
        <option>Website</option>
        <option>Aplicação Web</option>
        <option>UI/UX Design</option>
        <option>Identidade Visual</option>
      </select>
      <textarea
        name="message"
        placeholder="Conte um pouco sobre seu projeto"
        required
      />
      <button type="submit">Enviar solicitação</button>

      {status === "success" && (
        <p className="success">Mensagem enviada com sucesso.</p>
      )}
    </form>
  );
}
