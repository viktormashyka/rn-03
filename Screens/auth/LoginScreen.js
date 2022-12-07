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

const initialState = { email: "", password: "" };

const LoginScreen = ({ navigation, route }) => {
  console.log("Platform.OS: ", Platform.OS);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
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
      screen: "Posts",
      params: { userId: "e2ee4" },
    });
  };

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
              style={styles.button}
              onPress={onLogin}
            >
              <Text style={styles.text}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Registration", {
                  sessionId: 45,
                  userId: "22e25",
                })
              }
            >
              <Text style={styles.text}>
                Немає акаунта? <Text style={styles.text}>Зареєструватись</Text>
              </Text>
            </TouchableOpacity>
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
    marginTop: "50%",
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
    marginTop: 43,
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

  btnTitle: {
    color: Platform.OS === "ios" ? "#4169e1" : "#f0f8ff",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});

export default LoginScreen;
