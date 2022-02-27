import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./LoginScreen";
import MainScreen from "./MainScreen";
import RegisterScreen from "./RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginScreen
        navigation={navigation}      // Login ekranı gösterilir
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomeAppScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={HomeScreen} // HomeScreen Fonksiyonunu cagırır
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen} // Login veya register dan giris yapılırsa MainScreen ekranına gidilir
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          style={styles.container}
          component={RegisterScreen} // Kayıt ekranı
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeAppScreen;
