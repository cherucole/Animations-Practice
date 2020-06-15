import React from 'react';
import { View, Animated, PanResponder } from 'react-native';

const Deck = props => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {},
  });

  const renderCards = () => {
    return props.data.map(item => {
      return props.renderCard(item);
    });
  };
  return (
    <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
      {renderCards()}
    </Animated.View>
  );
};

export default Deck;
