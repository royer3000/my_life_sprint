import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class SignUpScreen extends React.Component {

    state = {
        name: "",
        email: "",
        password:"",
        errorMessage: null
       
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            })
        }).catch(error => this.setState({errorMessage: error.message}));

    };




    render(){
        return(
            <View style={styles.container}>

                <View style={{flex:1,alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Image style={{width:100, height:100}}
                    source={require('../assets/logo2.png')}
                    />
                </View>
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:271, height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor: '#1a1d2a',paddingHorizontal:13 }}
                        placeholder ="FULL NAME"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                        color = 'gray'
                        placeholderTextColor = 'white'
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:271, height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor: '#1a1d2a',paddingHorizontal:13 }}
                        placeholder ="EMAIL"
                        returnKeyType ="next"
                        onChangeText = {email => this.setState({email})}
                        value = {this.state.email}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                        color = 'gray'
                        placeholderTextColor = 'white'
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:271, height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor: '#1a1d2a',paddingHorizontal:13  }}
                        placeholder ="PASSWORD"
                        returnKeyType = "go"
                        color = 'gray'
                        placeholderTextColor = 'white'
                        secureTextEntry
                        autoCapitalize = "none"
                        onChangeText = {password => this.setState({password})}
                        value = {this.state.password}                
                    />
                </View>

        <View><Text> </Text></View>

                <View style={{margin:20, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.errorMessage && <Text style={{color:'white', fontSize: 20}}>{this.state.errorMessage}</Text>}
                </View>


                <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.handleSignUp}>
                        <Image
                            style={{width:270, height: 40}}
                            source={require('../assets/SignInBotton.png')}
                        />
                    </TouchableOpacity>
                </View>

                
            </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#212533'
        

    },

    containerDos:{
        borderBottomColor:'#1D212D',

        backgroundColor: '#1D212D'
    }
})