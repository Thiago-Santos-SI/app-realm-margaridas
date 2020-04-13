import Page1 from './Page1';
import Page2 from './Page2';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

import React from 'react'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Register" component={RegisterUser} />
                <Stack.Screen name="Update" component={UpdateUser} />
                <Stack.Screen name="ViewAll" component={ViewAllUser} />
                <Stack.Screen name="View" component={ViewUser} />
                <Stack.Screen name="Delete" component={DeleteUser} />



                <Stack.Screen name="Home" component={Page1} />
                <Stack.Screen name="About" component={Page2} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}


