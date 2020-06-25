import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Translate = props => {
  const position = new Animated.Value(0);
  const startAnimation = () => {
    Animated.timing(position, {
      toValue: 250,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      position.setValue(0);
    }); //you can have another animation/function inside start to call it afterwards
  };
  const animatedStyles = {
    transform: [
      {
        translateY: position,
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
