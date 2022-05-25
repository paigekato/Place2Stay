import React from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

import Button from '/component/base/Button';
import IconButton from '/component/base/IconButton';
import Text from '/component/base/Text';
import SearchDetails from '/component/partial/SearchDetails';

import { SearchGuestsProps } from './SearchGuests.types';

import styles from './SearchGuests.styles';

const GUEST_RESTRICTIONS: Record<string, number> = {
  adult: 12,
  children: 12,
  infant: 4,
  pet: 4,
};

const SearchGuests: React.FC<SearchGuestsProps> = ({ navigation, route }) => {
  const { location, dates } = route.params;
  const [guests, setGuests] = React.useState<Record<string, number>>({
    adult: 0,
    children: 0,
    infant: 0,
    pet: 0,
  });

  const handleButtonPress = () => {
    if (guests.adult === 0) {
      Alert.alert(
        '',
        'At least one adult is needed to book. Please adjust your search.',
        [
          {
            text: 'Go back',
            style: 'cancel',
          },
        ],
      );
    } else {
      navigation.navigate('SearchResults', {
        location,
        dates,
        guests,
      });
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchDetails location={location} dates={dates} />

        <View style={styles.content}>
          <Text style={styles.heading} variant="heading2">
            Who's coming?
          </Text>

          {Object.keys(guests).map((type) => {
            const handlePress = (incrementor: string) => {
              if (incrementor === 'add') {
                setGuests({ ...guests, [type]: guests[type] + 1 });
              } else {
                setGuests({ ...guests, [type]: guests[type] - 1 });
              }
            };

            return (
              <View style={styles.option} key={type}>
                <Text variant="heading3" style={styles.text}>
                  {type}
                </Text>

                <View style={styles.increment}>
                  <IconButton
                    icon="remove"
                    isDisabled={guests[type] <= 0}
                    onPress={() => handlePress('subtract')}
                  />
                  <Text fontWeight="600">{guests[type]}</Text>
                  <IconButton
                    icon="plus"
                    isDisabled={guests[type] >= GUEST_RESTRICTIONS[type]}
                    onPress={() => handlePress('add')}
                  />
                </View>
              </View>
            );
          })}
        </View>
        <Button align="right" title="Next" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default SearchGuests;
