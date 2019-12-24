import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';


export default class WorkInProgress extends React.Component{ 
    render(){
    return(
      <Container style={styles.container}>
      <Header style={styles.container}>
          
          <Left  style={{flexDirection: 'row', justifyContent: 'flex-start',marginTop:35, marginLeft:-8}}>

              <TouchableOpacity  onPress={()=>this.props.navigation.openDrawer()}><Image style={{width:30, height: 30}} source={require('./../../assets/drawer.png')} /></TouchableOpacity>
              
              <Body>
             

              </Body>

          </Left>
          <Right />



      </Header>

      <Content>


      </Content>
  </Container>
        );
    } 
}

const styles = StyleSheet.create({

    container: {
        flexWrap:'wrap',
        borderBottomColor:"#212533",
        marginBottom:5,

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

