import moment from 'moment';

export const durationOfEvent = (dateFrom, dateTo) => {
  const start = dateFrom.split(':');
  const end = dateTo.split(':');
  const duration = +end[0] * 60 + +end[1] - (+start[0] * 60 + +start[1]);

  return duration > 360 ? true : false;
};

export const multiples = (dateFrom, dateTo) => {
  const start = dateFrom.split(':');
  const end = dateTo.split(':');
  const duration = +end[0] * 60 + +end[1] - (+start[0] * 60 + +start[1]);

  return +start[1] % 15 !== 0 || duration % 15 !== 0 ? true : false;
};

export const validationForDelete = time => {
  const startTime = time.substring(0, 5).split(':');
  const currentTime = moment(new Date()).format('HH:mm').split(':');

  const timeToStart = +startTime[0] * 60 + +startTime[1] - (+currentTime[0] * 60 + +currentTime[1]);
  return timeToStart < 15 && timeToStart > 0 ? true : false;
};
