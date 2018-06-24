import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
const Lock = require('../assets/lock.png');

const Header = props => {
  return(
  <View style={styles.header}>
  {props.showLock ? <TouchableOpacity onPress={() => props.authPass(false)} style={styles.box}><View style={styles.box}><Image style={styles.lock} source={Lock} /></View></TouchableOpacity> : null}
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
    elevation: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
    padding: 5
  },
  lock: {
    height: 40,
    width: 40
  },
  box: {
    height: 50,
    width: 50,
    alignSelf: 'flex-start',
    bottom: 0,
    position: 'absolute',
    padding: 5
  }
})

export default Header;