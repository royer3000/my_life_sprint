import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';



export default class SettingMyLife extends React.Component{ 
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
                            <Text style={{fontSize:18, color: 'white', fontWeight:'200' }}> Settings </Text> 

         </View>
           

            <Right/>     

      



  </Header>
  </View>

      <Content>

        <View style={{alignItems:'flex-start', marginLeft: 15}}>
          <View style={{alignContent:'flex-start', marginVertical:15}}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
            <View style={{ marginVertical:15}}>
              <Text style={{fontSize:15, color:'white'}}> Edit profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
            <View style={{ marginVertical:15}}>
              <Text style={{fontSize:15, color:'white'}}> Terms and conditions</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
            <View style={{ marginVertical:15}}>
              <Text style={{fontSize:15, color:'white'}}> Allow</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
            <View style={{ marginVertical:15}}>
              <Text style={{fontSize:15, color:'white'}}> Phone directory</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
            <View style={{ marginVertical:15}}>
              <Text style={{fontSize:15, color:'white'}}> Privacy policy</Text>
            </View>
          </TouchableOpacity>


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

