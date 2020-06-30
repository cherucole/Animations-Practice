import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Parallel = props => {
  const color = new Animated.Value(0);
  const scale = new Animated.Value(1);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(color, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: 3,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const colorInterpolate = color.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });

  const scaleInterpolate = scale.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 2],
    extrapolate: 'clamp', //this means when the value of scale goes beyond input stop it
  });

  const animatedStyles = {
    backgroundColor: colorInterpolate,
    transform: [
      {
        scale: scaleInterpolate,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={{ ...styles.box, ...animatedStyles }} />
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Parallel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'tomato',
  },
});
