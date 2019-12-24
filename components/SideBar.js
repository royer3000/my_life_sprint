import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import { Ionicons } from "@expo/vector-icons";


export default Sidebar = props => (


    <View style = { styles.container } >
    <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={1}>

    <Image  style= { {width: '100%',
        height: 200,}} source={require('../assets/Drawer1.png')} />

    



    <ImageBackground  style= { styles.backgroundImage } source={require('../assets/Drawer2.png')} >

            <View styles={{}}>

                <DrawerNavigatorItems {...props}/>



            </View>
            <View><Text> </Text></View>
            <View><Text> </Text></View>
            <View><Text> </Text></View>
            <View><Text> </Text></View>
            <View><Text> </Text></View>
            <View><Text> </Text></View>

    </ImageBackground>
                

           

 
      
      </ScrollView>
    </View>
    

    
);

const styles = StyleSheet.create({

    container: {
        flex:1,      
        backgroundColor: '#212533'
        

    },

    containerDos:{
        borderBottomColor:'#1D212D',

        backgroundColor: '#1D212D'
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',


    },


})