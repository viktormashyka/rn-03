import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { useRoute } from "./router";

// import icons
import Ionicons from "@expo/vector-icons/Ionicons";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

const AuthStack = createStackNavigator();

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import Home from "./Screens/main/Home";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  // const routing = useRoute(null);
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
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          // options={{ headerShown: false }}
          name="Home"
          component={Home}
          options={{
            title: "Home screen",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold", fontSize: 200 },
            headerRight: () => (
              // <Ionicons name="log-out-outline" size={24} color={color} />
              <Button
                onPress={() =>
                  navigation.navigate("Login", {
                    sessionId: 45,
                    userId: "22e24",
                  })
                }
                title="Log out"
                color="#fff"
              />
            ),
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

// {/* <AuthStack.Screen
//   name="Home"
//   component={Home}
//   options={{
//     title: "Home screen",
//     headerStyle: { backgroundColor: "#f4511e" },
//     headerTintColor: "#fff",
//     headerTitleStyle: { fontWeight: "bold", fontSize: 200 },
//     headerRight: () => (
//       <Button
//         onPress={() => alert("Hey, it's me")}
//         title="Press me"
//         color="#fff"
//       />
//     ),
//   }}
// />; */}

// {
//   /* <View style={styles.container}>
//   <ImageBackground
//     style={styles.image}
//     source={require("./img/Photo_BG_1.jpg")}
//   >
//     <RegistrationScreen />
//     <LoginScreen />
//     <StatusBar style="auto" />
//   </ImageBackground>
// </View> */
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
