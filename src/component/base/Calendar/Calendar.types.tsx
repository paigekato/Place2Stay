import { StyleProp, ViewStyle } from 'react-native';

export interface MarkedDatesProps {
  endingDay?: boolean;
  startingDay?: boolean;
  color?: string;
}

export interface MarkedDatesType {
  [date: string]: MarkedDatesProps;
}

export interface onPressProps {
  startingDate?: string;
  endingDate?: string;
}

export interface CalendarProps {
  onPress: ({}: onPressProps) => void;
  style?: StyleProp<ViewStyle>;
}
