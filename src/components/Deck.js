import React from 'react';
import { View, Animated } from 'react-native';

const Deck = props => {
  const renderCards = () => {
    return props.data.map(item => {
      return props.renderCard(item);
    });
  };
  return <View>{renderCards()}</View>;
};

export default Deck;
