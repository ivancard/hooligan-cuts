export default function TimeList() {
    const horarios = [];
    const startHour = 10; // 10:00 AM
    const endHour = 18;   // 6:00 PM

    for (let hour = startHour; hour <= endHour; hour++) {
        horarios.push(`${hour}:00`);
        if (hour !== endHour || 30 <= 30) {
            horarios.push(`${hour}:30`);
        }
    }

    return (
        <div className="horario-list">
            {horarios.map((horario, index) => (
                <button key={index} className="horario-button">
                    {horario}
                </button>
            ))}
        </div>
    );
}