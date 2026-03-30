type ServiceModalProps = {
  onClose: () => void;
  title?: string;
  description?: string;
};

export default function ServiceModal({
  onClose,
  title = "Vamos conversar?",
  description = "Conte um pouco sobre seu projeto.",
}: ServiceModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{description}</p>

        <a
          href="https://wa.me/5553984166749"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          WhatsApp
        </a>

        <button onClick={onClose} className="modal-close">
          Fechar
        </button>
      </div>
    </div>
  );
}