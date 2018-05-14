import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Contents = props => {
  return(
  <View style={styles.header}>
    <Text>
      Contents Section
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

export default Contents;