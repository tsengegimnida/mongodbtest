import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, View, Text, Image, Animated} from 'react-native';

import {PanGestureHandler} from 'react-native-gesture-handler';

const DraggableGull = () => {
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );
  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View
          style={{
            transform: [{translateX: translateX}, {translateY: translateY}],
          }}>
          <Image
            style={styles.gull}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gull: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
});

export default DraggableGull;
