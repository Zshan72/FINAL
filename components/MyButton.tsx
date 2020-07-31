import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "./Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
class MyButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={{ ...styles.input, ...this.props.style }}
      >
        <Text style={styles.linkText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 5,
    backgroundColor: "#2F95DC",
  },
  linkText: {
    fontSize: 20,
  },
});
export default MyButton;
