import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import Text from '/component/base/Text';
import SearchButton from '/component/partial/SearchButton';
import SectionHeader from '/component/partial/SectionHeader';
import StayMini from '/component/partial/StayMini';
import { homeMockData } from '/data/mockData';

import { TripsProps } from './Trips.types';

import styles from './Trips.styles';

// Trips shows list of user's past trips
const Trips: React.FC<TripsProps> = ({ navigation }) => {
  const { placeCtas } = homeMockData.sections;

  return (
    <SafeAreaView>
      <FlatList
        data={placeCtas.places}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title + item.id}
        ListHeaderComponent={
          <View style={styles.container}>
            <SearchButton onPress={() => navigation.push('Search')} />
            <SectionHeader
              title="Trips"
              body="Time to dust off your bags and start planning your next adventure."
              style={styles.heading}
            />

            <Text variant="heading3" style={styles.subheading}>
              Where you've been
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <StayMini
            stay={item}
            style={styles.wrapper}
            onPress={() =>
              navigation.push('Stay', {
                stay: item,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Trips;
