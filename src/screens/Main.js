import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Deck from '../components/Deck';
import { Card, Button } from '../components/UI';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];

const Main = props => {
  const renderCard = item => {
    return (
      <Card key={item.id} image={item.uri} title={item.text}>
        <Text style={styles.caption}>
          I can customize my card further with children
        </Text>
        <Button title="Action" />
      </Card>
    );
  };
  return (
    <SafeAreaView>
      <Deck data={DATA} renderCard={renderCard} />
    </SafeAreaView>
  );
};
export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  caption: {
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 14,
  },
});
