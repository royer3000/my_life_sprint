import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity,ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class PersonalInformation extends React.Component {

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

                        
      <Container style={styles.container}>


      <Content>
      <View style={{alignItems:'center'}}>

              
<View style={{paddingTop:5 }} >
    
    <View style={{width: 355, height: 620, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
        <View style={{alignItems:'center', paddingHorizontal:5}}>
            <ScrollView showsVerticalScrollIndicator={false} >

                <View><Text style={{fontSize:20, color:'white',fontWeight:'200',paddingHorizontal:5,paddingVertical:5}}> Personal Information {"(1/3)"}</Text></View>

                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Name*</Text>
                </View>
           
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white', fontSize:13   }}
                        placeholder ="Name"
                        returnKeyType ="next"
                        onChangeText = {name => this.setState({name})}
                        value = {this.state.name}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                       
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>


                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Surname*</Text>
                </View>
           

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white', fontSize:13   }}
                        placeholder ="Surname"
                        returnKeyType ="next"
                        onChangeText = {Surname => this.setState({Surname})}
                        value = {this.state.Surname}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                  
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Address*</Text>
                </View>
           

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white', fontSize:13   }}
                        placeholder ="Address"
                        returnKeyType ="next"
                        onChangeText = {Address => this.setState({Address})}
                        value = {this.state.Address}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                        
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>
                



                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Province*</Text>
                </View>
           

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white', fontSize:13   }}
                        placeholder ="Province"
                        returnKeyType ="next"
                        onChangeText = {Province => this.setState({Province})}
                        value = {this.state.Province}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                      
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>

                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> City*</Text>
                </View>
           

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="City"
                        returnKeyType ="next"
                        onChangeText = {City => this.setState({City})}
                        value = {this.state.City}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                       
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>


                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Suburbs*</Text>
                </View>
           

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white', fontSize:13   }}
                        placeholder ="Suburbs"
                        returnKeyType ="next"
                        onChangeText = {SubUrb => this.setState({SubUrb})}
                        value = {this.state.SubUrb}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                       
                        placeholderTextColor = "#FFFFFF"
                    />

                </View>


                <View  style={{paddingVertical:5}} >
                  <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Zip Code*</Text>
                </View>
           

                <View style={{alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white', fontSize:13   }}
                        placeholder ="Zip Code"
                        returnKeyType ="next"
                        onChangeText = {zCode => this.setState({zCode})}
                        value = {this.state.zCode}
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

                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-end'}} onPress={()=>this.props.navigation.navigate('PreviousJobInformation', { userMail: this.state.email, userPassword: this.state.password,CellPhone: this.state.CellPhone  })}>

                            <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:18}}> Step 2/3 {">"}</Text> 
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
export default PersonalInformation;

const styles = StyleSheet.create({
    container: {
        flex:1,       
        borderBottomColor:"#212533",

        backgroundColor: "#212533"
        

    },
    containerDos: {
        flexWrap:'wrap',
        borderBottomColor:"#1D212D",

        backgroundColor: "#1D212D"
        

    },
    viewP:{
        
        alignItems:'flex-start',
        justifyContent:'center',
        width:380,
        height:93,
        backgroundColor:"#2C3144",
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
      },
      view1:{ 
        alignSelf: 'center',
        marginTop: 15,
        margin: 5,   
        width:380,
        height:100,
        backgroundColor:"#00A2Ee",
        borderRadius:20,    
        alignItems:'center'
      },
      view2:{ 
        alignSelf: 'center',
        margin: 5,      
        width:380,
        height:100,
        backgroundColor:"#2CB023",
        borderRadius:20,    
        alignItems:'center'
      },
      view3:{ 
        alignSelf: 'center',
        margin: 5,      
        width:380,
        height:100,
        backgroundColor:"#C134B6",
        borderRadius:20,    
        alignItems:'center'
      },
      view4:{ 
        alignSelf: 'center',
        margin: 5,      
        width:380,
        height:100,
        backgroundColor:"#D71E1E",
        borderRadius:20,    
        alignItems:'center'
      },
})