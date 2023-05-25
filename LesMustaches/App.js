
import { StyleSheet, Text, View } from 'react-native';
import Index from './view';

export default function App() {
  return (
    <View style={styles.container}>
      <Index/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
