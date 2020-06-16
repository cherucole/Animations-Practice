import React from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Deck = props => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {
      resetPosition();
    },
  });

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
    return props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={getCardStyle()}
            {...panResponder.panHandlers}>
            {props.renderCard(item)}
          </Animated.View>
        );
      }
      return props.renderCard(item);
    });
  };
  return <View>{renderCards()}</View>;
};

export default Deck;
