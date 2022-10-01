import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/Auth/LoginScreen";
import SplashScreen from "../Screens/SplashScreen";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import SignupScreen from "../Screens/Auth/SignupScreen";
import AllmealsScreen from "../Screens/Home/AllmealsScreen";
import MealsDetailScreen from "../Screens/Home/MealsDetailScreen";

const stack = createStackNavigator();
const Navigation = () => {
    return <NavigationContainer>
        <stack.Navigator  /* initialRouteName="MealsDetailScreen" */ > 
        <stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen}/>
        <stack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen}/>  
        <stack.Screen options={{headerShown:false}} name="SignupScreen" component={SignupScreen}/>  
        <stack.Screen options={{headerShown:false}} name="CategoryScreen" component={CategoryScreen}/>    
        <stack.Screen options={{headerShown:false}} name="AllmealsScreen" component={AllmealsScreen}/>  
        <stack.Screen options={{headerShown:false}} name="MealsDetailScreen" component={MealsDetailScreen}/>  


        </stack.Navigator>
    </NavigationContainer>;
};

export default Navigation;