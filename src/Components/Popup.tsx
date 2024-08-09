
interface PopupProps {
    onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>¡Turno Confirmado!</h2>
                <p>Tu turno ha sido confirmado exitosamente.</p>
                <button className="close-button" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}