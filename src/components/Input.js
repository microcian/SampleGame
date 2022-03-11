import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../res/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.5,
    marginVertical: 10,
  },
});

export default Input;
