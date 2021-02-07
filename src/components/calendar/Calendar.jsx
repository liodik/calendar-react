import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import defaultEvents  from '../../gateway/events';

import './calendar.scss';


const Calendar =({weekDates})=> {
const [events, setEvents]=useState(defaultEvents)
    return (
        <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
            <div className="calendar__week-container">
                <Sidebar />
                <Week weekDates={weekDates} events={events} />
            </div>
        </div>
    </section>
    )
}



// class Calendar extends Component {

//     state = {
//         events,
//     }

//     render() {
//         const { weekDates } = this.props;

//         return (
//             <section className="calendar">
//                 <Navigation weekDates={weekDates} />
//                 <div className="calendar__body">
//                     <div className="calendar__week-container">
//                         <Sidebar />
//                         <Week weekDates={weekDates} events={this.state.events} />
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

export default Calendar;