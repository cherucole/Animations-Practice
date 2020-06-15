import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Card = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.image }}
        style={{ width: '100%', height: '70%' }}
      />
      <Text style={{ margin: 10, fontSize: 16, fontWeight: '700' }}>
        {props.title}
      </Text>
      {props.children}
    </View>
  );
};

export const Button = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#03A9f4',
        width: '50%',
        height: 30,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{ color: 'white', fontWeight: '600', fontSize: 17 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%',
    height: 400,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
});
