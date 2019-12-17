import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';


export default class LegalCoverScreen extends React.Component{ 
    render(){
    return(
      <Container style={styles.container}>
      <Content>

      <View style={styles.container}>
      

          <View style={styles.viewP} >
              <View style={styles.view1} >
                  <View >
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>this.props.navigation.navigate('LegalCoverScreen')}>
                            <View><Text> </Text></View>
                          <Text style={{color:"#7cfc00", fontSize:24}}> Clientelle</Text>
                          <View><Text>  </Text></View> 
                          <Image style={{width:60, height:60}}
                          source={require('../../../assets/fun1.png')}
                          />

                      </TouchableOpacity>    
                  </View>                                
              </View>
          </View>

          <View style={styles.viewP} >
              <View style={styles.view2} >
                  <View >
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>this.props.navigation.navigate('RewardScreen')}>
                          <View><Text> </Text></View>
                          <Text style={{color:"#ff69b4", fontSize:24}}> Liberty</Text>
                          <View><Text> </Text></View>
                          <Image style={{width:60, height:60}}
                          source={require('../../../assets/fun1.png')}
                          />

                      </TouchableOpacity>    
                  </View>                           
              </View>
          </View>

          <View style={styles.viewP} >
              <View style={styles.view3} >
                  <View >
                      <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>this.props.navigation.navigate('RewardScreen')}>
                            <View><Text style={{color:"#ff69b4", fontSize:24}}> My Life</Text></View>
                          
                            <View><Image style={{width:60, height:60, }}
                            source={require('../../../assets/fun3.png')}
                            /></View>
  

                      </TouchableOpacity>    
                  </View>                           
              </View>
          </View>

          
          </View>
          <View><Text> </Text></View>

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
