import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import {View, StyleSheet, Text,TextInput,TouchableOpacity, ScrollView} from "react-native";

export default class FuneralCoverForm extends Component {
  render() {
    return (
      <Container>

        <Content style={styles.container}>

        <ScrollView scrollEventThrottle={16}>
        <View style={{alignItems:'center'}}>
            <ScrollView scrollEventThrottle={16}>

                  <View>
                      <Text style={{color:'white',fontWeight:'400',paddingVertical:10, fontSize:20}}> Family Pack</Text>
                  
                  </View>

                  <View >
                        <View style={{flex:1, backgroundColor:'#292d3a', width:325, height:280,borderWidth:2, borderColor:'yellow', borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15, }}>
                            <Card style={{ alignSelf:'center', width:320,height:255,marginTop:-1, backgroundColor:'#292d3a', borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15 }}>
                              <CardItem style={{backgroundColor:'#292d3a',borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15}}>
                                <Left>
                                  <Thumbnail source={require('../../../assets/funeraIcon.png')} />
                                  <Body>
                                    <Text  style={{fontSize:14, color:'white'}}>Funeral Type Product</Text>
                                    <Text  style={{fontSize:14, color:'white'}} note>Funeral Type</Text>
                                  </Body>
                                </Left>
                              </CardItem>
                              <CardItem cardBody>
                                <Image source={require('../../../assets/imgfun.jpg')} style={{height: 120, width: null, flex: 1}}/>
                              </CardItem>
                              <CardItem style={{backgroundColor:'#292d3a',borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15}}>

                                <Body style={{flexDirection:'row'}}>
                                  <Button style={{ alignContent:'center' }} transparent>
                                        <View style={{alignSelf:'center', marginLeft:50}}>
                                        <Text style={{fontSize:20, color:'white'}}> Prices</Text>
                                        </View>
                                        
                                      </Button>
                                    <View style={{flex:2}}><Text> </Text></View>
                                    <View style={{ alignSelf:'flex-end'}}>
                                      <Button style={{ }} transparent>
                                        <View style={{marginRight:50}}>
                                        <Text style={{fontSize:20, color:'white'}}> All</Text>
                                        </View>
                                      
                                      </Button>
                                    </View>
                                </Body>

                              </CardItem>
                            </Card>
                        </View>
                  </View>

                  <View>
                      <Text style={{color:'white',fontWeight:'400',paddingVertical:10, fontSize:20}}> Extended Family Menmber</Text>
                  
                  </View>

                  <View >
                        <View style={{flex:1, backgroundColor:'#292d3a', width:325, height:280,borderWidth:2, borderColor:'yellow', borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15, }}>
                            <Card style={{ alignSelf:'center', width:320,height:255,marginTop:-1, backgroundColor:'#292d3a', borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15 }}>
                              <CardItem style={{backgroundColor:'#292d3a',borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15}}>
                                <Left>
                                  <Thumbnail source={require('../../../assets/funeraIcon.png')} />
                                  <Body>
                                    <Text  style={{fontSize:14, color:'white'}}>Funeral Type Product</Text>
                                    <Text  style={{fontSize:14, color:'white'}} note>Funeral Type</Text>
                                  </Body>
                                </Left>
                              </CardItem>
                              <CardItem cardBody>
                                <Image source={require('../../../assets/imgfun.jpg')} style={{height: 120, width: null, flex: 1}}/>
                              </CardItem>
                              <CardItem style={{backgroundColor:'#292d3a',borderBottomLeftRadius:15, borderBottomRightRadius:15, borderTopRightRadius:15, borderTopLeftRadius:15}}>

                                <Body style={{flexDirection:'row'}}>
                                  <Button style={{ alignContent:'center' }} transparent>
                                        <View style={{alignSelf:'center', marginLeft:50}}>
                                        <Text style={{fontSize:20, color:'white'}}> Prices</Text>
                                        </View>
                                        
                                      </Button>
                                    <View style={{flex:2}}><Text> </Text></View>
                                    <View style={{ alignSelf:'flex-end'}}>
                                      <Button style={{ }} transparent>
                                        <View style={{marginRight:50}}>
                                        <Text style={{fontSize:20, color:'white'}}> All</Text>
                                        </View>
                                      
                                      </Button>
                                    </View>
                                </Body>

                              </CardItem>
                            </Card>
                        </View>
                  </View>
            </ScrollView>



            </View>
        </ScrollView>
          
          
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
