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

function PostScreen() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };
// Uygulama yüklendiği anda getPost metodu calisir
  useEffect(() => {
    getAllPosts();
  }, []);

  const Item = ({ id, title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>
        {id}-{title}
      </Text>
    </View>
  );
  const renderItem = ({ item }) => <Item id={item.id} title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
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
    color: "#fff",
  },
});

export default PostScreen;
