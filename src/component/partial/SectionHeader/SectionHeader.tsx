import Text from 'component/base/Text';
import React from 'react';
import { View } from 'react-native';

import styles from './SectionHeader.styles';
import { SectionHeaderProps } from './SectionHeader.types';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text variant="heading1" style={styles.heading}>
        {title}
      </Text>

      {!!body && <Text>{body}</Text>}
    </View>
  );
};

export default SectionHeader;
