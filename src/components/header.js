import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = props => {
  return(
  <View style={styles.header}>
    <Text>
      Header Section
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    flex: 1,
  }
})

export default Header;