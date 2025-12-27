export default function ServiceModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Vamos conversar?</h3>
        <p>Conte um pouco sobre seu projeto.</p>

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
