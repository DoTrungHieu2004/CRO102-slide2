import { memo, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const Content = memo(({ count }) => {
  console.log('Re-render in Content, count = ', count);
  return (
    <View style={styles.contentContainer}>
      <Text>Lớp học Đa nền tảng 2</Text>
    </View>
  );
});

export default function TabTwoScreen() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleIncrease2 = () => {
    setCount2(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>{count} - {count2}</Text>
      <View style={styles.separate} />
      <Button title='Tăng state 1' onPress={handleIncrease} />
      <View style={styles.separate} />
      <Button title='Tăng state 2' onPress={handleIncrease2} />
      <Content count={count} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCount: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold'
  },
  separate: {
    marginTop: 10,
    marginBottom: 10
  },
  contentContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});