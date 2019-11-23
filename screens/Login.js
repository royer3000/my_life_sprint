import React from 'react';
import { StyleSheet, Text, Image, View, TextInput,TouchableOpacity } from 'react-native';
import { createStackNavigstior } from 'react-navigation';

export default class Login extends React.Component {
    render(){
      return (
        <View style={styles.container}>
            
            <View style={styles.vacio}>
                <Text></Text>
            </View>
            <View style ={styles.logo}>
                <Image 
                style ={styles.logo}
                source = {require ('../assets/logo.png')}
                />
            </View>

            <TextInput 
            style = {styles.inputBox} 
            placeholder ="USERNAME"
            returnKeyType ="next"
            onSubmitEditing = {() => this.passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize ="none"
            autoCorrect = {false} 
            placeholderTextColor = 'gray'

            />
            <TextInput 
            style = {styles.inputBox} 
            placeholder ="PASSWORD"
            returnKeyType = "go"
            placeholderTextColor = 'gray'
            secureTextEntry
            ref = {(input) => this.passwordInput = input}
            
            />
            <TouchableOpacity style ={styles.button} onPress = {()=> this.props.navigation.navi}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            


            <View style={styles.vacio}>
                <Text></Text>
            </View>
                        
            <View style={styles.comsign}>
                <Text style={{color:'grey'}}>Don't have an account?<Text style={{color:'aquamarine'}}> Sign up now></Text></Text>

            </View>
        </View>
        



      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    backgroundColor: '#242434',
    alignItems: 'flex-start',


  },

  logo:{


    width:240,
    height:100,
    alignItems: 'center',

  },

  inputBox:{

      width:240,
      height:40,
      backgroundColor: '#27273E',
      borderColor: 'gray',
      borderWidth: 0.25,
      fontSize : 13,
      marginVertical:10,
      paddingHorizontal:13,
  },

  vacio:{
      flex:1,
      alignItems: 'center',
  },

  comsign:{
    flex:0.3,
    fontSize : 13,
    alignItems: 'flex-end',
    
    
  },

  button:{

      width:240,
      backgroundColor: '#27273E',
      marginVertical:10,
      paddingVertical:10,


  },

  buttonText:{

      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center',
  },

  signcolor:{
      color: 'aquamarine',
  }
  



});