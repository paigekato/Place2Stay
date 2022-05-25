import React from 'react';
import {
  Animated,
  Easing,
  InteractionManager,
  SafeAreaView,
} from 'react-native';

import IconButton from '/component/base/IconButton';
import Text from '/component/base/Text';
import SearchButtonStyles from '/component/partial/SearchButton/SearchButton.styles';
import SearchForm from '/component/partial/SearchForm';

import styles from './SearchHome.styles';

const SearchHome: React.FC = ({ navigation }) => {
  const searchButtonHeight = SearchButtonStyles.container.height;
  const fadeInAnimation = React.useRef(new Animated.Value(0)).current;
  const contentFadeIn = React.useRef(new Animated.Value(0)).current;
  const heightAnimation = React.useRef(
    new Animated.Value(searchButtonHeight),
  ).current;

  const animate = (direction = 'in', navigateOnEnd = false) => {
    const animationIn = direction === 'in';

    return Animated.parallel([
      Animated.timing(fadeInAnimation, {
        toValue: animationIn ? 1 : 0,
        duration: animationIn ? 500 : 350,
        delay: animationIn ? 0 : 440,
        useNativeDriver: true,
      }),
      Animated.timing(contentFadeIn, {
        toValue: animationIn ? 1 : 0,
        duration: animationIn ? 800 : 350,
        delay: animationIn ? 600 : 0,
        useNativeDriver: true,
      }),
      Animated.timing(heightAnimation, {
        toValue: animationIn ? 450 : searchButtonHeight,
        duration: animationIn ? 400 : 500,
        delay: animationIn ? 600 : 0,
        easing: Easing.bezier(0.17, 0.67, 0.27, 0.84),
        useNativeDriver: false,
      }),
    ]).start(() => {
      navigateOnEnd && navigation.goBack();
    });
  };

  React.useEffect(() => {
    // Make sure this screen is fully mounted before starting the animation
    const interactionPromise = InteractionManager.runAfterInteractions(() =>
      animate('in'),
    );

    return () => interactionPromise.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opacityFadeIn = fadeInAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.95],
  });

  const handleSearchResultPress = (city: string) => {
    navigation.push('SearchDates', {
      location: city,
    });
  };

  return (
    <SafeAreaView>
      <Animated.View style={[styles.container, { opacity: fadeInAnimation }]}>
        <Animated.View style={[styles.wrapper, { opacity: opacityFadeIn }]} />

        <IconButton onPress={() => animate('out', true)} size="16px" />

        <Animated.View style={[styles.search, { height: heightAnimation }]}>
          <Animated.View style={{ opacity: contentFadeIn }}>
            <Text variant="heading1">Where to?</Text>
            <SearchForm
              style={styles.searchForm}
              onPress={handleSearchResultPress}
            />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default SearchHome;
