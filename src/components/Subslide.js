import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Button = ({ variant, label, onPress }) => {
  const backgroundColor =
    variant === 'primary' ? '#00C851' : 'rgba(12, 13, 52, 0.05)';

  const color = variant === 'primary' ? 'white' : '#0c0d34';
  return (
    <RectButton
      style={{ ...styles.buttonContainer, backgroundColor }}
      {...{ onPress }}>
      <Text style={{ ...styles.buttonLabel, color }}>{label}</Text>
    </RectButton>
  );
};

const Subslide = ({ subtitle, description, last, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.description}>{description}</Text>
    <Button
      label={last ? "Let's get started" : 'Next'}
      variant={last ? 'primary' : 'default'}
      {...{ onPress }}
    />
  </View>
);
export default Subslide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 44,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    fontWeight: '600',
    color: '#0C0D34',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    height: 50,
    width: 245,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
});
