import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';
import {
  onScrollEvent,
  useValue,
  interpolateColor,
  useScrollHandler,
} from 'react-native-redash';
import Animated from 'react-native-reanimated';

import Slide, { SLIDE_HEIGHT } from './Slide';
import Subslide from './Subslide';

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;
const { multiply } = Animated;

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about what to wear? Don't worry! Find the best outfit here",
    color: '#33b5e5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#ffbb33',
  },
  {
    title: 'Eccentric',
    subtitle: 'Your Style, Your Way',
    description:
      "Confused about what to wear? Don't worry! Find the best outfit here",
    color: '#ff4444',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#00C851',
  },
];

const Onboarder = props => {
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}>
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}>
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              {...{ subtitle, description }}
              last={index === slides.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};
export default Onboarder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: 'row',
  },
});
