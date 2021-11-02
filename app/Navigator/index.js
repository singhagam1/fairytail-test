import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationService from "../Navigator/NavigationService";

//Screens
import Home from "../Screens";
import Profile from "../Screens/Profile";
import Settings from "../Screens/Settings";

const RootStack = createStackNavigator();

//Root Navigator
function AppNavigator() {
  return (
    <NavigationContainer
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
