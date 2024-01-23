import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InfoApp } from "../screens";
import { Colors } from "../constants/color";


const Stack = createNativeStackNavigator();

const InfoNavigation = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Info"
            screenOptions={{
                headerTitleAlign: "center",
                headerStyle:{
                    backgroundColor: Colors.primary
                }
            }}
        >
            <Stack.Screen 
                name="Info" 
                component={InfoApp}
                options={{
                    title: "Uso de Selector de Imagen"
                }}
            />
        </Stack.Navigator>
    )
}

export default InfoNavigation;