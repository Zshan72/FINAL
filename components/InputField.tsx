import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

class InputField extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <TextInput style={styles.title} {...this.props} />;
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#2577B0",
    paddingBottom: 5,
    marginBottom: 20,
  },
});
export default InputField;
