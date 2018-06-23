import React , {Component} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

var {height, width} = Dimensions.get('window');

var attributes;

var swipeoutBtns = [
    {
      text: 'Remove',
      backgroundColor: 'red',
      onPress: () => attributes.removeNote(attributes.location)
    }
  ]

const Entry = props => {
    attributes = props;
    return(
        <Swipeout
            backgroundColor='#fff'
            autoClose
            right={swipeoutBtns}>
        <View style={styles.note}>
            <Text>{props.note}</Text>
        </View>
        </Swipeout>
    )
}
const styles = StyleSheet.create({
    note: {
      width: width,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#999',
      borderBottomWidth: 1
    }
  })

export default Entry;