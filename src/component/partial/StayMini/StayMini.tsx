import React from 'react';
import { Image, Pressable, View } from 'react-native';

import Text from '/component/base/Text';

import { StayMiniProps } from './StayMini.types';

import styles from './StayMini.styles';

const StayMini: React.FC<StayMiniProps> = ({
  stay,
  onPress,
  style: styleProps,
}) => {
  const { image, title, host, location } = stay;
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, styleProps]}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={image} />
        </View>

        <View>
          <Text variant="heading3" style={styles.title}>
            {location}
          </Text>
          <Text color="grey" style={styles.attribute}>
            Hosted by {host}
          </Text>
          <Text color="grey">{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default StayMini;
