import React from 'react';
import Day from '../day/Day';
import PropTypes from 'prop-types';
import './week.scss';

const Week = ({ weekDates, events, onDeleteEvent, handleChangeShowModal }) => {
  const onHoureClick = e => {
    if (e.target.className === 'calendar__time-slot') {
      handleChangeShowModal();
    }
  };
  return (
    <div className="calendar__week" onClick={onHoureClick}>
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        //getting all events from the day we will render
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        const isCurrentDay = dayStart.getDate() === new Date().getDate();
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDeleteEvent={onDeleteEvent}
            isCurrentDay={isCurrentDay}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  handleChangeShowModal: PropTypes.func.isRequired,
};

export default Week;
