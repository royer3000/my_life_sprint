import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class SignUpScreen extends React.Component {

    state = {
        email: "",
        password: "",
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
      


      <Header style={styles.container}>
          
          <Left  style={{flexDirection: 'row', justifyContent: 'flex-start',marginTop:35, marginLeft:-8}}>

  
              <Body>
              <View style={{paddingHorizontal:1, flexDirection:'row', paddingVertical:1}}><View><Text style={{fontSize:18, color: 'white', fontWeight:'700' }}></Text></View></View>   

              </Body>

          </Left>
          



      </Header>
      <Content>

      <View style={{alignItems:'center'}}>

              
<View style={{paddingTop:5 }} >
    
    <View style={{width: 355, height: 800, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
        <View style={{alignItems:'center', paddingHorizontal:5}}>
            <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={1}>


                <View><Text> </Text></View>
                <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize:26, color:'white',fontWeight:'700',paddingHorizontal:20,}}>Register</Text>
                </View>

                <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width:100, height:100}}
                    source={require('../../assets/logo2.png')}
                    />
                </View>
                
                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="Email"
                        returnKeyType ="next"
                        onChangeText = {email => this.setState({email})}
                        value = {this.state.email}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                        
                        placeholderTextColor = "#ffffff"
                    />

                </View>

                <View><Text> </Text></View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
            
                    <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="Password"
                        returnKeyType = "go"
                        
                        placeholderTextColor = "#ffffff"
                        secureTextEntry
                        autoCapitalize = "none"
                        onChangeText = {password => this.setState({password})}
                        value = {this.state.password}                
                    />
                </View>


                <View><Text> </Text></View>

                <TextInput
                        style={{ width:325, height: 40, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13,color:'white'   }}
                        placeholder ="Phone Number"
                        returnKeyType ="next"
                        onChangeText = {phoneNumber => this.setState({phoneNumber})}
                        value = {this.state.phoneNumber}
                        keyboardType = "email-address"
                        autoCapitalize ="none"
                        autoCorrect = {false} 
                        
                        placeholderTextColor = "#ffffff"
                    />
        <View><Text> </Text></View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        {this.state.errorMessage && <Text style={{color:"red", fontSize: 13, alignContent:'center'}}>{this.state.errorMessage}</Text>}
                    </View>

                    <View><Text> </Text></View>

                <View style={{flex:2, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PersonaleInformation', { userMail: this.state.email, userPassword: this.state.password  })}>
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
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
    
        borderBottomColor:"#2CB023",
        borderColor: '#d6d7da',
        backgroundColor: "#212533"
        
    
    },
    viewP:{
        
        alignItems:'flex-start',
        justifyContent:'center',
        width:400,
        height:93,
        backgroundColor:"#343748",
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
      },
      view1:{ 
        alignSelf: 'center',
        marginTop: 15,
        margin: 5,   
        width:400,
        height:100,
        backgroundColor:"#00A2Ee",
        borderRadius:20,    
        alignItems:'center'
      },
      view2:{ 
        alignSelf: 'center',
        margin: 5,      
        width:400,
        height:100,
        backgroundColor:"#2CB023",
        borderRadius:20,    
        alignItems:'center'
      },
      view3:{ 
        alignSelf: 'center',
        margin: 5,      
        width:400,
        height:100,
        backgroundColor:"#C134B6",
        borderRadius:20,    
        alignItems:'center'
      },
      view4:{ 
        alignSelf: 'center',
        margin: 5,      
        width:400,
        height:100,
        backgroundColor:"#D71E1E",
        borderRadius:20,    
        alignItems:'center'
      },
    
    })
    