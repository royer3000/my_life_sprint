import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import { Ionicons } from "@expo/vector-icons";


export default Sidebar = props => (
    
    <View style={styles.container}>
        
        
            <Image style={{width:300, height:230,marginEnd:-5}}source={require('../assets/MenuIma.png')}
            /> 
        <ScrollView>
        <View >
        
        </View>
        <DrawerNavigatorItems {...props}/>
        
        </ScrollView>
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