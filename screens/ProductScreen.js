import React from 'react';

import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';
import Expo from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class ProductScreen extends React.Component {

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

            <View style={styles.container}>
            
            
            

                <View style={styles.view1} >
                    <View style={styles.viewP} > 
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('FuneralCoverScreen')}>
                                <Image style={{width:80, height:80}}
                                source={require('../assets/funeraIcon.png')}
                                />
                                <Text style={{color:"#00BFFF", fontSize:24}}>Funeral Cover</Text>
                            </TouchableOpacity>   
                        </View>                
                    </View>
                </View>


                <View style={styles.view2} >
                    <View style={styles.viewP} >
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('LegalCoverScreen')}>
                                <Image style={{width:70, height:65}}
                                source={require('../assets/legalCoverIcon.png')}
                                />
                                <Text style={{color:"#7cfc00", fontSize:24}}>  Legal Cover</Text> 
                            </TouchableOpacity>    
                        </View>                                
                    </View>
                </View>

                <View style={styles.view3} >
                    <View style={styles.viewP} >
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('RewardScreen')}>
                                <Image style={{width:80, height:80}}
                                source={require('../assets/rewardIcon.png')}
                                />
                                <Text style={{color:"#ff69b4", fontSize:24}}> Reward</Text>
                            </TouchableOpacity>    
                        </View>                           
                    </View>
                </View>

                <View style={styles.view4} >
                    <View style={styles.viewP} >  
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={()=>this.props.navigation.navigate('SavingPlanScreen')}>
                                    <Image style={{width:80, height:80}}
                                    source={require('../assets/savingPlanIcon.png')}></Image>
                                    
                                    <Text style={{color:"#ff4500", fontSize:24}}> Saving Plan</Text> 
                            </TouchableOpacity>    
                        </View>                   
                    </View>
                </View>

                </View>
                <View><Text> </Text></View>

                </Content>
            <View style={{ alignSelf : 'center', justifyContent: 'center'}}>
                    <Text style={{color:"#ff4500", fontSize:24}}> Hi {this.state.email}!</Text> 
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'flex-start'}} onPress = {this.signOutUser}>

                            <Text style={{color:"#ff4500", fontSize:24}}> Logout</Text> 
                            </TouchableOpacity>    
            </View>
                

            
          
         
          </Container>

        );
    }
}
export default ProductScreen;

const styles = StyleSheet.create({

    container: {
        flex:1,
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

