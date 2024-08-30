import { useEffect, useState } from "react";
import Popup from "./Popup";
import TimeList, { Day } from "./TimeList";
// @ts-ignore
import { supabase } from '../supabase/supabase';

export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [days, setDays] = useState<Day[]>([]);
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    getDays();
  }, []);

  const getDays = async () => {
    try {
      let { data: days } = await supabase.from('days').select();
      setDays(days || []);
    } catch {
      console.log("hubo un error al querer listar los días");
    }
  };

  const handleSelectionChange = (day: Day | null, time: string | null) => {
    setSelectedDay(day);
    setSelectedTime(time);
  };

  const handleConfirmClick = () => {
    if (selectedDay && selectedTime) {
      console.log("Día seleccionado:", selectedDay.dayName);
      console.log("Horario seleccionado:", selectedTime);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const isConfirmButtonEnabled = selectedDay !== null && selectedTime !== null;

  return (
    <div>
      <h1>Hooligan Cuts</h1>
      <TimeList days={days} onSelectionChange={handleSelectionChange} />
      <button
        className={`confirm-button ${isConfirmButtonEnabled ? '' : 'disabled'}`}
        onClick={handleConfirmClick}
        disabled={!isConfirmButtonEnabled}
      >
        Confirmar Turno
      </button>
      {showPopup && selectedDay && selectedTime && (
        <Popup
          onClose={handleClosePopup}
          selectedDay={selectedDay.dayName}
          selectedTime={selectedTime}
        />
      )}
    </div>
  );
};