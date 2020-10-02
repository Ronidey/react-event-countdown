import React from 'react';
import './Popup.css';

export default function Popup(props) {
  const ISODateString = new Date().toISOString().split('T')[0];

  return (
    <div className={`popup ${props.popup ? 'is-visible' : ''}`}>
      <form onSubmit={props.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='eventName'>Event Name</label>
          <input type='text' id='eventName' name='eventName' required />
        </div>
        <div className='form-group'>
          <label htmlFor='eventDate'>Select Date</label>
          <input
            type='date'
            id='eventDate'
            min={ISODateString}
            name='eventDate'
            required
          />
        </div>
        <button
          onClick={props.handleBtnCancel}
          className='btn btn-cancel'
          type='button'
        >
          Cancel
        </button>
        <button className='btn btn-save' type='submit'>
          Save
        </button>
      </form>
    </div>
  );
}
