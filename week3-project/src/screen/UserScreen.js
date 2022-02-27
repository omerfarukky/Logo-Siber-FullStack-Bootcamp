import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

function UserScreen() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  };
// Uygulama Yüklenince get medodu calisir
  useEffect(() => {
    getAllUsers();
  }, []);

  const Item = ({ id, name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {id} - {name}
      </Text>
    </View>
  );
  const renderItem = ({ item }) => <Item id={item.id} name={item.name} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#2a2d55",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color:"#fff"
  },
});

export default UserScreen;
