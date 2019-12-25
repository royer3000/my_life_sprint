import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView, Picker} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class BanckDetails extends React.Component {

    state = {
        name:"",
        email: this.props.navigation.getParam('userMail'),
        password: this.props.navigation.getParam('userPassword'),
        CellPhone: this.props.navigation.getParam('UserCellPhone'),
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
            <Container style={styles.container}>


            <Content>
            <View style={{alignItems:'center'}}>
            <View style={{paddingTop:5 }} >
    
            <View style={{width: 355, height: 700, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                <View style={{alignItems:'center', paddingHorizontal:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View><Text style={{fontSize:20, color:'white',fontWeight:'200',paddingHorizontal:5,paddingVertical:5}}> Previous Job Information {"(1/1)"} </Text></View>


                <View  style={{paddingVertical:5}} >
                        
                    <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Title</Text>
                        
                </View>                   

                
                
                <View style={{ borderWidth:1, borderColor:'black', backgroundColor:'white' }}>
                                          <Picker style={{width:'100%', height:35, color:'black', fontSize:13  }} selectedValue={this.state.PickerValue}
                                          onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
                                            <Picker.Item label ='Mr.' value='Mr'/>
                                            <Picker.Item label ='Mrs.' value='Mrs'/>
                                            <Picker.Item label ='Ms.' value='Ms'/>
                                            <Picker.Item label ='Miss' value='Miss'/>
                                          </Picker>
                </View>

                <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Work Location</Text>
                            
                    </View>                   
    
                    
                    
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                
                        <TextInput
                            style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                            placeholder ="Durban, SA"
                            returnKeyType ="next"
                            onChangeText = {WorkLocation => this.setState({WorkLocation})}
                            value = {this.state.WorkLocation}
                            keyboardType = "email-address"
                            autoCapitalize ="none"
                            autoCorrect = {false} 
                        
                            placeholderTextColor = "#FFFFFF"
                        />
    
                    </View>

                    <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Work Phone</Text>
                            
                    </View>                   
    
                    
                    
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                
                        <TextInput
                            style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                            placeholder ="00000"
                            returnKeyType ="next"
                            onChangeText = {WorkPhone => this.setState({WorkPhone})}
                            value = {this.state.WorkPhone}
                            keyboardType = "email-address"
                            autoCapitalize ="none"
                            autoCorrect = {false} 
                        
                            placeholderTextColor = "#FFFFFF"
                        />
    
                    </View>

                    <View style={{paddingVertical:5}}>
                                          <Text style={{color:'white', fontSize:13}}> Start Date*</Text>
                    </View>

                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                
                        <TextInput
                            style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                            placeholder ="mm/dd/yyyy"
                            returnKeyType ="next"
                            onChangeText = {WorkPhone => this.setState({WorkPhone})}
                            value = {this.state.WorkPhone}
                            keyboardType = "email-address"
                            autoCapitalize ="none"
                            autoCorrect = {false} 
                        
                            placeholderTextColor = "#FFFFFF"
                        />
    
                    </View>

                    <View style={{paddingVertical:5}}>
                                          <Text style={{color:'white', fontSize:13}}> Position Applying For*</Text>
                    </View>

                    <View style={{ borderWidth:1, borderColor:'black', backgroundColor:'white' }}>
                                          <Picker style={{width:'100%', height:35, color:'black', fontSize:13  }} selectedValue={this.state.PickerValue}
                                          onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
                                            <Picker.Item label ='Regional Manager' value='FemaRegional Managerle'/>
                                            <Picker.Item label ='Province Manager' value='Province Manager'/>
                                            <Picker.Item label ='Sales Agent' value='Agent Sales'/>
                                          </Picker>
                    </View>

                    <View><Text> </Text></View>


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {this.state.errorMessage && <Text style={{color:"red", fontSize: 13, alignContent:'center'}}>{this.state.errorMessage}</Text>}
            </View>

                <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={this.handleSignUp}>
                        <Image
                            style={{width:270, height: 41}}
                            source={require('../../assets/SignInBotton.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View><Text> </Text></View>

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
