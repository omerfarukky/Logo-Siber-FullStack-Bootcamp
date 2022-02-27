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

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true); // Kullanıcı giris yaparken ActivityIndicator olması icin

  const loginHandler = () => {
    setLoading(false);
    // Authentication Sign In
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user) {
          navigation.navigate("MainScreen");
        } else {
          console.log("User not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Authentication Sign Out
    auth
      .signOut()
      .then((response) => {
        console.log(response);
      })
      .catch((erer) => {
        console.log(err);
      });
  };

  return (
    <View>
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
            <TouchableOpacity onPress={loginHandler} style={styles.touchStyle}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
              style={styles.touchStyle}
              navigation={navigation}
            >
              <Text>Create your account?</Text>
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
  textStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    paddingLeft: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  touchStyle: {
    height: 40,
    padding: 10,
  },
});

export default LoginScreen;
