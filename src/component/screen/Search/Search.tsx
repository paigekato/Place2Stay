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

import styles from './Search.styles';

const Search: React.FC = ({ navigation }) => {
  const searchButtonHeight = SearchButtonStyles.container.height;
  const fadeInAnimation = React.useRef(new Animated.Value(0)).current;
  const contentFadeIn = React.useRef(new Animated.Value(0)).current;
  const heightAnimation = React.useRef(
    new Animated.Value(searchButtonHeight),
  ).current;

  const animate = () =>
    Animated.parallel([
      Animated.timing(fadeInAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(contentFadeIn, {
        toValue: 1,
        duration: 800,
        delay: 250,
        useNativeDriver: true,
      }),
      Animated.timing(heightAnimation, {
        toValue: 450,
        duration: 800,
        delay: 450,
        easing: Easing.bezier(0.17, 0.67, 0.27, 0.84),
        useNativeDriver: false,
      }),
    ]).start();

  React.useEffect(() => {
    // Make sure this screen is fully mounted before starting the animation
    const interactionPromise = InteractionManager.runAfterInteractions(() =>
      animate(),
    );

    return () => interactionPromise.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const opacityFadeIn = fadeInAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.95],
  });

  const opacitySlowFadeIn = contentFadeIn.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacityFadeOut = fadeInAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView>
      <Animated.View style={[styles.container, { opacity: opacityFadeOut }]}>
        <Animated.View style={[styles.wrapper, { opacity: opacityFadeIn }]} />

        <IconButton onPress={() => navigation.goBack()} size="16px" />

        <Animated.View style={[styles.search, { height: heightAnimation }]}>
          <Animated.View style={{ opacity: opacitySlowFadeIn }}>
            <Text variant="heading1">Where to?</Text>
            <SearchForm style={styles.searchForm} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Search;
