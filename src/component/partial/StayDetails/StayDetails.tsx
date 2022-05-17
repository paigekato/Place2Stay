import React from 'react';
import { View } from 'react-native';

import Text from '/component/base/Text';

import { SectionHeaderProps } from './StayDetails.types';

import styles from './StayDetails.styles';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  details,
  style: styleProps,
}) => {
  return (
    <View style={[styles.container, styleProps]}>
      <View style={styles.typeWrapper}>
        <Text style={styles.type} variant="label">
          {details.title}
        </Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.menuDots} variant="heading2">
          •••
        </Text>
      </View>

      {details.items.map((item, index) => (
        <View
          style={[
            styles.attributeWrapper,
            index + 1 !== details.items.length && styles.attributeSpacing,
          ]}
        >
          <Text style={styles.itemLabel}>{item.itemLabel}</Text>
          <Text>{item.itemDetail}</Text>
        </View>
      ))}
    </View>
  );
};

export default SectionHeader;
