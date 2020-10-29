import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text'
function AboutScreen(props) {
  return (
    <View style={styles.container}>
        <Text  >The app provides food items on special from varies stores. The user is able to search the store that they would like to view items on.</Text>
        <Text  >The app makes it easier for users to find specials in digital form thus making it environmentally friendly.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AboutScreen;

