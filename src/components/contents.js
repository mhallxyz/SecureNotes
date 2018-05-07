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
      Header Section
    </Text>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    flex: 6,
  }
})

export default Contents;