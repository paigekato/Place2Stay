import React from 'react';
import { Image, Pressable, View } from 'react-native';

import Icon from '/component/base/Icon';
import Text from '/component/base/Text';

import { PlaceCtaProps } from './PlaceCta.types';

import styles from './PlaceCta.styles';

const PlaceCta: React.FC<PlaceCtaProps> = ({
  place,
  onPress,
  style: styleProps,
}) => {
  const { location, rating, price, image } = place;

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, styleProps]}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={image} />
        </View>

        <View style={styles.textWrapper}>
          <View>
            <Text variant="heading2">{location}</Text>
            <Text fontWeight="600">
              ${price} CAD <Text fontWeight="400">night</Text>
            </Text>
          </View>

          <View style={styles.rating}>
            <Text>{rating}</Text>
            <Icon name="star" size="12px" />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceCta;
