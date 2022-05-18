import React from 'react';
import { SafeAreaView, View } from 'react-native';

import Text from '/component/base/Text';

import styles from './Search.styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>SEARCH MODAL</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
