import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import Counter from './Counter';
import Popup from './Popup';
import './Countdown.css';

export default function Coundown() {
  const [eventDate, setEventDate] = useState('2020-11-14');
  const [eventName, setEventName] = useState('Diwali');
  const [popup, setPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEventDate(e.target.eventDate.value);
    setEventName(e.target.eventName.value);

    hidePopup();
  };

  const showPopup = () => {
    setPopup(true);
  };

  const hidePopup = () => {
    setPopup(false);
  };

  return (
    <div className='countdown-wrapper'>
      <Popup
        handleSubmit={handleSubmit}
        eventDate={eventDate}
        eventName={eventName}
        popup={popup}
        handleBtnCancel={hidePopup}
      />

      <div className='countdown-wrapper-header'>
        <h1 className='eventName'>
          {eventName}
          <button onClick={showPopup} className='btn-edit'>
            <FiEdit />
          </button>
        </h1>
      </div>
      <Counter eventDate={eventDate} />
    </div>
  );
}
