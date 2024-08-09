
import { useState } from 'react';
import './App.css'
import TimeList from './Components/TimeList'
import Popup from './Components/Popup';

function App() {

  const [showPopup, setShowPopup] = useState(false);

  const handleConfirmClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <h1>Hooligan Cuts</h1>
      <TimeList />
      <button className="confirm-button" onClick={handleConfirmClick}>
        Confirmar Turno
      </button>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </>
  )
}

export default App
