import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{...props.style}} />;
};

const styles = StyleSheet.create({
  
});

export default Input;
