import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import People from './screens/people';
import Products from './screens/products';
import Register from './screens/register';
import Details from './screens/details';
import { createAppContainer, createStackNavigator } from 'react-navigation';



export default class App extends React.Component {
    render() {
        return (

            <AppContainer />


        );
    }
}
const RootStack = createStackNavigator(
    {
        Products: Products,
        Register: Register,
        People: People,
        Details: Details,


    },
    {
        initialRouteName: 'Products',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f3e5f5'
            },
            headerTintColor: 'grey',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            },
        },
    },

)
const AppContainer = createAppContainer(RootStack);



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
    },
    text: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 40,
        backgroundColor: 'purple'
    }
})