import * as React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import PostScreen from "./PostScreen";
import UserScreen from "./UserScreen";

function HomeScreen({ navigation }) {
  return (
    <View>
      <PostScreen navigation={navigation} />
    </View>
  );
}
// Kullanıcı giris yaptıktan sonra Posts Ekranı Cıkacaktır
// Kullancı Drawer Navigator kullanarak Posts ve Users Arasında gecis yapabilir
const Drawer = createDrawerNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="Posts" component={HomeScreen} />
        <Drawer.Screen name="Users" component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
