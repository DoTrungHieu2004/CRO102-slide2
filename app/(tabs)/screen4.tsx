import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useMemo, useState } from 'react'

export default function UseMemoScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
  };

  const total = useMemo(() => {
    console.log('Tính toán lại...');
    const result = products?.reduce((_result, prod) => {
      return _result = prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          value={name}
          style={styles.input}
          onChangeText={setName}
        />
        <TextInput
          value={price}
          style={styles.input}
          onChangeText={setPrice}
          inputMode='numeric'
        />
        <Button title='Thêm' onPress={handleSubmit} />
        <Text style={styles.sumPrice}>Tổng giá: {total}</Text>
        {Array.isArray(products) && products?.map((product, index) => (
          <Text key={index} style={styles.arrayText}>
            {product.name} - {product.price}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    padding: 10,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'black'
  },
  sumPrice: {
    marginTop: 60,
    fontSize: 20,
    color: 'black'
  },
  arrayText: {
    fontSize: 20,
    color: 'black',
    marginTop: 5
  }
});