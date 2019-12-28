import React from 'react';

import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView,ImageBackground} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';
import Expo from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class ProductScreen extends React.Component {

    state = {

        email: this.props.navigation.getParam('user_email'),
        displayName: "",
        
    };
    


    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return(
            
            
            <Container style={styles.container}>

            <Content>



            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('FuneralCoverScreen')}>
                            <View >
                                <ImageBackground source={require('../assets/productbackgroundUno.png')} style={{width: 345, height: 100}}>
                                    <View style={{alignItems:'center'}}>
                                        <Text> </Text>
                                    </View>

                                    <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
                                    <Image style={{width:80, height:80}}
                                            source={require('../assets/funeraIcon.png')}
                                            />
                                        <View style={{alignItems:'center'}}>
                                            <View style={{alignItems:'center'}}>
                                                <Text> </Text>
                                            </View>
                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20,color:'#43c3de'}}> Funeral Cover </Text>
                                            </View>
                                            <View style={{alignItems:'center'}}>
                                                <Text >  </Text>
                                            </View>
                                        </View>
                                    </View>

                                    
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('LegalStackScreen')}>
                            <View>
                                <ImageBackground source={require('../assets/productbackgroundDos.png')} style={{width: 345, height: 100}}>
                                    <View style={{alignItems:'center'}}>
                                            <Text> </Text>
                                        </View>

                                        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
                                        <Image style={{width:80, height:80}}
                                                source={require('../assets/legalCoverIcon.png')}
                                                />
                                            <View style={{alignItems:'center'}}>
                                                <View style={{alignItems:'center'}}>
                                                    <Text> </Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{fontSize:20,color:'#5fed85'}}> Legal Cover </Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text >  </Text>
                                                </View>
                                            </View>
                                        </View>

                                    
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('RewardStackScreen')}>
                            <View >
                                <ImageBackground source={require('../assets/productbackgroundTres.png')} style={{width: 345, height: 100}}>
                                    <View style={{alignItems:'center'}}>
                                            <Text> </Text>
                                        </View>

                                        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
                                        <Image style={{width:80, height:80}}
                                                source={require('../assets/rewardIcon.png')}
                                                />
                                            <View style={{alignItems:'center'}}>
                                                <View style={{alignItems:'center'}}>
                                                    <Text> </Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{fontSize:20,color:'#ff59d2'}}> Reward </Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text >  </Text>
                                                </View>
                                            </View>
                                        </View>

                                    
                                </ImageBackground>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('SavinStackScreen')}>
                        <View >
                                <ImageBackground source={require('../assets/productbackgroundCuatro.png')} style={{width: 345, height: 100}}>
                                    <View style={{alignItems:'center'}}>
                                            <Text> </Text>
                                        </View>

                                        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
                                        <Image style={{width:80, height:80}}
                                                source={require('../assets/savingPlanIcon.png')}
                                                />
                                            <View style={{alignItems:'center'}}>
                                                <View style={{alignItems:'center'}}>
                                                    <Text> </Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text style={{fontSize:20,color:'#ff5969'}}> Savings Plan </Text>
                                                </View>
                                                <View style={{alignItems:'center'}}>
                                                    <Text >  </Text>
                                                </View>
                                            </View>
                                        </View>

                                    
                                            
                                </ImageBackground>
                        </View>
                        </TouchableOpacity>
                    </View>


                



                </View>
                    
            <View><Text> </Text></View>
            </ScrollView>
                </Content>
            <View style={{flexDirection:'row', alignSelf : 'center', justifyContent: 'center'}}>
                    <Text style={{color:'#808080',fontWeight:'700', fontSize:14}}> Hi {this.state.email}!</Text> 
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('Auth')}>

                            <Text style={{color:'#7fffd4',fontWeight:'400', fontSize:14}}> Logout</Text> 
                            </TouchableOpacity>    
            </View>

            <View><Text> </Text></View>
                

            
          
         
          </Container>

        );
    }
}
export default ProductScreen;

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

