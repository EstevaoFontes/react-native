import React from 'react';
import AppList from './AppList';
import AppForm from './AppForm';
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function AppTab() {
    const TabBar = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <TabBar.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#32264D',
                    tabBarInactiveTintColor: '#C1BCCC',
                    tabBarActiveBackgroundColor: '#EBEBF5',
                    tabBarInactiveBackgroundColor: '#FAFAFC',
                    tabBarLabelStyle: {
                        fontSize: 13,
                        position: 'absolute',
                        top: 15,
                        bottom: 0
                    },
                    tabBarIconStyle: {
                        display: 'none',
                    }
                }}
            >
                <TabBar.Screen
                    options={{
                        title: 'Lista de compras',
                        tabBarLabel: 'Compras',
                    }}
                    name='AppList' component={AppList}
                />
                <TabBar.Screen
                    option={{
                        title: "Formulário",
                        tabBarLabel: 'Adicionar'
                    }}
                    name='AppForm' component={AppForm}
                />
            </TabBar.Navigator >
        </NavigationContainer>
    )
}