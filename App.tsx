import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
// import Home from '/component/screen/Home';
import Stay from 'component/screen/Stay';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* <Home /> */}
      <Stay />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
