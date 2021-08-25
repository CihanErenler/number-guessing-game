import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ style, children }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    maxWidth: "80%",
    elevation: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
