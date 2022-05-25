import React from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Button from '/component/base/Button';
import Text from '/component/base/Text';
import PlaceCta from '/component/partial/PlaceCta';
import SearchButton from '/component/partial/SearchButton';
import { handleScrollYOffset } from '/component/util/scroll';
import { staysMockData } from '/data/mockData';

import { SearchResultsProps } from './SearchResults.types';

import styles from './SearchResults.styles';

const SearchResults: React.FC<SearchResultsProps> = ({ navigation, route }) => {
  const { location, dates, guests } = route.params;
  const [isScrolled, setIsScrolled] = React.useState(false);

  const stays = staysMockData;

  let guestList: string[] = [];

  Object.keys(guests).map((type) => {
    const num = guests[type];

    num > 0 && guestList.push(`${num} ${type}`);
  });

  const handleButtonPress = () => {
    // TODO HOW DO I TYPE THIS
    // TODO HOW DO I TYPE THIS
    navigation.navigate('Home');
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIsScrolled(handleScrollYOffset(e));
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <SearchButton
            subtitle={`${location} - ${dates} - ${guestList.join(', ')}`}
            onPress={() => navigation.popToTop()}
            style={styles.searchResults}
          />

          <View style={isScrolled && styles.divider}>
            <Text style={styles.heading} variant="heading2">
              Search results
            </Text>
          </View>

          <ScrollView
            onScroll={handleScroll}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={20}
          >
            {stays.map((stay) => (
              <PlaceCta key={stay.location} place={stay} onPress={() => {}} />
            ))}
          </ScrollView>
        </View>

        <Button
          style={styles.button}
          align="right"
          title="Done"
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchResults;
