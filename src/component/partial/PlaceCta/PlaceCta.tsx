import React from 'react';
import { Image, Pressable, View } from 'react-native';

import Text from '/component/base/Text';

import { PlaceCtaProps } from './PlaceCta.types';

import styles from './PlaceCta.styles';

const PlaceCta: React.FC<PlaceCtaProps> = ({
  image,
  title,
  location,
  eyebrow,
  onPress,
  style: styleProps,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, styleProps]}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={image} />
          {!!eyebrow && (
            <View style={styles.eyebrow}>
              <Text variant="label" color="white">
                {eyebrow}
              </Text>
            </View>
          )}
        </View>

        <Text variant="heading2" style={styles.title}>
          {title}
        </Text>
        <Text color="grey">{location}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceCta;
