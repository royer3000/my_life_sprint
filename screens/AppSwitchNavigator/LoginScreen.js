import React from 'react'
import {StyleSheet, View, Text, Image,TextInput,TouchableOpacity,} from 'react-native'
import { createStackNavigator} from 'react-navigation-stack';
import * as firebase from 'firebase';


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFFFF",
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
        <View style={{flex:1, backgroundColor:"#212533"}}>
            <View style={{flex:1}}><Text> </Text></View>

            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
                <Image
                    style={{width:195, height:80}}
                    source={require('../../assets/logo.png')}
                />
            </View>

            <View tyle={{flex:1}}><Text> </Text></View>
                
            <View style={{flex:2,alignItems: 'center', justifyContent: 'center'}}>
            
                <TextInput
                    style={{ width:272, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white' }}
                    placeholder ="Username"
                    returnKeyType ="next"
                    onChangeText = {email => this.setState({email})}
                    value = {this.state.email}
                    keyboardType = "email-address"
                    autoCapitalize ="none"
                    autoCorrect = {false}             
                    placeholderTextColor = "#FFFFFF"
                />

                <View><Text> </Text></View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:272, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="Password"
                        returnKeyType = "go"
                    
                        placeholderTextColor = "#FFFFFF"
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
                        style={{width:270, height: 41}}
                        source={require('../../assets/bottomLogin.png')}
                    />
                </TouchableOpacity>
            </View>

            </View>

            

            
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {this.state.errorMessage && <Text style={{color:"red", fontSize: 13, alignContent:'center'}}>{this.state.errorMessage}</Text>}
            </View>

            <View style={{flex:2,flexDirection: 'row',alignItems: 'flex-end', justifyContent: 'center'}}>
                
                
                    <Text style={{color: "#808080", fontSize: 14}}>Don't have an account?</Text>
                    
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>  
                    <Text style={{color:"#7fffd4",fontSize: 14}} > Sign up now </Text>
                    
                </TouchableOpacity>
            </View>
            <View><Text> </Text></View>

            



        </View>

        );
    } 
}