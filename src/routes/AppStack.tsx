import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
