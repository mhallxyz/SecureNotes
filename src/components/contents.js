import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import Entry from './entry';
import { TextInput } from 'react-native-gesture-handler';
var {height, width} = Dimensions.get('window');

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      addScreen: false,
      newNote: ""
    }
  }

  componentDidMount() {
    this.getSavedNotes()
  };

  setSavedNotes() {
    AsyncStorage.setItem('notes', JSON.stringify(this.state.notes));
  }

  getSavedNotes() {
    AsyncStorage.getItem("notes").then((value) => {
      console.log("Values from Async ==== >",value);
      if (value === null || value === undefined){
        this.setState({notes: []})
        console.log("Block1")
      } else {
        this.setState({notes: JSON.parse(value)})
        console.log("Block2")
      }
    }).done(console.log(this.state));
  }

  addNote(noteContent) {
    if (this.state.addScreen) {
    const notes1 = this.state.notes;
    notes1.unshift(noteContent);
    this.setState({
      notes: notes1,
      addScreen: false,
      newNote: ''
    });
    this.setSavedNotes()
    } else {
      this.setState({addScreen: true});
    }
  }

  render() {
    console.log("Value of new note: ",this.state.newNote)
    console.log("Value of Notes in state:", this.state.notes)
    return( 
      <View style={styles.notes}>
      {this.state.addScreen === true ? 
      <View style={styles.noteEntryContainer}>
        <Text style={styles.topText}>Add Note</Text>
        <TextInput style={styles.noteEntryBox} placeholder="Enter new note here" value={this.state.newNote} onChangeText={text => this.setState({newNote: text})} />
      </View> : null}
      {this.state.addScreen === false ? 
        <ScrollView>
          {this.state.notes !== undefined ? (this.state.notes.map((note, index) => <Entry key={index} note={note} />)) : null}
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

