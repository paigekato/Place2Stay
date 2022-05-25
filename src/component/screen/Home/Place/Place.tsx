import React from 'react';
import { Button, Image, ScrollView, View } from 'react-native';

import Icon from '/component/base/Icon';
import Text from '/component/base/Text';

import { PlaceProps } from './Place.types';

import styles from './Place.styles';

const Place: React.FC<PlaceProps> = ({ navigation, route }) => {
  const { stay } = route.params;
  const { location, rating, host, description, price, beds, bath, image } =
    stay;

  React.useEffect(() => {
    navigation.setOptions({
      title: location,
    });
  }, [navigation, location]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={image} />
        </View>

        <View style={styles.contentWrapper}>
          <Text variant="heading2">Luxury stay in {location}</Text>

          <View style={[styles.divider, styles.attributes]}>
            <View>
              <Text fontWeight="600">
                4 Guests • {beds} Bed{beds === 1 ? '' : 's'} • {bath} Bath
              </Text>
              <Text style={styles.host}>Hosted by {host}</Text>
            </View>

            <View style={styles.rating}>
              <Icon name="star" size="12px" />
              <Text>{rating}</Text>
            </View>
          </View>

          <Text>{description}</Text>
        </View>
      </ScrollView>

      <View style={styles.reserveWrapper}>
        <View>
          <Text fontWeight="600">
            ${price} CAD <Text fontWeight="400">night</Text>
          </Text>
          {/* TODO Link to calendar to pick dates */}
          <Text style={styles.dates}>Sept 12 -27</Text>
        </View>

        <Button title="Reserve" />
      </View>
    </View>
  );
};

export default Place;
