import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';



import Login from './screens/Login';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>


        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#242434',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



