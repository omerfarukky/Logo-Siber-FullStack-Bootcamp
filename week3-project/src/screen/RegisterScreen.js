import React, { useState } from "react";
import { auth } from "../../firebase-config";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

const RegisterScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); // Kullanıcı kayıt yaparken ActivityIndicator olması icin

  const registerHandler = () => {
    setLoading(false);
    // Authentication Create User
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user) {
          navigation.navigate("MainScreen");
        } else {
          console.log("Failed to create user");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View>
          <Text style={styles.textStyle}>My App</Text>
          <View>
            <TextInput
              label="Email"
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              require
            />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={registerHandler}
              style={styles.touchStyle}
            >
              <Text>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {loading == false && (
        <View style={[styles.loadingContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    paddingLeft: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  touchStyle: {
    height: 40,
    padding: 10,
    textAlign: "center",
  },
});

export default RegisterScreen;
