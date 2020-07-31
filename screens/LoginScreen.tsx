import * as React from "react";
import { StyleSheet, Keyboard } from "react-native";

import LinkInfo from "../components/LinkInfo";
import { Text, View } from "../components/Themed";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import InputField from "../components/InputField";
import Register from "../components/MyButton";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <InputField placeholder="johnDoe@example.com" />
        <InputField placeholder="Password" secureTextEntry={true} />
      </View>
      <View style={styles.LRButtons}>
        <MyButton
          style={{ backgroundColor: "" }}
          title="Login"
          onPress={() => navigation.navigate("Home")}
        />
        <MyButton
          style={{ backgroundColor: "" }}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    width: "100%",
  },
  LRButtons: {
    flexDirection: "row",
  },
});
