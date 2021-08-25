import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import colors from "../constants/colors";
import Input from "../components/Input";

// Components
import Card from "../components/Card";
import ShowNumber from "../components/ShowNumber";
import CustomButton from "../components/CustomButton";

const GameStartScreen = ({ onStartGame }) => {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumber = (value) => {
    setNumber(value.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setNumber("");
    setConfirmed(false);
  };

  const confirmHandler = () => {
    const confirmedNumber = parseInt(number);

    if (
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert("Incorrect number", "The number has to be between 1 and 99", [
        { text: "Okay", onPress: resetHandler, style: "destructive" },
      ]);
      return;
    }

    setSelectedNumber(confirmedNumber);
    setConfirmed(true);
    setNumber("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}> Start a new game! </Text>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleNumber}
            value={number}
            onEndEditing={confirmHandler}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
              bg={colors.secondary}
              onPress={resetHandler}
              width={130}
            >
              RESET
            </CustomButton>
            <CustomButton
              bg={colors.primary}
              onPress={confirmHandler}
              width={130}
            >
              CONFIRM
            </CustomButton>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.startGameCard}>
            <Text style={{ textAlign: "center" }}>You selected</Text>
            <ShowNumber value={selectedNumber} />
            <View>
              <CustomButton
                onPress={() => onStartGame(selectedNumber)}
                bg={colors.primary}
                width={130}
              >
                START GAME
              </CustomButton>
            </View>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
    fontFamily: "roboto-bold",
  },
  input: {
    width: 50,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#666",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
  inputContainer: {
    alignItems: "center",
    width: 350,
    maxWidth: "80%",
  },
  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    width: 115,
  },
  output: {
    fontSize: 16,
    padding: 10,
    color: "#666",
  },
  startGameCard: {
    width: 200,
    marginTop: 20,
    alignItems: "center",
  },
});

export default GameStartScreen;
