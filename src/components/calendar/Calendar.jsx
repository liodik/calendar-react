import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import './calendar.scss';
import { fetchEventsList, createEvent, deleteEvent } from '../../gateway/gateway';

const Calendar = ({ weekDates, handleChangeShowModal, isShownModal }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    fetchEventsList().then(eventsList => {
      setEvents(eventsList);
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = newEvent => {
    createEvent(newEvent).then(() => fetchEvents());
  };

  const handleDeleteEvent = id => {
    deleteEvent(id).then(() => fetchEvents());
  };

  return (
    <>
      {isShownModal && <Modal onCloseModal={handleChangeShowModal} addEvent={handleAddEvent} />}
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar key={Math.random()} />
            <Week
              weekDates={weekDates}
              events={events}
              handleChangeShowModal={handleChangeShowModal}
              onDeleteEvent={handleDeleteEvent}
            />
          </div>
        </div>
      </section>
    </>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  handleChangeShowModal: PropTypes.func.isRequired,
  isShownModal: PropTypes.bool.isRequired,
};

export default Calendar;
