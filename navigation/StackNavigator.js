import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigator";
import PostScreen from "../assets/PostScreen";

const stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName = "Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Tela Inicial" component={TabNavigator}/>
            <Stack.Screen name="Tela de Post" component={PostScreen}/>
        </Stack.Navigator>
    );
};

export default StackNavigator;