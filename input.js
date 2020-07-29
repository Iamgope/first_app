import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';

export default function App() {
  const [name,setname]= useState('gope');
  const [age,setage]=useState(50)

  return (

    <View style={styles.container}>
      <Text>Enter_Name</Text>
      <TextInput 
      multiline
      style={styles.input}
       placeholder='eg.manmohan_singh'
       onChangeText={(val)=> setname(val)}/>
       <Text>Enter_Age</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
       placeholder='eg.76'
       onChangeText={(val)=> setage(val)}/>
  <Text>name is {name} and age is {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
