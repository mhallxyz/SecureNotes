import React , {Component} from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

var {height, width} = Dimensions.get('window');

const Entry = props => {
    return(
        <View style={styles.note}>
            <Text>{props.note}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    note: {
      width: width,
      minHeight: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#999',
      borderBottomWidth: 1,
      padding: 12
    }
  })

export default Entry;