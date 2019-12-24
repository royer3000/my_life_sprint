import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import {View, StyleSheet, Text,TextInput,TouchableOpacity, ScrollView, Picker} from "react-native";
import * as firebase from 'firebase';

export default class MyLifeForm extends Component {
 
  state = {

    email: "",
    displayName: "",
    
};
constructor(props) {
    super(props);
    this.state = { 
      
      signature: null,
    PickerValue:''
  
  };
  }


componentDidMount(){
    const {email, displayName} = firebase.auth().currentUser;

    this.setState({email, displayName});
}

signOutUser = () => {
    firebase.auth().signOut();
};
  render() {
    return (
            
            
      <Container style={styles.container}>
      <Content>

          <View style={{alignItems:'center'}}>

              
                      <View style={{paddingTop:5 }} >
                          
                          <View style={{width: 340, height: 570, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                              <View style={{alignItems:'flex-start', paddingHorizontal:5}}>
                                  <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={1}>


                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="R10,000 /  R100m"
                                              returnKeyType ="next"
                                              onChangeText={(text) => this.setState({text})}
                                              value = {this.state.text}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>


                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="R20,000 / R200m"
                                              returnKeyType ="next"
                                              onChangeText={(text) => this.setState({text})}
                                              value = {this.state.text}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="R30,000 / R300m"
                                              returnKeyType ="next"
                                              onChangeText={(text) => this.setState({text})}
                                              value = {this.state.text}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>



                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="R40,000 / R400m"
                                              returnKeyType ="next"
                                              onChangeText={(text) => this.setState({text})}
                                              value = {this.state.text}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                        




                                  </ScrollView>
                                  </View>

                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  <View style={{}}><Text> </Text></View>
                                  
                              <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical:0}}>
                                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('DebitOrderFrom')}>
                                      <Image
                                          style={{width:275, height: 41}}
                                          source={require('../../../assets/sumitbottton.png')}
                                      />
                                  </TouchableOpacity>
                              </View>
                              




                          </View>    
                          
                      </View>
              


          </View>

                                      
                                  
  </Content>
  </Container>
    );
  }
}



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
