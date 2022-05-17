import React from 'react';
import { FlatList, View } from 'react-native';
import PlaceCta from 'component/partial/PlaceCta';
import SectionHeader from 'component/partial/SectionHeader';
import { homeMockData } from 'data/mockData';

import styles from './Home.styles';

const Home: React.FC = () => {
  const { title, description, places } = homeMockData.sections.placeCtas;

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<SectionHeader title={title} body={description} />}
        renderItem={({ item }) => (
          <PlaceCta
            image={item.image}
            title={item.location}
            location={item.title}
            eyebrow={item.imageLabel}
          />
        )}
      />
    </View>
  );
};

export default Home;
