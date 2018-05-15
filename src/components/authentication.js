import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';

export default class Authentication extends Component {
  constructor(props) {
      super(props)
      this.state = {
        pass1: "",
        pass2: "",
        same: false,
        myKey: null,
      }
    }


  componentDidMount() {
    AsyncStorage.getItem("myKey").then((value) => {
        this.setState({"myKey": value});
    }).done();
  };

  save(key, value) {
    AsyncStorage.setItem("myKey", value);
    this.setState({"myKey": value});
  };

  render() {
    return(
        <View style={styles.header}>
            <Text>
            Authentication Section
            </Text>
            <TextInput onChangeText={text => this.setState({pass1: text})} value={this.state.pass1} placeholder="Set a secure password" style={styles.textInput}/>
            <TextInput onChangeText={text => this.setState({pass2: text})} value={this.state.pass2} placeholder="Repeat the secure password" style={styles.textInput}/>
            <Text style={styles.text}>
              Matching Passwords: {this.state.pass1.length > 0 && this.state.pass1 === this.state.pass2 ? "True" : "False"}
            </Text>
            <Text style={styles.text}>
              myKey in state: {this.state.myKey}
            </Text>
            <Button title="Create Password" style={styles.button} onPress={() => this.save("myKey" ,this.state.pass1)}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    flex: 6,
    padding: 8,
    alignItems: "center",
  },
  textInput: {
    width: 300,
    margin: 12
  },
  button: {

  },
  text: {
    padding: 12
  }
})