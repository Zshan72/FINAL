import * as React from "react";
import { Text, StyleSheet } from "react-native";
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
  },
  linkText: {
    fontSize: 20,
    color: "#2e78b7",
  },
});
export default MyButton;
