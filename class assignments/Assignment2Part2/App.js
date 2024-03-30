import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import ProductScreen from './src/Screens/ProductScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen namew="HomeScreen " component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}react-native-screens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
