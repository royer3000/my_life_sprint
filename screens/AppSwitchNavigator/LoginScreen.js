import React from 'react'
import {StyleSheet, View, Text, Image,TextInput,TouchableOpacity,} from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import * as firebase from 'firebase';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});


export default class LoginScreen extends React.Component{ 

    state = {
        email: "",
        password:"",
        errorMessage: null
       
    };

    handleLogin = () => {
        const {email, password} = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}));
    };

    render(){
    return(
        <View style={{flex:1, backgroundColor:'#212533'}}>
            <View style={{flex:1}}><Text> </Text></View>

            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
                <Image
                    style={{width:300, height:100}}
                    source={require('../../assets/logo.png')}
                />
            </View>
                
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                <TextInput
                    style={{ width:271, height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor: '#1a1d2a',paddingHorizontal:13 }}
                    placeholder ="USERNAME"
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

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.handleLogin}>
                    <Image
                        style={{width:270, height: 40}}
                        source={require('../../assets/bottomLogin.png')}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={{margin:20, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.errorMessage && <Text style={{color:'white', fontSize: 20}}>{this.state.errorMessage}</Text>}
            </View>

            <View style={{flex:2,flexDirection: 'row',alignItems: 'flex-end', justifyContent: 'center'}}>
                <Text style={{color: 'gray'}}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                    <Text style={{color:'aquamarine'}} > Sign up now </Text>
                </TouchableOpacity>
            </View>

            <View><Text> </Text></View>



        </View>

        );
    } 
}