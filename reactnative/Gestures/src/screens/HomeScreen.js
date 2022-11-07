import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button} from 'react-native';
import { HomeIcon } from '../assets/icons/icons';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to profile screen"
        onPress={() => navigation.navigate('Profile')}
      />
      <HomeIcon/>
    </View>
  );
};

export default HomeScreen;
