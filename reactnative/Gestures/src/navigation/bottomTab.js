import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {GullIcon, HomeIcon, ProfileIcon, TeddyBear} from '../assets/icons/icons';
import DraggableGull from '../screens/DraggableGull';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import SingleTapGull from '../screens/SingleTapGull';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <HomeIcon />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <ProfileIcon />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Gull"
        component={DraggableGull}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <GullIcon />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Tap that gull"
        component={SingleTapGull}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <TeddyBear />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
