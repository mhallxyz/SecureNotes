import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Authentication = props => {
  return(
  <View style={styles.header}>
    <Text>
      Authentication Section
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    flex: 6,
    padding: 8,
    alignItems: "center",
  }
})

export default Authentication;