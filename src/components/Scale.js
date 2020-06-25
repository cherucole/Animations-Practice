import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Scale = props => {
  const scale = new Animated.Value(1);
  const startAnimation = () => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  };
  //animations without a function below, executed once screen renders
  const animatedVals = new Animated.Value(150);
  Animated.timing(animatedVals, {
    toValue: 300,
    duration: 1500,
    useNativeDriver: false,
  }).start();

  const AnimatedStyles = {
    // transform: [
    //   {
    //     scale: scale,
    //   },
    // ],
    width: animatedVals,
    height: animatedVals,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={{ ...styles.box, ...AnimatedStyles }}>
          <Text>This side forward</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Scale;

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
