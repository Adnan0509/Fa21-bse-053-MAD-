import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const SQUARE_SIZE = 40;

const LIGHT_COLOR = 'blue';
const DARK_COLOR = 'white';

const Square = ({ color }) => (
  <View style={[styles.square, { backgroundColor: color }]} />
);


const Row = ({ rowNumber }) => (
  <View style={styles.row}>
    {[...Array(8)].map((_, index) => (
      <Square
        key={index}
        color={(rowNumber + index) % 2 === 0 ? LIGHT_COLOR : DARK_COLOR}
      />
    ))}
  </View>
);

const Chessboard = () => (
  <View style={styles.container}>
    {[...Array(8)].map((_, index) => (
      <Row key={index} rowNumber={index} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
  },
});

export default Chessboard;
