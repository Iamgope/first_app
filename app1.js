import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.bold}>hello budhiya!</Text>
      <View styles={styles.header}>
          <Text style={styles.bold}> hello bujho! </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding:20,
  },
  bold:{
     fontWeight:'bold',
  },
});
