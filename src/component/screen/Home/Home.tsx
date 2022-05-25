import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import Text from '/component/base/Text';
import PlaceCta from '/component/partial/PlaceCta';
import SearchButton from '/component/partial/SearchButton';
import SectionHeader from '/component/partial/SectionHeader';
import { handleScrollYOffset } from '/component/util/scroll';
import { homeMockData, staysMockData } from '/data/mockData';

import { HomeProps } from './Home.types';

import styles from './Home.styles';

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { placeCtas, cityCtas } = homeMockData.sections;
  const stays = staysMockData;

  const animated = React.useRef(new Animated.Value(1)).current;

  const [isScrolledY, setIsScrolledY] = React.useState(false);
  const [scrollPosYOld, setScrollPosYOld] = React.useState(0);
  const [scrollPosYNew, setScrollPosYNew] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIsScrolledY(handleScrollYOffset(e, 60));

    setScrollPosYNew(e.nativeEvent.contentOffset.y);

    // +30 prevents triggering when scroll view bounces
    if (scrollPosYOld > scrollPosYNew + 30) {
      animate('up');
    }

    setScrollPosYOld(scrollPosYNew);
  };

  const animate = (direction = 'down') => {
    Animated.timing(animated, {
      toValue: direction === 'down' ? 0 : -height,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    if (isScrolledY) {
      animate('down');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrolledY]);

  return (
    <SafeAreaView>
      <FlatList
        onScroll={handleScroll}
        scrollEventThrottle={100}
        contentContainerStyle={styles.container}
        data={stays}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.location}
        ListHeaderComponent={
          <>
            <SearchButton
              style={styles.searchButton}
              onPress={() => navigation.push('Search')}
            />

            <SectionHeader
              style={styles.wrapper}
              title={placeCtas.title}
              body={placeCtas.description}
            />
          </>
        }
        renderItem={({ item }) => (
          <PlaceCta
            place={item}
            style={styles.wrapper}
            onPress={() =>
              navigation.push('Place', {
                stay: item,
              })
            }
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
      <Animated.View
        style={[styles.searchBar, { transform: [{ translateY: animated }] }]}
        onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
      >
        <SearchButton
          style={styles.searchButton}
          onPress={() => navigation.push('Search')}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
