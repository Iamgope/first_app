import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

export default function App() {
  const [name,setname]= useState('gope');
  const [person,setPerson]=useState({name:'mohan',age:43})
  const clickHandeler=()=>{
    setname('iamgope');
    setPerson({name:'radhe',age:27})
  }
  return (

    <View style={styles.container}>
      <Text>my name is {name} </Text>
      <Text>his name is {person.name} and his age is {person.age} </Text>
      <View style={styles.buttoncontainer}>
        <Button title='update state' onPress={clickHandeler}/>

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
  body:{
     backgroundColor:'yellow',
    
  },
  buttoncontainer:{
    marginTop: 30
  }
});