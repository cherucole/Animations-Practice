import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { onScrollEvent, useValue, interpolateColor } from 'react-native-redash';
import Animated from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT } from './Slide';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    label: 'Relaxed',
    color: '#33b5e5',
  },
  {
    label: 'Playful',
    color: '#ffbb33',
  },
  {
    label: 'Eccentric',
    color: '#00C851',
  },
  {
    label: 'Funky',
    color: '#ff4444',
  },
];

const Onboarder = props => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}>
          {slides.map(({ label }, index) => (
            <Slide key={index} {...{ label }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View
          style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};
export default Onboarder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});
