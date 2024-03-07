
import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text,StyleSheet,TextInput,ScrollView, View, TouchableOpacity, Modal, Alert } from 'react-native'
import axios from 'axios';

const NewPractice = () => {
  const [data, setData] = useState([]);
  const [modalTeacher, setModalTeacher] = useState(false); 
  
  const [_name, setName] = useState('');
  const [_address, setAddress] = useState('');
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  const [id, setId] = useState(''); 
  // Get Api 
  const getEmployee = async () => {
    axios.get('http://localhost:61038/api/getEmployees')
     
    .then(function (response) {
        // handle success
        setData(response.data); 
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };

  useEffect(() => {
    getEmployee();
  }, []);
  
  // Delete API 
  const hadleRemove = async () => {
    try {

      // Make a DELETE request to your API endpoint
      const response = await axios.delete('https://localhost:44366/api/DeleteEmployee/${item.id}');
      
      // Handle the response
      Alert.alert('Success', 'Data deleted successfully');
    } catch (error) {
      // Handle errors
      console.error('Error deleting data:', error);
      Alert.alert('Error', 'Failed to delete data');
    }
  };

  const handleCreate = () => {
     setModalTeacher(true); 
  }

  const handleCloseModal = () => {
    setModalTeacher(false); 
  }

 // Post Api 
  const handelSave = () => {
    // if(id == null){
      const data = {
        name:_name,address:_address,email:_email,password:_password,//Father_Name:_Father_Name,Mobile_No:_Mobile_No,Pin_NO:_Pin_NO
      }
      axios.post('http://localhost:61038/api/insertEmployee',data)
    .then(function (response) {
      if(response.data.StatusCode == 200){
         let loginInfo = response.data.Result;
         clearFrom(); 
        alert('Account created successfully!');
      }
      else{ //ipdate
        fetch("http://localhost:61038/api/updateEmployee",{
          method:"put",
          body:JSON.stringify({
            "name":_name,
            "address":_address,
            "email":_email,
            "password":_password
          }),
          headers:{
            
          }
        })
        console.log(response.data.Message);
      }
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    }

  const clearFrom = () => {
    setName("")
    setAddress("")
    setEmail("")
    setPassword("")
    setId()
  }

  // Update 
  const hadleEdit = (item) => {
    alert(item.name)
    setName(item._name)
    setAddress(item._address)
    setEmail(item._email)
    setPassword(item._password)
    setId(item.id)
    setModalTeacher(true)
  }

  const SearchHand = () => {

  }

  return (
    <SafeAreaView>
      <Modal
      visible={modalTeacher}
      >
        <SafeAreaView>
        <View style={[styles.rowBetween,{paddingHorizontal:20,marginTop:15}]}>
          <Text style={styles.txtClose}>New Student</Text>
          <TouchableOpacity onPress={handleCloseModal}>
            <Text style={styles.txtClose}>Close</Text>
          </TouchableOpacity> 
        </View>

        <View style={{paddingHorizontal:10,marginTop:20}}>
      
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

       <Text>Password</Text>
       <TextInput
         style={styles.textInput}
        placeholder="Password"
        value={_password}
        onChangeText={setPassword}
      />
    
      <TouchableOpacity onPress={handelSave} style={styles.btnContainer}>
        <Text style={{fontSize:20}}>Save</Text>
      </TouchableOpacity>
      
        </View>
      </SafeAreaView>
      </Modal>
      <View style ={styles.rowBetween}>
      <Text style={styles.txtMain} >Student List {data.length}</Text>

      <TouchableOpacity onPress={SearchHand} style={{padding:3}}>
        <Text>Serch</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreate} style={{padding:10}}>
        <Text style={{color:"blue", fontWeight:"bold",fontSize:19}}>New</Text>
      

      </TouchableOpacity>
      </View>
     <ScrollView
       contentContainerStyle={{
        paddingHorizontal:15,
        // borderWidth:5,
        // borderBottomWidth:5,
       }}
     >
      {data.map((item, index) => {
        return (
          <View key={index} style={styles.rowBetween}>
          <View  style = {styles.item} >
              <Text style={styles.txtName}>{item.id}</Text>
              <Text style={styles.txt}>{item.name}</Text>
              <Text style={styles.txtNormal}>{item.address}</Text>
              <Text style={styles.txtNormal}>{item.email}</Text>
              <Text style={styles.txtNormal}>{item.Mobile_No}</Text>
          </View>
          <View>
            <TouchableOpacity onPress= {() =>hadleRemove(item)}>
               <Text style={{color:"red",fontSize:18}}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress= {() =>hadleEdit(item)}>
               <Text style={{color:"blue",fontSize:18}}>Edit</Text>
            </TouchableOpacity>
          </View>
          </View> 
        )
      })}
     </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  rowBetween:{
     flexDirection:"row",
     justifyContent:"space-between"
  },
   txtMain:{
    fontSize:20,
    fontWeight:"bold",
    padding:10
   },
   item:{
     paddingVertical:4,
     borderBottomColor:1,
     borderBottomColor:"#888"
   },
   txt:{
      color:"navy",
      fontSize:20,
   },
   txtName:{
      fontSize:18,
      fontWeight:"bold"
   },
   txtNormal:{
      fontSize:16,
      color:"#444"
   },
   txtClose:{
    color:"gray",
    fontSize:20,
    fontWeight:"bold"
   },
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
export default NewPractice
