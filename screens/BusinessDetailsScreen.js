import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default class WelcomeScreen extends React.Component {
  render() {
  return (
    <View style={styles.container}>

      <Text> Search Screen </Text>
    </View>
  )}
}


const styles = StyleSheet.create({

 container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems:"center",
    justifyContent:"center"

  },
})