import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Opacity from '../components/Opacity';
import Translate from '../components/Translate';
import Scale from '../components/Scale';
import ColorInterpolate from '../components/ColorInterpolate';

const Animations = props => <ColorInterpolate />;
export default Animations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
