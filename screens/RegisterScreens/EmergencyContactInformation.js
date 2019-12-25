import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView,Picker} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class EmergencyContactInformation extends React.Component {

    state = {
        name: this.props.navigation.getParam('userName'),
        email: this.props.navigation.getParam('userMail'),
        last_name: this.props.navigation.getParam('userlast_name'),
        password: this.props.navigation.getParam('userPassword'),
        phone: this.props.navigation.getParam('UserPhone'),
        errorMessage: null,
        photo:null,
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
            <Container style={styles.container}>


            <Content>
            <View style={{alignItems:'center'}}>
            <View style={{paddingTop:5 }} >
    
            <View style={{width: 355, height: 500, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                <View style={{alignItems:'center', paddingHorizontal:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View><Text style={{fontSize:20, color:'white',fontWeight:'200',paddingHorizontal:5,paddingVertical:5}}> Personal Information {"(3/3)"} </Text></View>


                <View  style={{paddingVertical:5}} >
                        
                    <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Birthdate*</Text>
                        
                </View>                   

                
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="mm/dd/yyyy"
                        returnKeyType ="next"
                        onChangeText = {Birthdate => this.setState({Birthdate})}
                        value = {this.state.Birthdate}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                    
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View style={{paddingVertical:5}}>
                                          <Text style={{color:'white', fontSize:13}}> Gender</Text>
                                      </View>

                                      <View style={{ borderWidth:1, borderColor:'black', backgroundColor:'white' }}>
                                          <Picker style={{width:'100%', height:35, color:'black', fontSize:13,  }} selectedValue={this.state.PickerValue}
                                          onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
                                            <Picker.Item label ='Female' value='Female'/>
                                            <Picker.Item label ='Male' value='Male'/>
                                          </Picker>
                                      </View>


                <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Age</Text>
                            
                </View> 


                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="00"
                        returnKeyType ="next"
                        onChangeText = {Age => this.setState({Age})}
                        value = {this.state.Age}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>
             


                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {this.state.errorMessage && <Text style={{color:"red", fontSize: 13, alignContent:'center'}}>{this.state.errorMessage}</Text>}
                </View>

                <View><Text> </Text></View>




                <View style={{flexDirection:'row', alignSelf : 'flex-start', justifyContent: 'center'}}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-start'}} onPress = {()=>this.props.navigation.goBack()}>

                    <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:18}}> {"<"} Back </Text> 
                    </TouchableOpacity>
                    <View><Text> {"                       "} {"                       "}</Text></View>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-end'}} onPress={()=>this.props.navigation.navigate('BanckDetails', { userName: this.state.name, userMail: this.state.email, userPassword: this.state.password,userlast_name: this.state.last_name, userPhone:this.state.phone  })}>

                    <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:18}}>          Next {">"}</Text> 
                    </TouchableOpacity>   
                </View>

            
                </ScrollView>


 

</View>




</View>    

</View>


            </View>




            </Content>
  </Container>
        );
    }
}
export default EmergencyContactInformation;

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