import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// Components
import Header from "./src/components/Header";

// Screens
import GameStartScreen from "./src/screens/GameStartScreen";
import GameScreen from "./src/screens/GameScreen";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [number, setNumber] = useState(null);
  const [gameRound, setGameRound] = useState(0);
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const newGameHandler = () => {
    setGameRound(0);
    setNumber(null);
  };

  const startGameHandler = (num) => {
    setNumber(num);
  };

  const gameOverHandle = (round) => {
    setGameRound(round);
  };

  let content = <GameStartScreen onStartGame={startGameHandler} />;

  if (number && gameRound <= 0) {
    content = <GameScreen userNumber={number} onGameOver={gameOverHandle} />;
  } else if (gameRound) {
    content = (
      <GameOverScreen
        value={number}
        round={gameRound}
        onNewGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
