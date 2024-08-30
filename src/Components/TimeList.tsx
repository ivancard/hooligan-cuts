export interface Day {
    id: number;
    dayName: string;
    openingTime: string;
    closeTime: string;
    isEnable: boolean;
    dayNumber: number;
    interval: number;
}

interface TimeListProps {
    days: Day[];
}

export default function TimeList({ days }: TimeListProps) {
    return (
        <div className="time-list">
            {days.map((day) => (
                <div key={day.id} className="day-section">
                    <h3>{day.dayName}</h3>
                    <div className="horario-list">
                        {generateHorarios(day.openingTime, day.closeTime, day.interval).map(
                            (horario, index) => (
                                <button key={index} className="horario-button">
                                    {horario}
                                </button>
                            )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

function generateHorarios(openingTime: string, closeTime: string, interval: number): string[] {
    const horarios: string[] = [];
    const [startHour, startMinute] = openingTime.split(':').map(Number);
    const [endHour, endMinute] = closeTime.split(':').map(Number);

    let currentHour = startHour;
    let currentMinute = startMinute;

    while (
        currentHour < endHour ||
        (currentHour === endHour && currentMinute <= endMinute)
    ) {
        horarios.push(`${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`);
        currentMinute += interval;
        if (currentMinute >= 60) {
            currentMinute -= 60;
            currentHour++;
        }
    }

    return horarios;
}
