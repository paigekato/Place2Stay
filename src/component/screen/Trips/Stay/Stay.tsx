import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import Text from '/component/base/Text';
import StayDetails from '/component/partial/StayDetails';

import { StayProps } from './Stay.types';

import styles from './Stay.styles';

const Stay: React.FC<StayProps> = ({ route }) => {
  const { stay } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={stay.image} />
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.title}>
          <Text variant="heading2">{stay.location}</Text>
          <Text style={styles.location} color="grey">
            {stay.title}
          </Text>
          <Text color="grey">Oct 29, 2022 - Oct 31, 2022</Text>
        </View>

        {stay.details?.map((detail, index) => (
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
