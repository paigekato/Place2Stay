import React from 'react';
import { Image, View } from 'react-native';

import Text from 'component/base/Text';
import styles from './PlaceCta.styles';
import { PlaceCtaProps } from './PlaceCta.types';

const PlaceCta: React.FC<PlaceCtaProps> = ({
  image,
  title,
  location,
  eyebrow,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={image} />
        {!!eyebrow && (
          <View style={styles.eyebrow}>
            <Text variant="label">{eyebrow}</Text>
          </View>
        )}
      </View>

      <Text variant="heading2" style={styles.title}>
        {title}
      </Text>
      <Text color="grey">{location}</Text>
    </View>
  );
};

export default PlaceCta;
