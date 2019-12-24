import React from 'react';
import {View, Text, StyleSheet, Image, TextInput,TouchableOpacity,ImageBackground,ScrollView,CheckBox,TouchableHighlight, Modal} from "react-native";
import { Icon, Button, Container, Header, Content, Left, Body, Title,Right, Card, CardItem, Thumbnail, Item,Input, Label,Form} from 'native-base';
import * as firebase from 'firebase';
import Signature from 'react-native-signature-canvas';



export default class DebitOrderForm extends React.Component{ 

    state = {

        email: "",
        displayName: "",
        
    };


    constructor(props) {
        super(props);
        this.state = { signature: null };
        this.state ={
            showMe: false
        }

      }
    
      handleSignature = signature => {
        this.setState({ signature });
      };
    
      handleEmpty = () => {
        console.log('Empty');
      }
    

    componentDidMount(){
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };



    render() {
    const style = `.m-signature-pad--footer
    .button {
    background-color: #1a1d2a;
    color: #FFF;
    }`;

    return(
        
            
            
            <Container style={styles.container}>
            <Content>

            <Modal transparent={true} visible={this.state.showMe}>
                        <View style={{display:"flex" , flex:1 ,justifyContent:'center', alignItems:'center', with:300, height:300}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({ showMe: false})
                        }}>
                                            <Image
                                                style={{width:275, height: 300}}
                                                source={require('../../../assets/success.png')}
                                            />
                                        </TouchableOpacity>
                            </View>

            </Modal>


                <View style={{alignItems:'center'}}>

                    
                            <View style={{paddingTop:5 }} >
                                
                                <View style={{width: 340, height: 570, backgroundColor:'#292d3a' ,alignSelf:'flex-end',borderTopRightRadius:0,borderBottomRightRadius:0, paddingTop:1, paddingHorizontal:5,}}>
                                    <View style={{alignItems:'flex-start'}}>
                                    <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={1}>
                                        <View >
                                            <Text style={{color:'white', fontSize:13}}> Name</Text>
                                        </View>

                                        <View style={{paddingVertical:5}}>
                                            <TextInput
                                                style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                                placeholder ="name"
                                                returnKeyType ="next"
                                                onChangeText={(name) => this.setState({name})}
                                                value = {this.state.name}
                                                keyboardType = "email-address"
                                                autoCapitalize ="none"
                                                autoCorrect = {false}             
                                                placeholderTextColor = "#FFFFFF"
                                            />
                                        </View>

                                        <View >
                                            <Text style={{color:'white', fontSize:13}}> Bank</Text>
                                        </View>

                                        <View style={{paddingVertical:5}}>
                                            <TextInput
                                                style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                                placeholder ="First National Bank"
                                                returnKeyType ="next"
                                                onChangeText={(Bank) => this.setState({Bank})}
                                                value = {this.state.Bank}
                                                keyboardType = "email-address"
                                                autoCapitalize ="none"
                                                autoCorrect = {false}             
                                                placeholderTextColor = "#FFFFFF"
                                            />
                                        </View>

                                        <View >
                                            <Text style={{color:'white', fontSize:13}}> Bank account number</Text>
                                        </View>

                                        <View style={{paddingVertical:5}}>
                                            <TextInput
                                                style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                                placeholder ="00 000 000000"
                                                returnKeyType ="next"
                                                onChangeText={(acoBank) => this.setState({acoBank})}
                                                value = {this.state.acoBank}
                                                keyboardType = "email-address"
                                                autoCapitalize ="none"
                                                autoCorrect = {false}             
                                                placeholderTextColor = "#FFFFFF"
                                            />
                                        </View>

                                        <View >
                                            <Text style={{color:'white', fontSize:13}}> Physical Address</Text>
                                        </View>

                                        <View style={{paddingVertical:5}}>
                                            <TextInput
                                                style={{ width:325, height: 35, borderColor: "#ACACAC", borderWidth: 0.23,backgroundColor: "#1a1d2a",paddingHorizontal:13, color:'white', fontSize:13 }}
                                                placeholder ="Rick Turner Rd"
                                                returnKeyType ="next"
                                                onChangeText={(pAddress) => this.setState({pAddress})}
                                                value = {this.state.pAddress}
                                                keyboardType = "email-address"
                                                autoCapitalize ="none"
                                                autoCorrect = {false}             
                                                placeholderTextColor = "#FFFFFF"
                                            />
                                        </View>


                                        <View style={{ flexDirection: 'row' }}>
                                            <CheckBox
                                            value={this.state.checked}
                                            onValueChange={() => this.setState({ checked: !this.state.checked })}
                                            />
                                            <Text style={{marginTop: 5,color:'gray', fontSize:13}}> Click if you agree to the T/C's</Text>
                                        </View>



                                            <View>
                                                <Text style={{color:'white', fontSize:13}}> </Text>
                                            </View>
                                            


                                        <View style={{ width:325, height: 160, borderColor: "#ACACAC",backgroundColor: "#1a1d2a",paddingHorizontal:13,paddingVertical:10}}>
                                        
                                            <Signature
                                            onOK={this.handleSignature}
                                            onEmpty={this.handleEmpty}
                                            descriptionText="Signature"
                                            clearText="Clear"
                                            confirmText="Save"
                                            webStyle={style}
                                            />
                                        
                                        </View>

                                        <View><Text> </Text></View>




                                    <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical:10}}>
                                        <TouchableOpacity onPress={()=>{
                            this.setState({ showMe: true})
                        }}>
                                            <Image
                                                style={{width:275, height: 41}}
                                                source={require('../../../assets/sumitbottton.png')}
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
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10
  }

})
