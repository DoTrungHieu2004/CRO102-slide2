import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext('light');

export default function UseContextScreen() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeContext.Provider value={theme}>
        <View style={styles.container}>
          <Text style={styles.title}>UseContextScreen</Text>
          <Button title='Đổi theme' onPress={toggleTheme} />
          <Paragraph />
        </View>
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

export function Paragraph() {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: theme === 'light' ? 'white' : 'gray' }}>
      <Text style={styles.paragraph}>Lớp học React Native là một lớp học tuyệt vời, với những kiến thức cực kỳ dễ học và trần đầy yêu thương.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },
  paragraph: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16
  }
});