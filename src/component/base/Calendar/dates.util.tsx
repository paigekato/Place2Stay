import { addDays, format, parseISO } from 'date-fns';
import differenceInDays from 'date-fns/differenceInDays';
import isSameMonth from 'date-fns/isSameMonth';

import { MarkedDatesType, onPressProps } from './Calendar.types';

import { rangeStyles } from './Calendar.styles';

export const formatDateString = (date: Date) => format(date, 'yyyy-MM-dd');

// getDateRange returns an array of marked dates for the rn
// calendar given two dates.
export const getDateRange = (fromDateString: string, toDateString: string) => {
  let markedDates: MarkedDatesType = {};

  const fromDate = new Date(fromDateString);
  const toDate = new Date(toDateString);
  const range = differenceInDays(toDate, fromDate) + 1;

  if (range === 0) {
    markedDates = {
      [fromDateString]: { startingDay: true },
      [toDateString]: { endingDay: true },
    };
  } else {
    for (var i = 1; i <= range; i++) {
      const date = formatDateString(addDays(fromDate, i));

      if (i === 1) {
        markedDates[date] = { startingDay: true, ...rangeStyles };
      } else if (i < range) {
        markedDates[date] = { ...rangeStyles };
      } else {
        markedDates[date] = { endingDay: true, ...rangeStyles };
      }
    }
  }

  return markedDates;
};

export const getSelectedDateString = ({
  startingDate,
  endingDate,
}: onPressProps) => {
  let dateString = '';
  const startDate = startingDate && new Date(parseISO(startingDate));
  const endDate = endingDate && new Date(parseISO(endingDate));

  if (startDate) {
    dateString = format(startDate, 'LLL d');
  }

  if (startDate && endDate) {
    const sameMonth = isSameMonth(startDate, endDate);
    const dateFormat = sameMonth ? 'd' : 'LLL d';

    dateString = dateString + ' - ' + format(endDate, dateFormat);
  }

  return dateString;
};
