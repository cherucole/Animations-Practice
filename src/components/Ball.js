import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Ball = props => {
  const position = new Animated.ValueXY(0, 0);
  Animated.spring(position, {
    toValue: { x: 200, y: 500 },
    useNativeDriver: false,
  }).start();

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'black',
  },
});

export default Ball;
