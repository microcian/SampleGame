import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Strings from "../res/strings";
import Colors from "../res/colors";
import Input from "../components/Input";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (number) => {
    setEnteredNumber(number.replace(/[^0-9]/g, ""));
  };

  const onPressReset = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const onPresConfirm = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(Strings.str_invalid_number, Strings.str_number_limit, [{
        text: Strings.str_ok, style: 'destructive', onPress: onPressReset
      }])
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredNumber("");
    Keyboard.dismiss();
  };

  let outputNumber;
  if (confirmed) {
    outputNumber = (
      <Text>
        {Strings.str_choose_number} {selectedNumber}
      </Text>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>{Strings.str_start_game}</Text>
        <Card style={styles.inputContainer}>
          <Text>{Strings.str_select_number}</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={Strings.str_reset}
                onPress={onPressReset}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={Strings.str_confirm}
                onPress={onPresConfirm}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {outputNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: "100%",
    textAlign: "center",
  },
});

export default StartGameScreen;
