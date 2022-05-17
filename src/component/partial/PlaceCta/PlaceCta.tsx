import React from 'react';
import { Image, View } from 'react-native';

import Text from '/component/base/Text';

import { PlaceCtaProps } from './PlaceCta.types';

import styles from './PlaceCta.styles';

const PlaceCta: React.FC<PlaceCtaProps> = ({
  image,
  title,
  location,
  eyebrow,
  style: styleProps,
}) => {
  return (
    <View style={[styles.container, styleProps]}>
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
