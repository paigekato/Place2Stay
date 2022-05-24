import React from 'react';
import { View } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { isAfter, isBefore, parseISO } from 'date-fns';

import { colors } from '/theme/colors';

import { formatDateString, getDateRange } from './dates.util';

import { CalendarProps, MarkedDatesType } from './Calendar.types';

import styles, { rangeStyles } from './Calendar.styles';

const Calendar: React.FC<CalendarProps> = ({ onPress, style: styleProps }) => {
  const [startingDate, setStartingDate] = React.useState<string>();
  const [endingDate, setEndingDate] = React.useState<string>();
  const [markedDates, setMarkedDates] = React.useState<MarkedDatesType>();

  const today = new Date();
  const yesterday = formatDateString(today);

  React.useEffect(() => {
    onPress({ startingDate, endingDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingDate, endingDate]);

  const handleDatePress = ({ dateString }: { dateString: string }) => {
    const isDateBefore =
      startingDate && isBefore(parseISO(dateString), parseISO(startingDate));
    const isDateAfter =
      startingDate && isAfter(parseISO(dateString), parseISO(startingDate));

    if (
      !startingDate || // Nothing has been selected yet
      (startingDate && isDateBefore) || // Newly selected day is before startingDate
      (startingDate && endingDate) // Both dates had been set, reset the dates
    ) {
      setStartingDate(dateString);
      setEndingDate(undefined);

      setMarkedDates({
        [dateString]: { startingDay: true, ...rangeStyles },
      });
    } else if (startingDate && isDateAfter && !endingDate) {
      const range = getDateRange(startingDate, dateString);

      setEndingDate(dateString);
      setMarkedDates(range);
    }
  };

  return (
    <View style={[styles.container, styleProps]}>
      <RNCalendar
        onDayPress={handleDatePress}
        minDate={yesterday}
        disableAllTouchEventsForDisabledDays={true}
        markingType="period"
        markedDates={markedDates}
        theme={{
          monthTextColor: colors.textPrimary,
          arrowColor: colors.highlightColor,
          todayTextColor: colors.highlightColor,
          textMonthFontWeight: '600',
        }}
      />
    </View>
  );
};

export default Calendar;
