import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_ENDPOINT = 'http://localhost:61038/api/updateEmployee';
const Update = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [_name, setName] = useState('');
  const [_address, setAddress] = useState('');
  const [_email, setEmail] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_ENDPOINT}/${id}`, {
        name: _name,
        address: _address,
        email:_email,
      }); 
      if (response.status === 200) {
        Alert.alert('Success', 'Data updated successfully.');
        navigation.navigate('home');
    }
    } catch (error) {
      Alert.alert('Error', 'Failed to update data. Please try again.');
      console.error('Error updating data:', error);
    }
  };
  return (
    <SafeAreaView>
    <View style={{paddingHorizontal:10,marginTop:20}}>
    <Text>ID</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Id "
          value={id}
          onChangeText={setId}
        />
      <Text>Name</Text>
       <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={_name}
        onChangeText={setName}
      />
       <Text>Address</Text>
       <TextInput
         style={styles.textInput}
        placeholder="Enter your Address"
        value={_address}
        onChangeText={setAddress}
      />
       <Text>Email</Text>
       <TextInput
       style={styles.textInput}
        placeholder="Email"
        value={_email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={handleUpdate}>
        <Text style={{fontSize:20}}>Updte Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={()=> navigation.navigate('Home')} 
      >
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    textInput:{
        padding:10,
        borderWidth:1,
        borderColor:"#888",
        marginBottom:10
       },
       btnContainer:{
        borderWidth:1,
        borderColor:"gray",
        backgroundColor:"pink",
        padding:10,
        marginTop:10,
        textAlign:"center",
        justifyContent:"center",
       alignItems:"center"
       }
}
)
export default Update;