import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigatior } from 'react-navigation';

import Welcome from '../screens/Welcome';
//import Login from '../screens/Login';
//import Explore from '../screens/Explore';
//import Brownse from '../screens/Browse';
//import Product from '../screens/Product';
//import Settings from '../screens/Settings';

import { theme } from '../constans';

const screens = createStackNavigatior({  
    Welcome,
    //Login,
    //Explore,
    //Brownse,
    //Product,
    // sSettings, 

}, {
    defaultNavigationOptions: {
      headerStyke: {},
      headerBackImagen: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},

    }
})

export default createAppContainer(screens);