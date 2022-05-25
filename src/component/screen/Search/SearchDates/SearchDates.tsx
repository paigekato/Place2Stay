import React from 'react';
import {
  Animated,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Button from '/component/base/Button';
import Calendar from '/component/base/Calendar';
import { onPressProps } from '/component/base/Calendar/Calendar.types';
import {
  DATES_OPTIONS,
  LENGTH_OPTIONS,
} from '/component/base/Calendar/dates.const';
import { getSelectedDateString } from '/component/base/Calendar/dates.util';
import Icon from '/component/base/Icon';
import Text from '/component/base/Text';
import CalendarToggle from '/component/partial/CalendarToggle';
import SearchDetails from '/component/partial/SearchDetails';

import styles from './SearchDates.styles';

const SearchDates: React.FC = ({ navigation, route }) => {
  const [activeView, setActiveView] = React.useState('dates'); // dates || flexible
  const [length, setLength] = React.useState('Weekend');
  const [date, setDate] = React.useState('');

  const { location } = route.params;

  const handleButtonPress = () => {
    navigation.navigate('SearchGuests', {
      location,
      dates: activeView === 'dates' ? date : `${length} in ${date}`,
    });
  };

  const handleTogglePress = (value: string) => {
    setActiveView(value);
  };

  const handleDateSelect = ({ endingDate, startingDate }: onPressProps) => {
    // Create a placeholder date string to show in search params
    const dateString = getSelectedDateString({ startingDate, endingDate });

    setDate(dateString);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchDetails location={location} />
        <Animated.View style={styles.content}>
          <View>
            <CalendarToggle onPress={handleTogglePress} />

            {/* DATE VIEW SHOWS CALENDAR */}
            {activeView === 'dates' ? (
              <Calendar
                style={styles.calendarWrapper}
                onPress={handleDateSelect}
              />
            ) : (
              // FLEXIBLE VIEW SHOWS PICKER BUTTONS
              <>
                {/* Duration select  */}
                <View style={styles.flexibleWrapper}>
                  <Text variant="label">
                    Stay for a{' '}
                    <Text variant="label" fontWeight="800">
                      {length}
                    </Text>
                  </Text>

                  <View style={styles.optionsWrapper}>
                    {LENGTH_OPTIONS.map((option) => (
                      <Pressable
                        key={option}
                        style={[
                          styles.option,
                          length === option && styles.activeOption,
                        ]}
                        onPress={() => setLength(option)}
                      >
                        <Text style={styles.optionText}>{option}</Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                {/* Month select */}
                <View style={styles.flexibleWrapper}>
                  <Text variant="label">
                    Go in{' '}
                    <Text variant="label" fontWeight="800">
                      {date}
                    </Text>
                  </Text>

                  <ScrollView
                    style={styles.optionsWrapper}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {DATES_OPTIONS.map((month) => (
                      <Pressable
                        key={month}
                        style={[
                          styles.option,
                          styles.monthOption,
                          date === month && styles.activeOption,
                        ]}
                        // TODO Update to multi select
                        onPress={() => setDate(month)}
                      >
                        <Icon name="calendar" size="24px" />
                        <Text style={[styles.optionText, styles.monthText]}>
                          {month}
                        </Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              </>
            )}
          </View>
        </Animated.View>
        <Button
          isDisabled={!date}
          align="right"
          title="Next"
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchDates;
