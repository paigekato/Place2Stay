import React from 'react';
import { Image, ScrollView, StatusBar, View } from 'react-native';
import StayDetails from 'component/partial/StayDetails';
import { homeMockData } from 'data/mockData';

import Asset1 from '/asset/image/place-1.png';
import Text from '/component/base/Text';

import styles from './Stay.styles';

const Stay: React.FC = () => {
  const DATA = homeMockData.sections.placeCtas.places[0];
  const { title, location, details } = DATA;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={Asset1} />
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.title}>
          <Text variant="heading2">{location}</Text>
          <Text style={styles.location} color="grey">
            {title}
          </Text>
          <Text color="grey">Oct 29, 2022 - Oct 31, 2022</Text>
        </View>

        {details?.map((detail, index) => (
          <StayDetails
            key={detail.title + index}
            style={styles.detail}
            details={detail}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Stay;
