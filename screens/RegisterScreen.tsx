import * as React from "react";
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Text, View } from "../components/Themed";
import InputField from "../components/InputField";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="Email" />
          <InputField placeholder="DOB" />
          <InputField placeholder="Password" secureTextEntry={true} />
          <InputField placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        <View>
          <MyButton
            title="Sign Up"
            onPress={() => navigation.navigate("Home")}
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
  },
  container: {
    width: "100%",
  },
});
