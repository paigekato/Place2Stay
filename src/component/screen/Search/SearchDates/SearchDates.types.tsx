import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SearchStackScreens } from '/component/navigator/SearchStack/SearchStack.types';

export type SearchDatesProps = NativeStackScreenProps<
  SearchStackScreens,
  'SearchDates'
>;
