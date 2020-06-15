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
    return props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={position.getLayout()}
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
