import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';

import Text from '/component/base/Text';
import SearchDetails from '/component/partial/SearchDetails';

import styles from './SearchGuests.styles';

const SearchGuests: React.FC = ({ navigation, route }) => {
  const { location, dates } = route.params;
  const { length, month } = dates;

  const handleButtonPress = () => {
    // TODO add SearchResults screen that mimicks home
    navigation.navigate('HomeHome');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchDetails location={location} dates={`${length} in ${month}`} />

        <View style={styles.content}>
          <Text variant="heading2">Who's coming?</Text>
          {/* TODO Add guest pickers */}
        </View>
        <Button title="Next" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default SearchGuests;
