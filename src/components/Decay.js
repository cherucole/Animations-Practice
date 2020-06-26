import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
  Alert,
} from 'react-native';

const Translate = props => {
  const position = new Animated.ValueXY(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      position.extractOffset();
    },
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, { vx, vy }) => {
      Animated.decay(position, {
        velocity: { x: vx, y: vy },
        deceleration: 0.997,
        useNativeDriver: false,
      }).start();
    },
  });

  const animatedStyles = {
    transform: position.getTranslateTransform(), //works similar to below but easier
    // transform: [
    //   {
    //     translateX: position.x,
    //   },
    //   {
    //     translateY: position.y,
    //   },
    // ],
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.box, ...animatedStyles }}
        {...panResponder.panHandlers}
      />
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
