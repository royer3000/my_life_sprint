import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';


export default class MessagesMyLife extends React.Component{ 
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
                      <Text style={{fontSize:18, color: 'white', fontWeight:'200' }}> Inbox </Text> 

   </View>
     

      <Right/>     





</Header>
</View>



<Content>
            <View style={{alignItems:'center'}}>
            <View style={{paddingTop:5 }} >
    
            <View style={{width: 355, height: 600, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                <View style={{alignItems:'center', paddingHorizontal:5}}>
                <ScrollView showsVerticalScrollIndicator={false} >

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
                  <View style={{marginVertical:5, marginLeft:-5, borderWidth:1, borderBottomColor:'white',borderTopColor:'#292d3a', borderLeftColor:'#292d3a', borderRightColor:'#292d3a', width:350, height:80}}>
                      <View style={{flexDirection:'row', justifyContent:'space-around' }}>
                              <View>
                                  <Image source={require('../../assets/imgfun.jpg')} style={{width: 60, height: 60, borderRadius: 60/ 2}}/>
                              </View>
                              <View>
                                    <Text>{"  "} </Text>
                              </View>

                              <View style={{flexDirection:'column'}}>
                                  <View >
                                    <Text style={{color:'white', fontSize: 14}}>Dion Samuel</Text>
                                  </View>

                                  <View>
                                    <Text style={{color:'white', fontSize: 14}}>Lorem Ipsim, ipsum lorem</Text>
                                  </View>
                                
                              </View>
                              <View>
                                    <Text>{"         "}  </Text>
                              </View>

                              <View>
                                    <Text style={{color:'white', fontSize: 14}}>9:17</Text>
                              </View>
                      </View>
                  </View>

                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
                  <View style={{marginVertical:5, marginLeft:-5, borderWidth:1, borderBottomColor:'white',borderTopColor:'#292d3a', borderLeftColor:'#292d3a', borderRightColor:'#292d3a', width:350, height:80}}>
                      <View style={{flexDirection:'row', justifyContent:'space-around' }}>
                              <View>
                                  <Image source={require('../../assets/imgfun.jpg')} style={{width: 60, height: 60, borderRadius: 60/ 2}}/>
                              </View>
                              <View>
                                    <Text>{"  "} </Text>
                              </View>

                              <View style={{flexDirection:'column'}}>
                                  <View >
                                    <Text style={{color:'white', fontSize: 14}}>Dion Samuel</Text>
                                  </View>

                                  <View>
                                    <Text style={{color:'white', fontSize: 14}}>Lorem Ipsim, ipsum lorem</Text>
                                  </View>
                                
                              </View>
                              <View>
                                    <Text>{"         "}  </Text>
                              </View>

                              <View>
                                    <Text style={{color:'white', fontSize: 14}}>9:17</Text>
                              </View>
                      </View>
                  </View>

                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
                  <View style={{marginVertical:5, marginLeft:-5, borderWidth:1, borderBottomColor:'white',borderTopColor:'#292d3a', borderLeftColor:'#292d3a', borderRightColor:'#292d3a', width:350, height:80}}>
                      <View style={{flexDirection:'row', justifyContent:'space-around' }}>
                              <View>
                                  <Image source={require('../../assets/imgfun.jpg')} style={{width: 60, height: 60, borderRadius: 60/ 2}}/>
                              </View>
                              <View>
                                    <Text>{"  "} </Text>
                              </View>

                              <View style={{flexDirection:'column'}}>
                                  <View >
                                    <Text style={{color:'white', fontSize: 14}}>Dion Samuel</Text>
                                  </View>

                                  <View>
                                    <Text style={{color:'white', fontSize: 14}}>Lorem Ipsim, ipsum lorem</Text>
                                  </View>
                                
                              </View>
                              <View>
                                    <Text>{"         "}  </Text>
                              </View>

                              <View>
                                    <Text style={{color:'white', fontSize: 14}}>9:17</Text>
                              </View>
                      </View>
                  </View>

                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
                  <View style={{marginVertical:5, marginLeft:-5, borderWidth:1, borderBottomColor:'white',borderTopColor:'#292d3a', borderLeftColor:'#292d3a', borderRightColor:'#292d3a', width:350, height:80}}>
                      <View style={{flexDirection:'row', justifyContent:'space-around' }}>
                              <View>
                                  <Image source={require('../../assets/imgfun.jpg')} style={{width: 60, height: 60, borderRadius: 60/ 2}}/>
                              </View>
                              <View>
                                    <Text>{"  "} </Text>
                              </View>

                              <View style={{flexDirection:'column'}}>
                                  <View >
                                    <Text style={{color:'white', fontSize: 14}}>Dion Samuel</Text>
                                  </View>

                                  <View>
                                    <Text style={{color:'white', fontSize: 14}}>Lorem Ipsim, ipsum lorem</Text>
                                  </View>
                                
                              </View>
                              <View>
                                    <Text>{"         "}  </Text>
                              </View>

                              <View>
                                    <Text style={{color:'white', fontSize: 14}}>9:17</Text>
                              </View>
                      </View>
                  </View>

                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductScreen')}>
                  <View style={{marginVertical:5, marginLeft:-5, borderWidth:1, borderBottomColor:'white',borderTopColor:'#292d3a', borderLeftColor:'#292d3a', borderRightColor:'#292d3a', width:350, height:80}}>
                      <View style={{flexDirection:'row', justifyContent:'space-around' }}>
                              <View>
                                  <Image source={require('../../assets/imgfun.jpg')} style={{width: 60, height: 60, borderRadius: 60/ 2}}/>
                              </View>
                              <View>
                                    <Text>{"  "} </Text>
                              </View>

                              <View style={{flexDirection:'column'}}>
                                  <View >
                                    <Text style={{color:'white', fontSize: 14}}>Dion Samuel</Text>
                                  </View>

                                  <View>
                                    <Text style={{color:'white', fontSize: 14}}>Lorem Ipsim, ipsum lorem</Text>
                                  </View>
                                
                              </View>
                              <View>
                                    <Text>{"         "}  </Text>
                              </View>

                              <View>
                                    <Text style={{color:'white', fontSize: 14}}>9:17</Text>
                              </View>
                      </View>
                  </View>

                  </TouchableOpacity>
                    
            
                </ScrollView>


 

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

