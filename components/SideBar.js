import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import { Ionicons } from "@expo/vector-icons";


export default Sidebar = props => (
    

    
        <View style={styles.container}>
                    <Text> </Text>
                    <Text> </Text>
        <View style={{flex:0.6}} >
            <Image style={{width:300, height:330}}
                                    source={require('../assets/MenuIma.png')}
            />


            

        </View>
        <DrawerNavigatorItems {...props}/>
        </View>
    
);

const styles = StyleSheet.create({

    container: {
        flex:1,
        marginTop: 0,

        backgroundColor: '#212533'
        

    },

    containerDos:{
        borderBottomColor:'#1D212D',

        backgroundColor: '#1D212D'
    }


})