import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity,ImageBackground,ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

export default class LegalCoverScreen extends React.Component{ 

  state = {

    email: "",
    displayName: "",
    
};


componentDidMount(){
    const {email, displayName} = firebase.auth().currentUser;

    this.setState({email, displayName});
}

signOutUser = () => {
    firebase.auth().signOut();
};
    render() {
      return(
          
          
          <Container style={styles.container}>

          <Content>



          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
              <View><Text> </Text></View>
                  <View style={{alignItems:'center'}}>
                      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('ClientelleForm')}>
                          <View >
                              <View style={{width: 345, height: 100,backgroundColor:'#5fed85', marginVertical:12,borderTopRightRadius:10,borderBottomRightRadius:10}}>
                              <View style={{width: 340, height: 100, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:10,borderBottomRightRadius:10}}>
                                  <View style={{alignItems:'center'}}>
                                      <Text> </Text>
                                  </View>

                                    <View style={{flexDirection:'row',alignSelf:'flex-start'}}>

                                        <View style={{alignItems:'center'}}>

                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20,color:'#ffffff'}}>Clientelle </Text>
                                            </View>
                                            <View style={{alignItems:'flex-start'}}>
                                                <Text style={{fontSize:14,color:'white'}}>      R200/pm R30000</Text>
                                            </View>

                                        </View>
                                        <View style={{paddingStart:120,}}>
                                          <Image style={{width:65, height:65,borderTopRightRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10}}
                                            source={require('../../../assets/fun1.png')}
                                            />
                                          </View>
                                    </View>

                              </View>    
                              </View>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('LibertyForm')}>
                          <View >
                              <View style={{width: 345, height: 100,backgroundColor:'#ff59d2', marginVertical:12,borderTopRightRadius:10,borderBottomRightRadius:10}}>
                              <View style={{width: 340, height: 100, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:10,borderBottomRightRadius:10}}>
                                  <View style={{alignItems:'center'}}>
                                      <Text> </Text>
                                  </View>

                                    <View style={{flexDirection:'row',alignSelf:'flex-start'}}>

                                        <View style={{alignItems:'center', marginLeft:-9}}>

                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20,color:'#ffffff'}}>Liberty   </Text>
                                            </View>
                                            <View style={{alignItems:'flex-start'}}>
                                                <Text style={{fontSize:14,color:'white'}}>         R200/pm R30000</Text>
                                            </View>

                                        </View>
                                        <View style={{paddingStart:120,}}>
                                          <Image style={{width:65, height:65,borderTopRightRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10}}
                                            source={require('../../../assets/fun1.png')}
                                            />
                                          </View>
                                    </View>

                              </View>    
                              </View>
                          </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('MyLifeForm')}>
                          <View >
                              <View style={{width: 345, height: 100,backgroundColor:'#fbeb86', marginVertical:12,borderTopRightRadius:10,borderBottomRightRadius:10}}>
                              <View style={{width: 340, height: 100, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:10,borderBottomRightRadius:10}}>
                                  <View style={{alignItems:'center'}}>
                                      <Text> </Text>
                                  </View>

                                    <View style={{flexDirection:'row',alignSelf:'flex-start'}}>

                                        <View style={{alignItems:'center',marginLeft:-9}}>

                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20,color:'#ffffff'}}>My Life </Text>
                                            </View>
                                            <View style={{alignItems:'flex-start'}}>
                                                <Text style={{fontSize:14,color:'white'}}>         R200/pm R30000</Text>
                                            </View>

                                        </View>
                                        <View style={{paddingStart:120,}}>
                                          <Image style={{width:65, height:65,borderTopRightRadius:10,borderBottomRightRadius:10,borderBottomLeftRadius:10,borderTopLeftRadius:10}}
                                            source={require('../../../assets/fun3.png')}
                                            />
                                          </View>
                                    </View>

                              </View>    
                              </View>
                          </View>
                      </TouchableOpacity>
                    </View>


              



              </View>
                  
          <View><Text> </Text></View>
          </ScrollView>
              </Content>
          

          
        
       
        </Container>

      );
    } 
}

const styles = StyleSheet.create({

  container: {
    flexWrap:'wrap',
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
    margin:5,
    justifyContent:'center',
    width:400,
    height:100,
    backgroundColor:"#343748",
    
    borderBottomStartRadius:10
  },
  view1:{ 
    alignSelf: 'flex-start',
    margin: 5,      
    width:10,
    height:100,
    backgroundColor:"#2CB023",
    alignItems:'flex-start'
  },
  view2:{ 
    alignSelf: 'flex-start',
    margin: 5,      
    width:10,
    height:100,
    backgroundColor:"#C134B6", 
    alignItems:'flex-start'
  },
  view3:{ 
    alignSelf: 'flex-start',
    margin: 5,      
    width:10,
    height:100,
    backgroundColor:"#FFDA33", 
    alignItems:'flex-start'
  },
  view4:{ 
    alignSelf: 'flex-start',
    margin: 5,      
    width:10,
    height:100,
    backgroundColor:"#D71E1E",
    alignItems:'flex-start'
  },

})
