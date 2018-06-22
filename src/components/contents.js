import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';
import Entry from './entry';
var {height, width} = Dimensions.get('window');

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf'],
      addScreen: false
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("notes").then((value) => {
  //       this.setState({"notes": value});
  //   }).done();
  // };

  addNote(noteContent) {
    const notes1 = this.state.notes
    notes1.unshift(noteContent)
    this.setState({notes: notes1})
  }

  render() {
    console.log(this.state.notes)
    return( 
    <View style={styles.notes}>
      <ScrollView>
        {this.state.notes.map((note, index) => <Entry key={index} note={note} />)}
      </ScrollView>
      <TouchableOpacity onPress={() => this.addNote("Button Works")} style={styles.button} title='Add Note'>
      <View style={styles.buttonSurround}>
        <Text style={styles.text}>
          + Add Note
        </Text>
      </View>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  notes: {
    backgroundColor: "#ffffff",
    flex: 6,
    alignItems: "center",
  },
  buttonSurround: {
    height: 75,
    width: width,
    position: 'relative',
    backgroundColor: '#a8a8a8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
})

export default Contents;