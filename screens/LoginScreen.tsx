import * as React from "react";
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { View } from "../components/Themed";
import InputField from "../components/InputField";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <InputField placeholder="johnDoe@example.com" />
          <InputField placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={styles.LRButtons}>
          <MyButton title="Login" onPress={() => navigation.navigate("Home")} />
          <MyButton
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#2F95DC",
  },
  container: {
    width: "100%",
    backgroundColor: "#2F95DC",
  },
  LRButtons: {
    flexDirection: "row",
    backgroundColor: "#2F95DC",
  },
});
