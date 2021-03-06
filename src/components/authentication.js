import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage,
  Dimensions
} from 'react-native';

var SHA256 = require("crypto-js/sha256");

var {height, width} = Dimensions.get('window');

export default class Authentication extends Component {
  constructor(props) {
      super(props)
      this.state = {
        pass1: "",
        pass2: "",
        myKey: null,
        pass3: '',
        hashPass3: ''
      }
    }


  componentDidMount() {
    AsyncStorage.getItem("myKey").then((value) => {
        this.setState({"myKey": value});
    }).done();
  };

  save(key, value) {
    AsyncStorage.setItem("myKey", `${SHA256(value)}`);
    this.setState({"myKey": `${SHA256(value)}`});
  };

  render() {
    return(
        <View style={styles.header}>
            <Text>
            Authentication
            </Text>
            {this.state.myKey !== null && this.state.myKey !== undefined ? <View>
              <TextInput onChangeText={text => this.setState({pass3: text})} value={this.state.pass3} placeholder="Enter your password" style={styles.noteEntryBox} secureTextEntry/>
              <Button title="Authenticate" onPress={() => {this.state.myKey === `${SHA256(this.state.pass3)}` ? this.props.authPass(true) : null}} />
              </View>
            : <View>
            <TextInput onChangeText={text => this.setState({pass1: text})} value={this.state.pass1} placeholder="Set a secure password" style={styles.noteEntryBox} secureTextEntry/>
            <TextInput onChangeText={text => this.setState({pass2: text})} value={this.state.pass2} placeholder="Repeat the secure password" style={styles.noteEntryBox} secureTextEntry/>
            <Text style={styles.text}>
              Matching Passwords: {this.state.pass1.length > 0 && this.state.pass1 === this.state.pass2 ? "True" : "False"}
            </Text>
            <Button title="Create Password" style={styles.button} onPress={() => {this.state.pass1.length > 0 && this.state.pass1 === this.state.pass2 ? this.save("myKey" , this.state.pass1) : null}} />
            </View>}
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
  },
  noteEntryBox: {
    height: 75,
    width: width,
    position: 'relative',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    padding: 20
  },
  noteEntryContainer: {
    padding: 12,
    flex: 1
  }
})