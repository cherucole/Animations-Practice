import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Card = props => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.metadata}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        {props.children}
      </View>
    </View>
  );
};

export const Button = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttontext}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%',
    height: 400,
    borderWidth: 0.5,
    borderColor: '#bdbdbd',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  metadata: {
    height: '30%',
    backgroundColor: 'white',
  },
  cardTitle: {
    margin: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#03A9f4',
    width: '50%',
    height: 30,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttontext: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
});
