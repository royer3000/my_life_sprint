import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from './screens/AppSwitchNavigator/LoginScreen';
import WorkInProgress from './screens/DrawerScreen/WorkInProgress';
import PotencialEarning from './screens/DrawerScreen/PotencialEarning';
import SalesRecord from './screens/DrawerScreen/SalesRecord';
import MessagesMyLife from './screens/DrawerScreen/MessagesMyLife';
import LeaderBoard from './screens/DrawerScreen/LeaderBoard';
import SettingMyLife from './screens/DrawerScreen/SettingMyLife';
import TutorialMyLife from './screens/DrawerScreen/TutorialMyLife';
import SignUpScreen from './screens/SignUpScreen';
import ProductScreen from './screens/ProductScreen';
import { firebaseApp} from './config/config.js';
import LoadingScreen from './screens/LoadingScreen';








const ProductDrawerNavigator = createDrawerNavigator({
    ProductScreen: {
        screen: ProductScreen,
        navigationOptions:{
            title:"Home",
        }
    },

    WorkInProgress: {
        screen: WorkInProgress,
        navigationOptions:{
            title:"Wor in Progress",
        }
    },

    PotencialEarning: {
        screen: PotencialEarning,
        navigationOptions:{
            title:"Potencial Earning",
        }
    },
    SalesRecord: {
        screen: SalesRecord,
        navigationOptions:{
            title:"Sales Record",
        }
    },
    MessagesMyLife: {
        screen: MessagesMyLife,
        navigationOptions:{
            title:"Messages",
        }
    },
    LeaderBoard: {
        screen: LeaderBoard,
        navigationOptions:{
            title:"Leader Board",
        }
    },
    SettingMyLife: {
        screen: SettingMyLife,
        navigationOptions:{
            title:"Setting",
        }
    },
    TutorialMyLife: {
        screen: TutorialMyLife,
        navigationOptions:{
            title:"Tutorials",
        }
    }

})

const AppStack = createStackNavigator({

    Home:{
        screen: ProductDrawerNavigator,
        navigationOptions:{
            header:null
        }
    }, 
})

const AuthStack = createStackNavigator({

    Login:{
        screen: LoginScreen,
        navigationOptions:{
            header:null
        }
    }, 
    Register:{
        screen: SignUpScreen,
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#1D212D',
              },
        }
    }, 

})


export default createAppContainer(
    createSwitchNavigator({

        Loading: LoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: "Loading"
    }
    
    )
)


