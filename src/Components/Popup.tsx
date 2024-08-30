interface PopupProps {
    onClose: () => void;
    selectedDay: string;
    selectedTime: string;
}

export default function Popup({ onClose, selectedDay, selectedTime }: PopupProps) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>¡Turno Confirmado!</h2>
                <p>Tu turno ha sido confirmado exitosamente para:</p>
                <p><strong>Día:</strong> {selectedDay}</p>
                <p><strong>Horario:</strong> {selectedTime}</p>
                <button className="close-button" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}