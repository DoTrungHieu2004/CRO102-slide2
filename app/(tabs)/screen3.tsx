import { memo, useCallback, useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export const ContentUseCallback = memo(({ onIncrease }) => {
  console.log('Re-render');
  return (
    <View>
      <Text>useCallback</Text>
      <Button title='Tăng' onPress={onIncrease} />
    </View>
  );
});

export default function Screen3() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textCount}>{count}</Text>
        <ContentUseCallback onIncrease={handleIncrease} />
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
  textCount: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20
  }
});