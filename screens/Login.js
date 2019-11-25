import React from 'react';
import { StyleSheet, Text, Image, View, TextInput,TouchableOpacity, Modal} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigatior } from 'react-navigation-stack';



export default class Login extends React.Component {

    state = {

      
      isVisible:false,
    }
    
    handlePress = () =>{

      this.setState({isVisible: !this.state.isVisible })
    };



    render(){
      return (
        <View style={styles.container}>
            
            <View style={styles.vacio}>
                <Text></Text>
            </View>
                        
            <View style={styles.comsign}>
                
              <Text style={{color:'grey'}}>Don't have an account?</Text>
                
              <TouchableOpacity onPress={this.handlePress}>
              <Text style={styles.signcolor}> Sign up now</Text>
              </TouchableOpacity>
            </View>

            <Modal animationType="slide" style={styles.container} visible={this.state.isVisible}>
              <View style={styles.container}>
                 <View style ={styles.logo}>
                  <Image 
                  style ={styles.logo2}
                  source = {require ('../assets/logo2.png')}
                  />
                </View>
                    <Text style={styles.regisText}>REGISTRATION</Text>

                    <TextInput 
                      style = {styles.inputBox} 
                      placeholder ="YOUR USERNAME"
                      returnKeyType ="next"
                      onSubmitEditing = {() => this.passwordInput.focus()}
                      keyboardType = "email-address"
                      autoCapitalize ="none"
                      autoCorrect = {false} 
                      placeholderTextColor = 'white'

                    />
                    <TextInput 
                      style = {styles.inputBox} 
                      placeholder ="YOUR PASSWORD"
                      returnKeyType = "go"
                      placeholderTextColor = 'white'
                      secureTextEntry
                      ref = {(input) => this.passwordInput = input}
                    
                    />

                    <TextInput 
                      style = {styles.inputBox} 
                      placeholder ="YOUR EMAIL"
                      returnKeyType ="next"
                      onSubmitEditing = {() => this.passwordInput.focus()}
                      keyboardType = "email-address"
                      autoCapitalize ="none"
                      autoCorrect = {false} 
                      placeholderTextColor = 'white'

                    />                    

                <TouchableOpacity style ={styles.button} onPress = {this.handlePress}>
                  <Text style = {styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            
        </View>
        



      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    backgroundColor: '#212533',
    justifyContent:"center",
    alignItems:"center",


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


  }
});