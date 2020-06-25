import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const ColorInterpolate = props => {
  const colors = new Animated.Value(0);

  const boxInterpolate = colors.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)'],
  });
  const textInterpolate = colors.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(99,71,255)', 'rgb(255,99,71)'],
  });

  const startAnimation = () => {
    Animated.timing(colors, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyles = {
    backgroundColor: boxInterpolate,
  };
  const textColor = {
    color: textInterpolate,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={{ ...styles.box, ...animatedStyles }}>
          <Animated.Text style={textColor}>Colors change</Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default ColorInterpolate;

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
