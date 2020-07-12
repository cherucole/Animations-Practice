import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Opacity from '../components/Opacity';
import Translate from '../components/Translate';
import Scale from '../components/Scale';
import ColorInterpolate from '../components/ColorInterpolate';
import Rotate from '../components/Rotate';
import Spring from '../components/Spring';
import Decay from '../components/Decay';
import Parallel from '../components/Parallel';
import Onboarder from '../components/Onboarder';

const Animations = props => <Onboarder />;
export default Animations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
