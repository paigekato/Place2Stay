import React from 'react';
import { View } from 'react-native';

import SearchBox from './SearchBox';

import { SearchBoxProps } from './SearchDetails.types';

import styles from './SearchDetails.styles';

const SearchDetails: React.FC<SearchBoxProps> = ({
  location,
  dates,
  guests,
  style: styleProps,
}) => {
  return (
    <View style={styleProps}>
      <SearchBox style={styles.container} attribute="where" value={location} />
      {!!dates && (
        <SearchBox style={styles.container} attribute="when" value={dates} />
      )}
      {!!guests && <SearchBox attribute="who" value={guests} />}
    </View>
  );
};

export default SearchDetails;
