import React from 'react';
import { StyleSheet, Text, Image, View, TextInput,TouchableOpacity, Modal } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';




import Login from './screens/Login'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
            <View style={styles.vacio}>
                <Text></Text>
            </View>
            <View style ={styles.logo}>
                <Image 
                style ={styles.logo}
                source = {require ('./assets/logo.png')}
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
            placeholderTextColor = 'white'

            />
            
            <TextInput 
            style = {styles.inputBox} 
            placeholder ="PASSWORD"
            returnKeyType = "go"
            placeholderTextColor = 'white'
            secureTextEntry
            ref = {(input) => this.passwordInput = input}
            
            />
            
            <TouchableOpacity style ={styles.button} onPress = {()=> navigation.navigate('Detalle')}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.vacio}>
                <Text></Text>
            </View>
            <Login/>
    </View>
  );
}

const DetalleScreen = ({navigation})=>{
  return(
    <View style={styles.container}>

          <View style ={styles.imagen2}>
                <Image 
                style ={styles.imagen2}
                source = {require ('./assets/principal.png')}
                />
            </View>
  </View>

  )
}

const AppNavigator = createSwitchNavigator({
  Home:{
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleScreen
  }

}, {initialRouteName:'Home' })


export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#212533',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{


    width:240,
    height:100,
    alignItems: 'center',

  },

  inputBox:{

      width:240,
      height:40,
      backgroundColor: '#1a1d2a',
      borderColor: 'gray',
      borderWidth: 0.25,
      fontSize : 13,
      marginVertical:10,
      paddingHorizontal:13,
      color: "white",
      
  },

  vacio:{
      flex:1,
      alignItems: 'center',
  },

  comsign:{
    flex:0.3,
    fontSize : 13,
    flexDirection: "row",
    justifyContent: 'space-between',
    
    
  },

  button:{

      width:240,
      backgroundColor: '#1a1d2a',
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
  },
  
  logo2:
  {
    width:100,
    height:100,
    alignItems: 'center',
  },
  regisText:{
    fontSize:32,
    color:"#88ecea",
    borderColor:"white",


  },
  imagen2:{

    width: 350,
    height:700,
    alignItems: 'center',

  }

});



