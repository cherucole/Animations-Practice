import React, { useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;
const SWIPE_OUT_DURATION = 250;

const Deck = props => {
  const [index, setIndex] = useState(0);

  const defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {},
  };

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe('right');
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe('left');
      } else {
        resetPosition();
      }
    },
  });
  const forceSwipe = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH * 1.5 : -SCREEN_WIDTH * 1.5;
    Animated.timing(position, {
      toValue: { x: x, y: 0 }, //you can use a single x as supported in ES6
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = direction => {
    const {
      onSwipeLeft = defaultProps.onSwipeLeft, //passing in default parameters in ES6
      onSwipeRight = defaultProps.onSwipeRight,
      data,
    } = props;
    const item = data[index];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setIndex(index + 1);
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2], //takes larger units to move 120 degrees
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }], //similar to rotate: rotate but now using ES6
    };
  };

  const renderCards = () => {
    if (index >= props.data.length) {
      return props.renderNoMoreCards();
    }
    return props.data
      .map((item, i) => {
        if (i < index) {
          return null;
        }
        if (i === index) {
          return (
            <Animated.View
              key={item.id}
              style={[getCardStyle(), styles.cardStyle]}
              {...panResponder.panHandlers}>
              {props.renderCard(item)}
            </Animated.View>
          );
        }
        return (
          <View key={item.id} style={styles.cardStyle}>
            {props.renderCard(item)}
          </View>
        );
      })
      .reverse();
  };
  return <View>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
  },
});

export default Deck;
