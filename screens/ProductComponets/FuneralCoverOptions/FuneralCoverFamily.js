import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import {View, StyleSheet, Text,TextInput,TouchableOpacity, ScrollView} from "react-native";

export default class FuneralCoverScreen extends Component {
  render() {
    return (
      <Container>

        <Content style={styles.container}>

        <ScrollView scrollEventThrottle={16}>
          <View>
            <View>
              <Text style={{fontSize:24, fontWeight:'700',paddingHorizontal:20, color:'white'}}>
              Only Plans For Family
              </Text>
            </View>

            <View>
              <Text style={{fontSize:20, fontWeight:'400',paddingHorizontal:20, color:'white', margin:10}}>
                Small Family Packs
              </Text>
            </View>
            
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/funeraIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>18 - 65 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/funeraIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text style={{color:'white'}}></Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>


                <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/rewardIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>66 - 75 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/rewardIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text style={{color:'white'}}></Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>


                <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/rewardIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>76 - 85 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/rewardIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}></Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text style={{color:'white'}}>11h ago</Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>


                <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/rewardIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>86 - 100 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/rewardIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text></Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>
              

              </ScrollView>

            </View>
            
          </View>


          <View>
              <Text style={{fontSize:20, fontWeight:'400',paddingHorizontal:20, color:'white', margin:10}}>
                Extended Family Member Pack
              </Text>
            </View>

            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/rewardIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>18 - 65 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/rewardIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text style={{color:'white'}}> </Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>


                <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/rewardIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>66 - 75 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/rewardIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text style={{color:'white'}}></Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>


                <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/rewardIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>76 - 85 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/rewardIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text style={{color:'white'}}></Text>
                          </Right>
                        </CardItem>
                  </Card>
                </View>


                <View>
                  <Card >
                        <CardItem  style={styles.container} >
                          <Left>
                            <Thumbnail source={require('../../../assets/savingPlanIcon.png')} />
                            <Body>
                              <Text style={{color:'white'}}>My Life Cover Premium</Text>
                              <Text style={{color:'white'}} note>86 - 100 years</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image source={require('../../../assets/savingPlanIcon.png')} style={{height: 130, width: 50, flex: 1}}/>
                        </CardItem>
                        <CardItem  style={styles.container} >
                          <Left>
                          <Button transparent>
                            <Image source={require('../../../assets/ourrates.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white', fontSize:10}}> Prices</Text>
                            </Button>
                          </Left>
                          <Body>
                            <Button transparent>
                            <Image source={require('../../../assets/category.png')} style={{height: 15, width: 100, flex: 1}} />
                              <Text style={{color:'white'}}> All </Text>
                            </Button>
                          </Body>
                          <Right>
                            <Text></Text>
                          </Right>
                        </CardItem>
                  </Card>
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
