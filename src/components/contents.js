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
  TextInput
} from 'react-native';
import Entry from './entry';
// import { TextInput } from 'react-native-gesture-handler';
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
      } else {
        this.setState({notes: JSON.parse(value)})
      }
    }).done();
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

  removeNote(noteIndex) {
    const notes1 = this.state.notes;
    console.log("Deletion index =============> ", noteIndex)
    console.log(notes1)
    notes1.splice(noteIndex, 1);
    this.setState({
      notes: notes1,
      addScreen: false,
      newNote: ''
    });
    this.setSavedNotes()
  }

  render() {
    return( 
      <View style={styles.notes}>
      {this.state.addScreen === true ? 
      <View style={styles.noteEntryContainer}>
        <Text style={styles.topText}>Add Note</Text>
        <TextInput style={styles.noteEntryBox} placeholder="Enter new note here" value={this.state.newNote} onChangeText={text => this.setState({newNote: text})} />
      </View> : null}
      {this.state.addScreen === false ? 
        <ScrollView style={styles.scroll}>
          {this.state.notes !== undefined ? (this.state.notes.map((note, index) => <TouchableOpacity onLongPress={() => this.removeNote(index)} key={index} location={index}>
          <Entry key={index} location={index} note={note} />
          </TouchableOpacity>)) : null}
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
  },
  scroll: {
    flex: 1,
  }
})

export default Contents;

