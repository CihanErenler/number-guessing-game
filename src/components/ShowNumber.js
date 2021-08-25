import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const ShowNumber = ({ value }) => {
  return (
    <View style={styles.selectedNumberBg}>
      <Text style={styles.selectedNumber}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedNumberBg: {
    textAlign: "center",
    padding: 10,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.selected_bg,
    marginVertical: 10,
  },
  selectedNumber: {
    fontSize: 26,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default ShowNumber;
