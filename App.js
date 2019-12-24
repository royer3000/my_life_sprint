import React from 'react'
import {Button, Image, TouchableOpacity,View,Text} from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
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
import FuneralCoverScreen from './screens/ProductComponets/FuneralCoverOptions/FuneralCoverScreen.js';
import FuneralCoverForm from './screens/ProductComponets/FuneralCoverOptions/FuneralCoverForm.js';
import LegalCoverScreen from './screens/ProductComponets/LegalCoverOptions/LegalCoverScreen.js';
import RewardScreen from './screens/ProductComponets/RewardOptions/RewardScreen.js';
import SavingPlanScreen from './screens/ProductComponets/SavingPlanOptions/SavingPlanScreen.js';
import DebitOrderFrom from './screens/ProductComponets/LegalCoverOptions/DebitOrderFrom.js';
import MyLifeForm from './screens/ProductComponets/LegalCoverOptions/MyLifeForm.js';





const FuneralOrderFromNavigator = createStackNavigator({
    LegalCoverScreen: {
        screen: LegalCoverScreen,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Quote Results</Text></View></View></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#1D212D",
              },
              
          
        }),
      },

      ClientelleForm: {
        screen: MyLifeForm,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Clientelle Form</Text></View></View></TouchableOpacity>,
            
            headerStyle: {
                backgroundColor: "#1D212D",
              },
          
        }),
      }, 


      LibertyForm: {
        screen: MyLifeForm,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Liberty Form</Text></View></View></TouchableOpacity>,
            
            headerStyle: {
                backgroundColor: "#1D212D",
              },
          
        }),
      },  

      MyLifeForm: {
        screen: MyLifeForm,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> My Life Form</Text></View></View></TouchableOpacity>,
            
            headerStyle: {
                backgroundColor: "#1D212D",
              },
          
        }),
      },  

    DebitOrderFrom: {
        screen: DebitOrderFrom,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Debit Order Form</Text></View></View></TouchableOpacity>,
            
            headerStyle: {
                backgroundColor: "#1D212D",
              },
          
        }),
      },



});

const FuneralStackScreen = createStackNavigator({

    FuneralCoverScreen: {
        screen: FuneralCoverScreen,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Funeral Cover</Text></View></View></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#1D212D",
              },
              
          
        }),
      },

      FuneralOrderFromNavigator: {
        screen: FuneralOrderFromNavigator,
        navigationOptions: ({navigation}) => ({
            header:null
              
          
        }),
      },

});

const LegalStackScreen = createStackNavigator({


      LegalCoverScreen: {
        screen: FuneralCoverScreen,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Legal Cover</Text></View></View></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#1D212D",
              },
              
          
        }),
      },


});

const RewardStackScreen = createStackNavigator({

    FuneralCoverScreen: {
        screen: FuneralCoverScreen,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}>Reward Cover</Text></View></View></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#1D212D",
              },
              
          
        }),
      },

      

});

const SavinStackScreen = createStackNavigator({

    FuneralCoverScreen: {
        screen: FuneralCoverScreen,
        navigationOptions: ({navigation}) => ({

            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Saving Cover</Text></View></View></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#1D212D",
              },
              
          
        }),
      },

});


const FuneralTabs = createBottomTabNavigator({
    FuneralCoverScreen: {
      screen: FuneralStackScreen,
      navigationOptions: {
        tabBarLabel: '',
        tabBarVisible: false
        
      },
    },

  },{
    tabBarOptions : {
      style: {
        backgroundColor: '#1D212D',
        gesturesEnabled: false,
        borderTopWidth: 0
      }
    }
  
  });

  const LegalTabs = createBottomTabNavigator ({
    LegalStackScreen: {
      screen: LegalStackScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarVisible: false
        
        
      },
    },
    
  },{
    tabBarOptions:{
        style:{
            backgroundColor:'#1D212D',
            gesturesEnabled: false,
            borderTopWidth: 0
            
        }
    }
});

  const RewardTabs = createBottomTabNavigator({
    RewardStackScreen: {
      screen: RewardStackScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarVisible: false
        
        
      },
    },
    
  },{
    tabBarOptions:{
        style:{
            backgroundColor:'#1D212D',
            gesturesEnabled: false,
            borderTopWidth: 0
            
        }
    }
});

const SavingTabs = createBottomTabNavigator({
    SavinStackScreen: {
      screen: SavinStackScreen,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarVisible: false
        
        
      },
    },
    
  },{
    tabBarOptions:{
        style:{
            backgroundColor:'#1D212D',
            gesturesEnabled: false,
            borderTopWidth: 0
            
        }
    }
});


const ProductStackNavigator = createStackNavigator({

    ProductScreen:{
        screen:  ProductScreen,
        navigationOptions:({navigation}) => ({
            headerTintColor: '#fff',
            headerLeft: <TouchableOpacity  onPress={() => navigation.openDrawer()}><View style={{paddingHorizontal:11, flexDirection:'row'}}><Image style={{width:30, height: 30}} source={require('./assets/drawer.png')} /><View><Text style={{fontSize:18, color: 'white'}}> Products</Text></View></View></TouchableOpacity>,
            headerStyle: {
                backgroundColor: "#1D212D",
              },
              
              
        }) 
    },

    FuneralCoverScreen:{
        screen: FuneralTabs,
        navigationOptions:{
            header:null,
        }
    },
    LegalCoverScreen:{
        screen: LegalTabs,
        navigationOptions:{
            header:null,
        }
    },
    RewardScreen:{
        screen: RewardTabs,
        navigationOptions:{
            header:null,
        }
    },
    SavingPlanScreen:{
        screen: SavingTabs,
        navigationOptions:{
            header:null,
        }
    },


});


const ProductDrawerNavigator = createDrawerNavigator({
    WorkInProgress: {
        screen: ProductStackNavigator,
        navigationOptions:{
            title:"Work in Progress",
        }
    },

    PotencialEarning: {
        screen: PotencialEarning,
        navigationOptions:{
            title:"Potential Earnings",
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
            title:"Leaderboard",
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

    drawerWidth: Dimensions.get('window').width * 0.75,
    hideStatusBar:true,

    contentOptions: {

        activeBackgroundColor:"#1D212D",
        activeTintColor:"#FFFFFF",
        inactiveTintColor: "#FFFFFF",
        labelStyle:{ 


            fontWeight: "100",
            fontSize: 18,

            backgroundColor: null
            
        },
        itemStyle: { 
            

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
            header:null,

        }
    },
    PersonaleInformation:{
        screen: PersonaleInformation,
        navigationOptions:({navigation}) => ({
            headerTintColor: '#fff',
            headerLeft: <View style={{paddingHorizontal:25}}><Text style={{fontSize:18, color: 'white'}}> Sales agent registration </Text></View>,
            headerStyle: {
                backgroundColor: "#1D212D",
                
              },

              
        }) 
    },
    PreviousJobInformation:{
        screen: PreviousJobInformation,
        navigationOptions:({navigation}) => ({
            headerTintColor: '#fff',
            headerLeft: <View style={{paddingHorizontal:25}}><Text style={{fontSize:18, color: 'white'}}>Sales agent registration </Text></View>,
            headerStyle: {
                backgroundColor: "#1D212D",
                
              },

              
        }) 
    },
    EmergencyContactInformation:{
        screen: EmergencyContactInformation,
        navigationOptions:({navigation}) => ({
            headerTintColor: '#fff',
            headerLeft: <View style={{paddingHorizontal:25}}><Text style={{fontSize:18, color: 'white'}}>Sales agent registration </Text></View>,
            headerStyle: {
                backgroundColor: "#1D212D",
                
              },

              
        }) 
    },
    BanckDetails:{
        screen: BanckDetails,
        navigationOptions:({navigation}) => ({
            headerTintColor: '#fff',
            headerLeft: <View style={{paddingHorizontal:25}}><Text style={{fontSize:18, color: 'white'}}>Sales agent registration </Text></View>,
            headerStyle: {
                backgroundColor: "#1D212D",
                
              },

              
        }) 
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


