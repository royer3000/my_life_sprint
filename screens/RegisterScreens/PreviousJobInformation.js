import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

class PreviousJobInformation extends React.Component {

    state = {
        name:"",
        email: this.props.navigation.getParam('userMail'),
        password: this.props.navigation.getParam('userPassword'),
        CellPhone: this.props.navigation.getParam('UserCellPhone'),
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
    handleChoosePhoto = () => {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response });
          }
        });
      };




    render(){
        const { photo } = this.state;
        return(
            <Container style={styles.container}>


            <Content>
            <View style={{alignItems:'center'}}>
            <View style={{paddingTop:5 }} >
    
            <View style={{width: 355, height: 650, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                <View style={{alignItems:'center', paddingHorizontal:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View><Text style={{fontSize:20, color:'white',fontWeight:'200',paddingHorizontal:5,paddingVertical:5}}> Personal Information {"(2/3)"}</Text></View>

                        <View  style={{paddingVertical:5}} >
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Upload proof of address VIA</Text>
                        </View>

                        <View style={{flexDirection:'row', alignSelf : 'flex-start', justifyContent: 'center', paddingHorizontal:5,paddingVertical:5}}>
                            <View style={{ borderWidth:1, borderColor:'white', with:50, hight:10}} >
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-start'}} onPress = {()=>this.props.navigation.goBack()}>
                            <View><Text> </Text></View>
                            <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:13}}>{"   "} Upload Document {"   "}</Text> 
                            </TouchableOpacity>
                            </View>
                            <View><Text> {"       "} {"       "} </Text></View>
                            
                            <View style={{ borderWidth:1, borderColor:'white', with:50, hight:10 }} >
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-end'}} oonPress={this.launchCamera}>
                            <View><Text> </Text></View>
                            <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:13,  }}>{"      "}  {"      "} Camera {"      "} {"      "}  </Text> 
                            <View><Text> </Text></View>
                            </TouchableOpacity>
                            </View>   
                        </View>

                <View  style={{paddingVertical:5}} >
                        
                    <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Home Phone</Text>
                        
                </View>                   

                
                
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="000 000 000"
                        returnKeyType ="next"
                        onChangeText = {HomePhone => this.setState({HomePhone})}
                        value = {this.state.HomePhone}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                    
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>


                <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Cell Phone*</Text>
                            
                </View> 


                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="00"
                        returnKeyType ="next"
                        onChangeText = {CellPhone => this.setState({CellPhone})}
                        value = {this.state.CellPhone}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                     
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                


                <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> ID Number</Text>
                            
                </View> 

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:330, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="00"
                        returnKeyType ="next"
                        onChangeText = {idNumber => this.setState({idNumber})}
                        value = {this.state.idNumber}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                       
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>
                <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Upload copy of ID via:</Text>
                            
                </View> 

                <View style={{flexDirection:'row', alignSelf : 'flex-start', justifyContent: 'center', paddingHorizontal:5,paddingVertical:5}}>
                            <View style={{ borderWidth:1, borderColor:'white', with:50, hight:10}} >
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-start'}} onPress = {()=>this.props.navigation.goBack()}>
                            <View><Text> </Text></View>
                            <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:13}}>{"   "} Upload Document {"   "}</Text> 
                            </TouchableOpacity>
                            </View>
                            <View><Text> {"       "} {"       "} </Text></View>
                            
                            <View style={{ borderWidth:1, borderColor:'white', with:50, hight:10 }} >
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-end'}} onPress = {()=>this.props.navigation.goBack()}>
                            <View><Text> </Text></View>
                            <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:13,  }}>{"      "}  {"      "} Camera {"      "} {"      "}  </Text> 
                            <View><Text> </Text></View>
                            </TouchableOpacity>
                            </View>   
                </View>

                <View><Text> </Text></View>


                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {this.state.errorMessage && <Text style={{color:"red", fontSize: 13, alignContent:'center'}}>{this.state.errorMessage}</Text>}
                </View>



                <View style={{flexDirection:'row', alignSelf : 'flex-start', justifyContent: 'center'}}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-start'}} onPress = {()=>this.props.navigation.goBack()}>

                    <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:18}}> {"<"} Back </Text> 
                    </TouchableOpacity>
                    <View><Text> {"                       "} {"                       "}</Text></View>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-end'}} onPress={()=>this.props.navigation.navigate('EmergencyContactInformation', { userMail: this.state.email, userPassword: this.state.password,CellPhone: this.state.CellPhone   })}>

                    <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:18}}>   Step 3/3 {">"}</Text> 
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
export default PreviousJobInformation;

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