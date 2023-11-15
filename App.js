import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Location from './src/screens/Location';
import Login from './src/screens/Login';
import Reg from './src/screens/Reg';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Reg" component={Reg} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

