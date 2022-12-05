import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Dimensions,
  Button,
  ImageBackground,
} from "react-native";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
// import { TouchableOpacity } from "react-native-web";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

const initialState = { name: "", email: "", password: "" };

const RegistrationScreen = ({ navigation, route }) => {
  console.log("Platform.OS: ", Platform.OS);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [iasReady, setIasReady] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    // console.log("width: ", width);
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const onLogin = () => {
    console.log("state: ", state);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);

    navigation.navigate("Home", {
      screen: "Setting",
      params: { userId: "e2ee4" },
    });
  };

  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadFonts}
  //       onFinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  // const { userId } = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../img/Photo_BG_1.jpg")}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? 20 : 150,
              width: dimensions,
            }}
          >
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput
              value={state.name}
              placeholder="Логін"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, name: value }))
              }
            />
            <TextInput
              value={state.email}
              placeholder="Адреса електронної пошти"
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              value={state.password}
              placeholder="Пароль"
              secureTextEntry={true}
              style={styles.input}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity
              activeOpacity={0.8}
              title={"Зареєструватися"}
              style={styles.button}
              onPress={onLogin}
            />
            <Text style={styles.text}>Вже є акаунт?</Text>
            <Button
              title="Увійти"
              onPress={() =>
                navigation.navigate("Login", {
                  sessionId: 45,
                  userId: "22e24",
                })
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: "66%",
    // paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Bold",
  },
  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#212121",
    marginBottom: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    // color: "#BDBDBD",
    color: "#212121",
  },

  form: { marginHorizontal: 16 },

  button: {
    height: 50,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 43,
    paddingHorizontal: 16,
    paddingVertical: 32,
    gap: 12,
    borderWidth: 1,
    ...Platform.select({
      ios: { borderColor: "#FF6C00", backgroundColor: "transparent" },
      android: { borderColor: "#FF6C00", backgroundColor: "#FF6C00" },
    }),
    borderRadius: 100,
  },

  text: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },

  // btnTitle: {
  //   color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
  //   fontSize: 18,
  //   fontFamily: "Roboto-Regular",
  // },
});

export default RegistrationScreen;

// import { StatusBar } from "expo-status-bar";
// import {
//   KeyboardAvoidingView,
//   Keyboard,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
//   Alert,
//   Button,
// } from "react-native";
// import React, { useState } from "react";
// import { loadFonts } from "./loadFonts";

// export default function App() {
//   const [value, setValue] = useState("");
//   const inputHandler = (text) => setValue(text);

//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const nameHandler = (text) => setName(text);
//   const passwordHandler = (text) => setPassword(text);
//   const onLogin = () => {
//     Alert.alert("Credentials", `${name} + ${password}`);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <Text style={styles.text}>
//             Open up App.js to start working on your app!
//           </Text>
//           <Text>Hello React native</Text>
//           <TextInput
//             placeholder="Type text"
//             value={value}
//             onChangeText={inputHandler}
//           />
//           <TextInput
//             value={name}
//             onChangeText={nameHandler}
//             placeholder="Username"
//             style={styles.input}
//           />
//           <TextInput
//             value={password}
//             onChangeText={passwordHandler}
//             placeholder="Password"
//             style={styles.input}
//           />
//           <Button title={"Login"} style={styles.input} onPress={onLogin} />
//           <StatusBar style="auto" />
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// // Шлях пишемо щодо компонента, де використовується <Image/>
// // Локальне зображення
// {
//   /* <Image source={require('./logo.png')}/> */
// }

// // Зображення з мережі
// {
//   /* <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
//        style={{width: 700, height: 700}} /> */
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: Platform.OS === "ios" ? 50 : 100,
//     ...Platform.select({
//       ios: { backgroundColor: "#000000" },
//       android: { backgroundColor: "#ffffff" },
//     }),
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingBottom: 30,
//   },
//   text: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 6,
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//   },
// });
