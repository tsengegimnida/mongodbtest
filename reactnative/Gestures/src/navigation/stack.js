import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DraggableGull from '../screens/DraggableGull';
import SingleTapGull from '../screens/SingleTapGull';

const Stack = createStackNavigator();
export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Gull" component={DraggableGull} />
      <Stack.Screen name="SingleGull" component={SingleTapGull} />
    </Stack.Navigator>
  );
};
