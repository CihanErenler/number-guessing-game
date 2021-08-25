import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={{ ...styles.button, backgroundColor: props.bg, width: props.width }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

export default CustomButton;
