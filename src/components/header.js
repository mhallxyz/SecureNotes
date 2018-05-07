import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = props => {
  return(
  <View style={styles.header}>
    <Text style={styles.text}>
      secure notes.
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#29ce98",
    flex: 1,
    alignItems: "flex-end",
    justifyContent : "flex-end",
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
    padding: 5
  }
})

export default Header;