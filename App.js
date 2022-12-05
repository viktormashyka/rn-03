import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import Home from "./Screens/Home/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";
// import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
// import { TouchableOpacity } from "react-native-web";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

const MainStack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        {/* <ImageBackground
          style={styles.image}
          source={require("./img/Photo_BG_1.jpg")}
        /> */}
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home screen",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", fontSize: 200 },
            headerRight: () => (
              <Button
                onPress={() => alert("Hey, it's me")}
                title="Press me"
                color="#fff"
              />
            ),
          }}
        />
      </MainStack.Navigator>
      {/* <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./img/Photo_BG_1.jpg")}
        >
          <RegistrationScreen />
          <LoginScreen />
          <StatusBar style="auto" />
        </ImageBackground>
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
});
