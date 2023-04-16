import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Screen1 from '../Screen/Screen1';
import Screen2 from '../Screen/Screen2';
import Screen3 from '../Screen/Screen3';
const Stack = createNativeStackNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false , animation:"slide_from_right"}} initialRouteName='screen1'>
                <Stack.Screen name='screen1' component={Screen1} />
                <Stack.Screen name='screen2' component={Screen2} />
                <Stack.Screen name='screen3' component={Screen3} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation
