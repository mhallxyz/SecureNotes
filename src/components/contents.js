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
import { TextInput } from 'react-native-gesture-handler';
var {height, width} = Dimensions.get('window');

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf','fdghsfh','gdasfd','agdgfdga','gafadgf'],
      addScreen: false,
      newNote: ""
    }
  }

  // componentDidMount() {
  //   AsyncStorage.getItem("notes").then((value) => {
  //       this.setState({"notes": value});
  //   }).done();
  // };

  addNote(noteContent) {
    if (this.state.addScreen) {
    const notes1 = this.state.notes;
    notes1.unshift(noteContent);
    this.setState({
      notes: notes1,
      addScreen: false,
      newNote: ''
    });
    } else {
      this.setState({addScreen: true});
    }
  }

  render() {
    console.log(this.state.newNote)
    return( 
      <View style={styles.notes}>
      {this.state.addScreen === true ? 
      <View style={styles.noteEntryContainer}>
        <Text style={styles.topText}>Add Note</Text>
        <TextInput style={styles.noteEntryBox} placeholder="Enter new note here" value={this.state.newNote} onChangeText={text => this.setState({newNote: text})} />
      </View> : null}
      {this.state.addScreen === false ? 
        <ScrollView>
          {this.state.notes.map((note, index) => <Entry key={index} note={note} />)}
        </ScrollView> : null}
        <TouchableOpacity onPress={() => this.addNote(this.state.newNote)} style={styles.button} title='Add Note'>
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
  },
  topText: {
    fontSize: 20,
    textAlign: 'center',
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

export default Contents;

