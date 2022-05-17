import React from 'react';
import { FlatList, Image, ScrollView, View } from 'react-native';

import Text from '/component/base/Text';
import PlaceCta from '/component/partial/PlaceCta';
import SectionHeader from '/component/partial/SectionHeader';
import { homeMockData } from '/data/mockData';

import styles from './Home.styles';

const Home: React.FC = () => {
  const { placeCtas, cityCtas } = homeMockData.sections;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={placeCtas.places}
      initialNumToRender={10}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.title + item.id}
      ListHeaderComponent={
        <SectionHeader
          style={styles.wrapper}
          title={placeCtas.title}
          body={placeCtas.description}
        />
      }
      renderItem={({ item }) => (
        <PlaceCta
          image={item.image}
          title={item.location}
          location={item.title}
          eyebrow={item.imageLabel}
          style={styles.wrapper}
        />
      )}
      ListFooterComponent={
        <View style={styles.footerWrapper}>
          <Text style={styles.cityHeader} variant="heading1">
            {cityCtas.title}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cityCtas.places.map((city, index) => (
              <View
                style={[
                  styles.cityWrapper,
                  index === cityCtas.places.length - 1 && styles.lastImage,
                ]}
                key={city.id}
              >
                <Image source={city.image} style={styles.footerImage} />
                <Text variant="heading3">{city.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      }
    />
  );
};

export default Home;
