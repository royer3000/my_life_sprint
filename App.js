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
import SignUpScreen from './screens/RegisterScreens/SignUpScreen';
import PersonaleInformation from './screens/RegisterScreens/PersonalInformation';
import PreviousJobInformation from './screens/RegisterScreens/PreviousJobInformation';
import EmergencyContactInformation from './screens/RegisterScreens/EmergencyContactInformation';
import BanckDetails from './screens/RegisterScreens/BanckDetails';
import ProductScreen from './screens/ProductScreen';
import { firebaseApp} from './config/config.js';
import LoadingScreen from './screens/LoadingScreen';
import SideBar from './components/SideBar.js'
import { Dimensions } from 'react-native';
import FuneralCoverScreen from './screens/ProductComponets/FuneralCoverScreen.js';
import LegalCoverScreen from './screens/ProductComponets/LegalCoverScreen.js';
import RewardScreen from './screens/ProductComponets/RewardScreen.js';
import SavingPlanScreen from './screens/ProductComponets/SavingPlanScreen.js';





const ProductStackNavigator = createStackNavigator({

    ProductScreen:{
        screen: ProductScreen,
        navigationOptions:{
            header:null
        }
    },

    FuneralCoverScreen:{
        screen: FuneralCoverScreen,
        navigationOptions:{
            title:"Funeral Cover",
            headerStyle: {
                backgroundColor: '#1D212D',
              },
            
            
        }
    },
    LegalCoverScreen:{
        screen: LegalCoverScreen,
        navigationOptions:{
            title:"Legal Cover",
            headerStyle: {
                backgroundColor: '#1D212D',
              },
            
        }
    },
    RewardScreen:{
        screen: RewardScreen,
        navigationOptions:{
            title:"Reward",
            headerStyle: {
                backgroundColor: '#1D212D',
              },
            
        }
    },
    SavingPlanScreen:{
        screen: SavingPlanScreen,
        navigationOptions:{
            title:"Saving Plan",
            headerStyle: {
                backgroundColor: '#1D212D',
              },
            
        }
    },



});


const ProductDrawerNavigator = createDrawerNavigator({
    ProductStackNavigator: {
        screen: ProductStackNavigator,
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

},{
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar:true,

    contentOptions: {

        activeBackgroundColor:'#1D212D',
        activeTintColor:'white',
        inactiveTintColor: 'white',
        labelStyle:{ 
            marginLeft:5,
            fontWeight: "400",
            fontSize: 22,
            
        },
        itemStyle: { 
            
            borderBottomWidth: 0.5,       
            borderBottomColor: 'aquamarine' 
        }
    },



});

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
    PersonaleInformation:{
        screen: PersonaleInformation,
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#1D212D',
              },
        }
    },
    PreviousJobInformation:{
        screen: PreviousJobInformation,
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#1D212D',
              },
        }
    },
    EmergencyContactInformation:{
        screen: EmergencyContactInformation,
        navigationOptions:{
            headerStyle: {
                backgroundColor: '#1D212D',
              },
        }
    },
    BanckDetails:{
        screen: BanckDetails,
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
);


