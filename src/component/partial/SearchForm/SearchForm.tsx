import React from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  View,
} from 'react-native';
import { citiesMockData } from 'data/mockData';

import Icon from '/component/base/Icon';
import Text from '/component/base/Text';
import TextInput from '/component/base/TextInput';

import { SearchButtonProps } from './SearchForm.types';

import styles from './SearchForm.styles';

const SearchForm: React.FC<SearchButtonProps> = ({
  onPress,
  style: styleProps,
}) => {
  const cities = citiesMockData;

  const [hasScrollResults, setHasScrolledResults] = React.useState(false);
  const [value, onValueChange] = React.useState('');
  const [cityList, setCityList] = React.useState(cities);

  React.useEffect(() => {
    if (value) {
      const list = cities.filter((city) => city.includes(value));

      setCityList(list);
    } else {
      setCityList(cities);
    }
  }, [value, cities]);

  // Add top border to results when scrolled
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offScrollY = e.nativeEvent.contentOffset.y;

    if (offScrollY > 0) {
      setHasScrolledResults(true);
    } else {
      setHasScrolledResults(false);
    }
  };

  return (
    <View style={[styles.container, styleProps]}>
      <TextInput style={styles.spacing} onChangeText={onValueChange} />
      {hasScrollResults && cityList.length !== 0 && (
        <View style={styles.underline} />
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        onScroll={handleScroll}
        scrollEventThrottle={10}
        data={cityList}
        renderItem={(item) => (
          <Pressable
            onPress={() => onPress(item.item)}
            key={item.item}
            style={[
              styles.placeWrapper,
              item.index + 1 === cities.length && styles.spacing,
            ]}
          >
            <View style={styles.iconWrapper}>
              <Icon name="location" size="20px" />
            </View>

            <Text variant="hint" color="grey">
              {item.item}
            </Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text>Hmmm... that city doesn't exist! Try again.</Text>
        }
      />
    </View>
  );
};

export default SearchForm;
