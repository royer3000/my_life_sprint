import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';
import * as firebase from 'firebase';

class ProductScreen extends React.Component {

    state = {
        email: "",
        displayName: ""
    }
    componentDidMount(){
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut;
    }

    render(){
        return(
            <Container style={styles.container}>
            <Header style={styles.containerDos}>
                
                <Left>
                    <Icon style={{color: 'white', width:50, height:40}} name= "ios-menu" onPress={()=>this.props.navigation.openDrawer()} />

                   

                </Left>
                <Body >
                    <Title style={{color: 'white', fontSize:24}}>Products</Title>
                    
                </Body>
                
                
                <Right/>
            </Header>
            
            <Content>

                <View style={styles.view1} >
                    <View style={styles.viewP} > 
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} onPress={this._onPressButton}>
                                <Image style={{width:80, height:80}}
                                source={require('../assets/funeraIcon.png')}
                                />
                                <Text style={{color:'deepskyblue', fontSize:24}}>Funeral Cover</Text>
                            </TouchableOpacity>   
                        </View>                
                    </View>
                </View>


                <View style={styles.view2} >
                    <View style={styles.viewP} >
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Image style={{width:70, height:65}}
                                source={require('../assets/legalCoverIcon.png')}
                                />
                                <Text style={{color:'lawngreen', fontSize:24}}>  Legal Cover</Text> 
                            </TouchableOpacity>    
                        </View>                                
                    </View>
                </View>

                <View style={styles.view3} >
                    <View style={styles.viewP} >
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Image style={{width:80, height:80}}
                                source={require('../assets/rewardIcon.png')}
                                />
                                <Text style={{color:'hotpink', fontSize:24}}> Reward</Text>
                            </TouchableOpacity>    
                        </View>                           
                    </View>
                </View>

                <View style={styles.view4} >
                    <View style={styles.viewP} >  
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <Image style={{width:80, height:80}}
                                    source={require('../assets/savingPlanIcon.png')}
                                    />
                                    <Text style={{color:'orangered', fontSize:24}}> Saving Plan</Text> 
                            </TouchableOpacity>    
                        </View>                   
                    </View>
                </View>


                
            </Content>

            
          </Container>

        );
    }
}
export default ProductScreen;

const styles = StyleSheet.create({

    container: {
        flexWrap:'wrap',
        borderBottomColor:'#212533',

        backgroundColor: '#212533'
        

    },
    containerDos: {
        flexWrap:'wrap',
        borderBottomColor:'#1D212D',

        backgroundColor: '#1D212D'
        

    },
    viewP:{
        
        alignItems:'flex-start',
        justifyContent:'center',
        width:380,
        height:93,
        backgroundColor:'#2C3144',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
      },
      view1:{ 
        alignSelf: 'center',
        marginTop: 15,
        margin: 5,   
        width:380,
        height:100,
        backgroundColor:'#00A2Ee',
        borderRadius:20,    
        alignItems:'center'
      },
      view2:{ 
        alignSelf: 'center',
        margin: 5,      
        width:380,
        height:100,
        backgroundColor:'#2CB023',
        borderRadius:20,    
        alignItems:'center'
      },
      view3:{ 
        alignSelf: 'center',
        margin: 5,      
        width:380,
        height:100,
        backgroundColor:'#C134B6',
        borderRadius:20,    
        alignItems:'center'
      },
      view4:{ 
        alignSelf: 'center',
        margin: 5,      
        width:380,
        height:100,
        backgroundColor:'#D71E1E',
        borderRadius:20,    
        alignItems:'center'
      },

})

