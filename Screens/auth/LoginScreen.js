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
// // import { AppLoading } from "expo";
// // import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";
// // import { TouchableOpacity } from "react-native-web";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

const initialState = { email: "", password: "" };

const LoginScreen = ({ navigation, route }) => {
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
            <Text style={styles.title}>Увійти</Text>
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
              title={"Увійти"}
              style={styles.button}
              onPress={onLogin}
            />
            <Text style={styles.text}>Немає акаунта?</Text>
            <Button
              title="Зареєструватись"
              onPress={() =>
                navigation.navigate("Registration", {
                  sessionId: 45,
                  userId: "22e25",
                })
              }
            />
            {/* <Button
              title="Go to Home"
              onPress={() =>
                navigation.navigate("Home", {
                  screen: "Setting",
                  params: { userId: "e2ee4" },
                })
              }
            /> */}
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

export default LoginScreen;

// import { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   Keyboard,
//   Platform,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableWithoutFeedback,
//   View,
//   Button,
// } from "react-native";
// import * as Font from "expo-font";
// import { classic } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

// const initialState = { email: "", password: "" };

// const LoginScreen = ({ navigation, route }) => {
//   const [state, setState] = useState(initialState);

//   const onLogin = () => {
//     console.log(`Credentails:
//       email: ${state.email}, password: ${state.password}`);
//     setState(initialState);
//   };
//   const { userId } = route.params;

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <Text style={styles.title}>Увійти, user id {userId}</Text>
//           <TextInput
//             value={state.email}
//             placeholder="Адреса електронної пошти"
//             style={styles.input}
//             onChangeText={(value) =>
//               setState((prevState) => ({ ...prevState, email: value }))
//             }
//           />
//           <TextInput
//             value={state.password}
//             placeholder="Пароль"
//             secureTextEntry={true}
//             style={styles.input}
//             onChangeText={(value) =>
//               setState((prevState) => ({ ...prevState, password: value }))
//             }
//           />
//           <Button title={"Увійти"} style={styles.button} onPress={onLogin} />
//           <Text style={styles.text}>Немає акаунта? Зареєструватись</Text>
{
  /* <Button
  title="Go to Home"
  onPress={() =>
    navigation.navigate("Home", {
      screen: "Setting",
      params: { userId: "e2ee4" },
    })
  }
/>; */
}
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     marginTop: "66%",
//     paddingHorizontal: 16,
//     backgroundColor: "#fff",
//     borderTopStartRadius: 25,
//     borderTopEndRadius: 25,
//     justifyContent: "space-between",
//     backgroundColor: "#fff",
//   },
//   title: {
//     marginTop: 92,
//     marginBottom: 32,
//     color: "#212121",
//     textAlign: "center",
//     fontSize: 30,
//     // fontWeight: 500,
//   },
//   input: {
//     height: 50,
//     backgroundColor: "#F6F6F6",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     borderRadius: 8,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "black",
//     marginBottom: 10,
//     // fontFamily: "Roboto",
//     fontSize: 16,
//     // fontWeight: 400,
//     lineHeight: 19,
//     letterSpacing: 0,
//     textAlign: "left",
//     color: "#BDBDBD",
//   },

//   button: {
//     height: 50,
//     // fontFamily: "Roboto",
//     fontStyle: "normal",
//     // fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 19,
//     textAlign: "center",
//     color: "#FFFFFF",
//     marginTop: 43,
//     paddingHorizontal: 16,
//     paddingVertical: 32,
//     gap: 12,
//     borderWidth: 1,
//     borderColor: "#FF6C00",
//     borderRadius: 100,
//     backgroundColor: "#FF6C00",
//   },

//   text: {
//     marginTop: 16,
//     // fontFamily: "Roboto",
//     fontStyle: "normal",
//     color: "#1B4371",
//     textAlign: "center",
//     // fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 19,
//   },
// });

// export default LoginScreen;
