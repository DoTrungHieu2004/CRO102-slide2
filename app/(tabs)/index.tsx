import { useEffect, useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Button } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(10);
  
  const [infoUser, setInfoUser] = useState({
    name: 'Đỗ Trung Hiếu',
    age: 20
  });

  const handleIncrease = () => {
    setCount(count + 5);
  };

  const updateInfoUser = () => {
    setInfoUser({
      ...infoUser,
      age: 21
    });
  };

  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  console.log(
    'prevCount = ', prevCount.current, 'count = ', count
  );
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textCount}>{count}</Text>
        <Button title='Tăng' onPress={handleIncrease} />

        <Text style={styles.textCount}>{infoUser.name} - {infoUser.age}</Text>

        <Button title='Update info user' onPress={updateInfoUser} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCount: {
    fontSize: 40
  }
});
