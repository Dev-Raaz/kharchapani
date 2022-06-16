import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Onboarding from '../screens/Onboarding'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator 
            screenOptions={{headerShown: false}}
            initialRouteName='Onboarding'>
            <Stack.Screen 
                name='Onboarding' 
                component={Onboarding}
                />
        </Stack.Navigator>
    )
}

export default AuthStack