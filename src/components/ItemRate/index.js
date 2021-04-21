import styles from './styles';

import React from 'react';
import {View, Text, Image} from 'react-native';

const ItemRate = ({image, label, price}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleGreen}>
        <Image style={styles.img} source={image} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.price}>Rs.{price}/KG</Text>
    </View>
  );
};

export default ItemRate;
