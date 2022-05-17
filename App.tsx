import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import PlaceCta from 'component/partial/PlaceCta';

import Asset1 from '/asset/image/place-1.png';
import Asset2 from '/asset/image/place-2.png';
import SectionHeader from '/component/partial/SectionHeader';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ marginHorizontal: 24 }}>
        <SectionHeader
          title="Find your getaway"
          body="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
        />

        <PlaceCta
          image={Asset1}
          title="Vancouver, BC"
          location="407 St Jacques | 1 Bdr"
          eyebrow="From $636"
        />
        <PlaceCta
          image={Asset2}
          title="Victoria, BC"
          location="407 St Jacques | 2 Bdr"
          eyebrow="From $436"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
