import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './source/Navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" translucent={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
