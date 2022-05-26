import React from 'react';
import { SafeAreaView } from 'react-native';

import Text from '/component/base/Text';

import { SettingsProps } from './Settings.types';

import styles from './Settings.styles';

const Settings: React.FC<SettingsProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
