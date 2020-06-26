import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Translate = props => {
  const rotation = new Animated.Value(0);
  const startAnimation = () => {
    Animated.timing(rotation, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: true,
    }).start(); //you can have another animation/function inside start to call it afterwards
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '160deg'],
  });
  const animatedStyles = {
    transform: [
      {
        rotate: rotateInterpolate,
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
export default Translate;

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
