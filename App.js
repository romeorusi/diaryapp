import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import LogScreen from './Screens/LogScreen';
import Diary from './components/Diary';
import { createTable } from './utils/db';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    createTable();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
        <Stack.Screen name="Diary" component={Diary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
