import React from 'react';
import {
  Animated,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Text from '/component/base/Text';
import CalendarToggle from '/component/partial/CalendarToggle';
import SearchDetails from '/component/partial/SearchDetails';

import styles from './SearchStay.styles';

const LENGTH_OPTIONS = ['Weekend', 'Week', 'Month'];
const DATES_OPTIONS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
];

const SearchStay: React.FC = ({ navigation, route }) => {
  const [activeView, setActiveView] = React.useState('flexible');
  const [length, setLength] = React.useState('Weekend');
  const [date, setDate] = React.useState('January');

  const { location } = route.params;

  const handleButtonPress = () => {
    navigation.navigate('SearchGuests', {
      location,
      dates: {
        month: date,
        length,
      },
    });
  };

  const handleTogglePress = (value: string) => {
    setActiveView(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchDetails location={location} />
        <Animated.View style={styles.content}>
          <View>
            <CalendarToggle onPress={handleTogglePress} />

            {activeView === 'dates' ? (
              <Text>Calendar Picker</Text>
            ) : (
              <>
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
                          date === month && styles.activeOption,
                        ]}
                        // TODO Update to multi select
                        onPress={() => setDate(month)}
                      >
                        <Text style={styles.optionText}>{month}</Text>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              </>
            )}
          </View>
        </Animated.View>
        <Button title="Next" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default SearchStay;
