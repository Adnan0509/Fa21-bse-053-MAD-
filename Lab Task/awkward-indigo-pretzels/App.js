import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const GameLayout = () => {
  const [inputNumber, setInputNumber] = useState('');

  const handleNumberPress = (number) => {
    setInputNumber(inputNumber + number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guessing Game</Text>
      <TextInput
        style={styles.input}
        value={inputNumber}
        onChangeText={setInputNumber}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
      <View style={styles.buttonContainer}>
        {[...Array(10)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleNumberPress(index.toString())}
          >
            <Text style={styles.buttonText}>{index}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameLayout;