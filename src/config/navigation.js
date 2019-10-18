/*
1) Stack Navigation
2) Tab Navigation
3) Drawer Navigation
4) Switch Navigation
*/
//this.props.navigation.navigate()

import { createDrawerNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import * as Routes from '../screens/index';

const AuthNavigator = createStackNavigator({
    Login: {
        screen: Routes.Login
    }
});

const TabNavigator = createMaterialTopTabNavigator({
    Ads: {
        screen: Routes.Ads
    },
    'Post Ads': {
        screen: Routes.PostAd
    }
})

const AppNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Profile: {
        screen: Routes.Profile
    }
}, {});

const MainNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthNavigator
    },
    App: {
        screen: AppNavigator
    }
});

export default createAppContainer(MainNavigator);
