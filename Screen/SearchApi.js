import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
const SearchApi = ({ itemId }) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const YOUR_API_ENDPOINT = "http://localhost:61038/api/getEmployees" ; 
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT');
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data with all data
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error appropriately
      Alert.alert('Error', 'Failed to fetch data');
    }
  };

  const handleSearch = () => {
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      <Text>{item.address}</Text>
      {/* Display other properties as needed */}
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SearchApi;
