import { StyleProp, ViewStyle } from 'react-native';

type DetailAttributeType = {
  itemLabel: string;
  itemDetail: string;
};

type DetailsType = {
  title: string;
  items: DetailAttributeType[];
};

export interface SectionHeaderProps {
  details: DetailsType;
  style?: StyleProp<ViewStyle>;
}
