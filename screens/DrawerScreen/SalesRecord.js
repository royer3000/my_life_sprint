import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity, Picker, ScrollView} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail} from 'native-base';


export default class SalesRecord extends React.Component{ 

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
                      <Text style={{fontSize:18, color: 'white', fontWeight:'200' }}> Sales Record </Text> 

   </View>
     

      <Right/>     





</Header>
</View>


<Content>
            <View style={{alignItems:'center'}}>
            <View style={{paddingTop:5 }} >
    
            <View style={{width: 355, height: 500, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1,}}>
                <View style={{alignItems:'center', paddingHorizontal:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <View><Text style={{fontSize:20, color:'white',fontWeight:'200',paddingHorizontal:5,paddingVertical:5}}>Steban V.Bruno</Text></View>


                <View  style={{paddingVertical:5}} >
                        
                    <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Beginning Report Date</Text>
                        
                </View>                   


                                      <View style={{ borderWidth:1, borderColor:'white', backgroundColor:'#1a1d2a' }}>
                                          <Picker style={{width:'100%', height:35, color:'white', fontSize:13  }} selectedValue={this.state.PickerValue}
                                          onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
                                            <Picker.Item label ='00/00/00' value='fecha'/>
                                            <Picker.Item label ='0/00/00' value='fecha'/>
                                          </Picker>
                                      </View>


                                      <View  style={{paddingVertical:5}} >
                        
                        <Text style={{color:'white', fontSize:13,paddingHorizontal:5,}}> Final Report Date</Text>
                            
                    </View>                   
    
    
                                          <View style={{ borderWidth:1, borderColor:'white', backgroundColor:'#1a1d2a' }}>
                                              <Picker style={{width:'100%', height:35, color:'white', fontSize:13  }} selectedValue={this.state.PickerValue}
                                              onValueChange={(itemValue, itemIndex) => this.setState({PickerValue:itemValue})}>
                                                <Picker.Item label ='00/00/00' value='fecha'/>
                                                <Picker.Item label ='0/00/00' value='fecha'/>
                                              </Picker>
                                          </View>
                
                <View><Text> </Text></View>


                <View style={{margin:20, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.errorMessage && <Text style={{color:"#FFFFFF", fontSize: 20}}>{this.state.errorMessage}</Text>}
                </View>

                <View><Text> </Text></View>

                <View><Text> </Text></View>

                <View><Text> </Text></View>

                <View><Text> </Text></View>
                <View><Text> </Text></View>
                <View><Text> </Text></View>
                <View><Text> </Text></View>

                <View><Text> </Text></View>
                <View><Text> </Text></View>
                <View><Text> </Text></View>


                <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical:10}}>
                                        <TouchableOpacity onPress={this.handleLogin}>
                                            <Image
                                                style={{width:275, height: 41}}
                                                source={require('../../assets/SalesBottom.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
            
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

