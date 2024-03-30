import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, ScrollView } from 'react-native';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const finalPrice = price - (price * discount) / 100;
      const savedAmount = price - finalPrice;
      const calculation = `${price} - ${discount}% = ${finalPrice.toFixed(2)}`;
      setHistory([...history, calculation]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
       
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={text => setDiscountPercentage(text.replace(/[^0-9.]/g, ''))}
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <ScrollView>
            {history.map((calculation, index) => (
              <Text key={index} style={styles.historyText}>{calculation}</Text>
            ))}
          </ScrollView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Button title="View History" onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  historyText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DiscountCalculator;
