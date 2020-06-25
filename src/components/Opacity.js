import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Opacity = props => {
  const opacity = new Animated.Value(1);
  const startAnimation = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start(); //you can have another animation/function inside start to call it afterwards
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={{ ...styles.box, opacity }} />
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Opacity;

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
