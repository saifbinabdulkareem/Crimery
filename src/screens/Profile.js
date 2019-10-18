import React from 'react';
import { TextInput, Dimensions, StyleSheet, Text, Modal, View, Alert, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'gray', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile Page</Text>
        <Button title="Logout" onPress={() => {this.props.navigation.navigate('Login')}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
