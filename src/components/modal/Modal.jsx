import React, { useState } from 'react';
import { getDateTime } from '../../utils/dateUtils';
import PropTypes from 'prop-types';
import './modal.scss';
import moment from 'moment';
import { durationOfEvent, multiples } from '../../utils/validation';

const Modal = ({ onCloseModal, addEvent }) => {
  const [modalState, setModalState] = useState({
    title: 'New event',
    date: moment(new Date()).format('YYYY-MM-DD'),
    dateFrom: moment(new Date()).format('HH:mm'),
    dateTo: moment(new Date()).format('HH:mm'),
    description: 'Create your envent',
  });

  const handleChange = e => {
    setModalState({
      ...modalState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const updatedEvent = {
      title,
      description,
      dateFrom: getDateTime(date, dateFrom),
      dateTo: getDateTime(date, dateTo),
    };

    if (dateFrom > dateTo) {
      alert('You should to done it in one day');
    } else if (durationOfEvent(dateFrom, dateTo)) {
      alert("It's very long, you should to done it in 6 houres");
    } else if (multiples(dateFrom, dateTo)) {
      alert('The start of event and duration must be multiples to 15');
    } else {
      addEvent(updatedEvent);
      onCloseModal();
    }
  };

  const { title, date, dateFrom, dateTo, description } = modalState;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={onCloseModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="title"
              className="event-form__field"
              onChange={handleChange}
              value={title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={handleChange}
                value={date}
              />
              <input
                type="time"
                name="dateFrom"
                className="event-form__field"
                onChange={handleChange}
                value={dateFrom}
              />
              <span>-</span>
              <input
                type="time"
                name="dateTo"
                className="event-form__field"
                onChange={handleChange}
                value={dateTo}
              />
            </div>
            <textarea
              name="description"
              placeholder="description"
              className="event-form__field"
              onChange={handleChange}
              value={description}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
};

export default Modal;
