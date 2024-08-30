import { useState } from "react";


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
    onSelectionChange: (day: Day | null, time: string | null) => void;
}

export default function TimeList({ days, onSelectionChange }: TimeListProps) {
    const [selectedDay, setSelectedDay] = useState<Day | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleDaySelect = (day: Day) => {
        setSelectedDay(day);
        setSelectedTime(null);
        onSelectionChange(day, null);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        onSelectionChange(selectedDay, time);
    };

    return (
        <div className="time-list">
            <div className="days-list">
                {days.map((day) => (
                    <button
                        key={day.id}
                        className={`day-button ${selectedDay?.id === day.id ? 'selected' : ''}`}
                        onClick={() => handleDaySelect(day)}
                    >
                        {day.dayName}
                    </button>
                ))}
            </div>
            {selectedDay && (
                <div className="horario-list">
                    <h3>{selectedDay.dayName}</h3>
                    {generateHorarios(selectedDay.openingTime, selectedDay.closeTime, selectedDay.interval).map(
                        (horario) => (
                            <button
                                key={horario}
                                className={`horario-button ${selectedTime === horario ? 'selected' : ''}`}
                                onClick={() => handleTimeSelect(horario)}
                            >
                                {horario}
                            </button>
                        )
                    )}
                </div>
            )}
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
