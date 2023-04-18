import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

export default function App() {
  return (
    <View style={styles.container}>
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F08080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
