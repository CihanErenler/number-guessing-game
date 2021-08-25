import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import ShowNumber from "../components/ShowNumber";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

const generateNumberBetween = (minimum, maximum, exclude) => {
  const min = minimum + 1;
  const max = maximum - 1;
  const number = Math.floor(Math.random() * (max - min) + min);

  return number === exclude ? generateNumberBetween(min, max, exclude) : number;
};

const StartGameScreen = ({ userNumber, onGameOver }) => {
  const [generatedNumber, setGeneratedNumber] = useState(
    generateNumberBetween(1, 99, userNumber)
  );
  const [roundCount, setRoundCount] = useState(0);

  let currentMin = useRef(1);
  let currentMax = useRef(100);

  useEffect(() => {
    if (generatedNumber === userNumber) {
      onGameOver(roundCount);
    }
  }, [generatedNumber]);

  const generateNextNumber = (direction) => {
    if (
      (direction === "lower" && generatedNumber < userNumber) ||
      (direction === "greater" && generatedNumber > userNumber)
    ) {
      Alert.alert("Do not lie!", "You know this is not true", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentMax.current = generatedNumber;
    } else {
      currentMin.current = generatedNumber;
    }
    const nextNumber = generateNumberBetween(
      currentMin.current,
      currentMax.current,
      generatedNumber
    );
    setGeneratedNumber(nextNumber);
    setRoundCount((current) => current + 1);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Guessed Number</Text>
        <ShowNumber value={generatedNumber} />
      </Card>
      <Card
        style={{
          ...styles.card,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 40,
        }}
      >
        <CustomButton
          bg={colors.secondary}
          onPress={generateNextNumber.bind(this, "lower")}
          width={80}
        >
          <AntDesign name="minus" size={24} color="white" />
        </CustomButton>

        <CustomButton
          bg={colors.primary}
          onPress={generateNextNumber.bind(this, "greater")}
          width={80}
        >
          <AntDesign name="plus" size={24} color="white" />
        </CustomButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingTop: 30,
  },
  card: {
    marginBottom: 10,
    alignItems: "center",
  },
  buttonWrapper: {
    width: 100,
  },
  title: {
    fontSize: 18,
    color: "#555",
  },
});

export default StartGameScreen;
