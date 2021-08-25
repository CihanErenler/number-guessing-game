import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import colors from "../constants/colors";
import CustomButton from "../components/CustomButton";

// Components
import ShowNumber from "../components/ShowNumber";

const GameOverScreen = ({ value, round, onNewGame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/win.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Game Over!</Text>
        <Text>The number is</Text>
        <ShowNumber value={value} />
        <Text style={styles.summary}>
          Took {round} guesses fo find the number
        </Text>
      </View>
      <View style={{ padding: 10, alignItems: "center" }}>
          <CustomButton bg={colors.secondary} onPress={onNewGame} width={250}>
            NEW GAME
          </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
  },
  card: {
    alignItems: "center",
  },
  title: {
    color: colors.win,
    fontSize: 26,
    fontWeight: "bold",
  },
  summary: {
    fontSize: 16,
    color: "#777",
  },
  imageContainer: {
    width: 250,
    height: 250,
    overflow: "hidden",
    borderRadius: 125,
    borderColor: colors.secondary,
    borderWidth: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
