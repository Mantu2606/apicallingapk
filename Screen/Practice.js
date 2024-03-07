// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// const Practice = () => {
//   const [data, setData] = useState([]);

//   const YOUR_API_ENDPOINT = 'http://localhost:61038/api/getEmployees'; 
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch data from API
//       const response = await axios.get('YOUR_API_ENDPOINT');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error appropriately
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.tableRow}>
//       <Text style={styles.cell}>{item.id}</Text>
//       <Text style={styles.cell}>{item.name}</Text>
//       <Text style={styles.cell}>{item.email}</Text>
//       <Text style={styles.cell}>{item.address}</Text>
     
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.tableRow}>
//         <Text style={styles.header}>ID</Text>
//         <Text style={styles.header}>Name</Text>
//         <Text style={styles.header}>Email</Text>
//         <Text style={styles.header}>Address</Text>
//         <Text style={styles.header}>Password</Text>
//       </View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   header: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   cell: {
//     flex: 1,
//     fontSize: 16,
//   },
// });

// export default Practice;
