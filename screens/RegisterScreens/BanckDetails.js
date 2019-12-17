import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class BanckDetails extends React.Component {

    state = {
        name:"",
        email: this.props.navigation.getParam('userMail'),
        password: this.props.navigation.getParam('userPassword'),
        errorMessage: null
       
    };

    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        }).catch(error => this.setState({errorMessage: error.message}));

    };




    render(){
        return(

            
            <View style={styles.container}>
                <ScrollView >


                <View><Text  style={{fontSize:30, color:'white'}}> Bank Details</Text></View>

                    <View><Text> </Text></View>
                <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width:100, height:100}}
                    source={require('../../assets/logo2.png')}
                    />
                </View>
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:271, height: 40, borderColor: "#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Bank Name"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                      
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>


                <View><Text> </Text></View>


                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:271, height: 40, borderColor: "#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Account Name"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                      
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:271, height: 40, borderColor: "#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Account Number"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                      
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>
                


                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:271, height: 40, borderColor: "#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Branch Code"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                 
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:271, height: 40, borderColor:"#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Branch Name"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                   
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:271, height: 40, borderColor:"#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Tax Number"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                   
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:271, height: 40, borderColor: "#808080", borderWidth: 1,backgroundColor: "#1a1d2a",paddingHorizontal:13 }}
                        placeholder ="Upload of Bank Statement "
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.email}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>
                <View><Text> </Text></View>


                <View style={{margin:20, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.errorMessage && <Text style={{color:"#FFFFFF", fontSize: 20}}>{this.state.errorMessage}</Text>}
                </View>


                <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.handleSignUp}>
                        <Image
                            style={{width:270, height: 40}}
                            source={require('../../assets/SignInBotton.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View><Text> </Text></View>

            
                </ScrollView>
            </View>
        );
    }
}
export default BanckDetails;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: "#212533"
        

    },

    containerDos:{
        borderBottomColor:"#1D212D",

        backgroundColor: "#1D212D"
    }
})