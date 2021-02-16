import React from 'react';
import PropTypes from 'prop-types';
import { months, displayedMonth } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ nextWeek, prevWeek, onToday, weekStartDate, onCreateButton }) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={onCreateButton}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={onToday}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayedMonth(weekStartDate, months)}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  onToday: PropTypes.func.isRequired,
  weekStartDate: PropTypes.object.isRequired,
  onCreateButton: PropTypes.func.isRequired,
};

export default Header;
