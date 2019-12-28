import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import {View, StyleSheet, Text,TextInput,TouchableOpacity, ScrollView, Picker} from "react-native";
import * as firebase from 'firebase';

export default class FuneralCoverScreen extends Component {
 
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



signOutUser = () => {
    firebase.auth().signOut();
};
  render() {
    return (
            
            
      <Container style={styles.container}>
      <Content>

          <View style={{alignItems:'center'}}>

              
                      <View style={{paddingTop:5 }} >
                          
                          <View style={{width: 340, height: 600, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                              <View style={{alignItems:'flex-start', paddingHorizontal:5}}>
                                  <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={1}>
                                      <View >
                                          <Text style={{color:'white', fontSize:13}}> Name</Text>
                                      </View>

                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="Name"
                                              returnKeyType ="next"
                                              onChangeText={(text) => this.setState({text})}
                                              value = {this.state.text}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                      <View >
                                          <Text style={{color:'white', fontSize:13}}> Surname</Text>
                                      </View>

                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="Surname"
                                              returnKeyType ="next"
                                              onChangeText={(Surname) => this.setState({Surname})}
                                              value = {this.state.Surname}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                      <View >
                                          <Text style={{color:'white', fontSize:13}}> ID</Text>
                                      </View>

                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="00000"
                                              returnKeyType ="next"
                                              onChangeText={(ID) => this.setState({ID})}
                                              value = {this.state.ID}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                      <View >
                                          <Text style={{color:'white', fontSize:13}}> E-mail</Text>
                                      </View>

                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="E-mail"
                                              returnKeyType ="next"
                                              onChangeText={(email) => this.setState({email})}
                                              value = {this.state.email}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                      <View style={{paddingVertical:5, paddingBottom:10}}>
                                          <Text style={{color:'white', fontSize:13}}> Marital Status</Text>
                                      </View>

                                      <View style={{ borderWidth:1, borderColor:'black', backgroundColor:'white' }}>
                                          <Picker style={{width:'100%', height:34, color:'black', fontSize:13  }} selectedValue={this.state.PickerValue}
                                          onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
                                            <Picker.Item label ='Single' value='single'/>
                                            <Picker.Item label ='Married' value='married'/>
                                          </Picker>
                                      </View>

                                      <View style={{paddingVertical:5, paddingTop:10}}>
                                          <Text style={{color:'white', fontSize:13}}> No. of Dependants</Text>
                                      </View>

                                      <View style={{paddingVertical:5}}>
                                          <TextInput
                                              style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                              placeholder ="00"
                                              returnKeyType ="next"
                                              onChangeText={(Dependants) => this.setState({Dependants})}
                                              value = {this.state.Dependants}
                                              keyboardType = "email-address"
                                              autoCapitalize ="none"
                                              autoCorrect = {false}             
                                              placeholderTextColor = "#FFFFFF"
                                          />
                                      </View>

                                      

                                        




                                  </ScrollView>
                                  </View>

                                  <View style={{ width:340, height: 45, borderColor: "#ACACAC",backgroundColor: "#1a1d2a", paddingLeft:-5, paddingRight:-15 , paddingBottom:5}}>
                                  <View><Text> </Text></View>
                                            
                                  <Text style={{paddingHorizontal:13, color:'white', fontSize:13 }} >R</Text>
                                  
                                        
                                  </View>
                                  <View style={{}}><Text> </Text></View>

                                  <View style={{ width:340, height: 45, borderColor: "#ACACAC",backgroundColor: "#1a1d2a", paddingLeft:0, paddingRight:0 ,paddingVertical:0 }}>

                                  <View><Text> </Text></View>
                                            
                                    <Text style={{paddingHorizontal:13, color:'white', fontSize:13}} >R</Text>
                                    <View><Text> </Text></View>  
                                        
                                  </View>
                              
                                  <View style={{}}><Text> </Text></View>
                                  
                              <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical:0}}>
                                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('FuneralOrderFromNavigator')}>
                                      <Image
                                          style={{width:270, height: 41}}
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
