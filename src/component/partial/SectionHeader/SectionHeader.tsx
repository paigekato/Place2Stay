import React from 'react';
import { View } from 'react-native';

import Text from '/component/base/Text';

import { SectionHeaderProps } from './SectionHeader.types';

import styles from './SectionHeader.styles';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  body,
  style: styleProps,
}) => {
  return (
    <View style={[styles.container, styleProps]}>
      <Text variant="heading1" style={styles.heading}>
        {title}
      </Text>

      {!!body && <Text>{body}</Text>}
    </View>
  );
};

export default SectionHeader;
