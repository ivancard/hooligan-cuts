import { useEffect, useState } from "react";
import Popup from "./Popup";
import TimeList, { Day } from "./TimeList";
// @ts-ignore
import { supabase } from '../supabase/supabase';

export const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [days, setDays] = useState<Day[]>([]);

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

  const handleConfirmClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>Hooligan Cuts</h1>
      <TimeList days={days} />
      <button className="confirm-button" onClick={handleConfirmClick}>
        Confirmar Turno
      </button>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};