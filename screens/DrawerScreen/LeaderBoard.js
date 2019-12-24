import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, Picker, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';


export default class LeaderBoard extends React.Component{ 

  state = {
    name:"",
    email: this.props.navigation.getParam('userMail'),
    password: this.props.navigation.getParam('userPassword'),
    CellPhone: this.props.navigation.getParam('UserCellPhone'),
    errorMessage: null
   
};


    render(){
    return(
      <Container style={styles.container}>
        <View style={{}}>


<Header style={{ flexDirection:'column',alignContent:'flex-start', marginVertical:15, backgroundColor:"#212533",}}>
    

    <View>
      <Text> </Text>
    </View>
    <View style={{flexDirection:'row', }}>
              
                      <TouchableOpacity style={{}} onPress={()=>this.props.navigation.openDrawer()}>

                          <Image style={{width:30, height: 30}} source={require('./../../assets/drawer.png')} />

                      </TouchableOpacity>
                      <Text style={{fontSize:18, color: 'white', fontWeight:'200' }}> Leaderboard </Text> 

   </View>
     

      <Right/>     





</Header>
</View>


<Content>
            <View style={{alignItems:'center'}}>
            <View style={{paddingTop:5 }} >
    
            <View style={{width: 355, height: 500, backgroundColor:'#212533' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                <View style={{alignItems:'center', paddingHorizontal:5}}>

                  <View><Text style={{fontSize:15, color:'white'}}> Top </Text></View>

                  <Image style= { {width:300, height: 400} } source={require('../../assets/leardboard.png')} />

                  <Image style= { {width:300, height: 100} } source={require('../../assets/leaderbottom.png')} />

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
    flexWrap:'wrap',
    borderBottomColor:"#212533",

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

