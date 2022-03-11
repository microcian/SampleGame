import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Strings from '../res/strings';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>{Strings.str_title_game_over}</Text>
      <Text>{Strings.str_number_rounds} {props.roundsNumber}</Text>
      <Text>{Strings.str_number_og_hit}: {props.userNumber}</Text>
      <Button title={Strings.str_new_game} onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
