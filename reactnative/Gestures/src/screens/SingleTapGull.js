import React, {useRef} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const SingleTapGull = () => {
  const doubleTapRef = useRef(null);
  const onSingleTapEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('CHI NEG UDAA DARLAA, JAAL MINI');
    }
  };
  const onDoubleTapEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('CHAMAIG HOYR UDAA DARSNIIG MEDNE!!!');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.gullah}>TAP THIS HANDSUM GULL</Text>

      <TapGestureHandler
        onHandlerStateChange={onSingleTapEvent}
        waitFor={doubleTapRef}>
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}>
          <Image
            style={styles.gull}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
            }}
          />
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gull: {
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
  },
  gullah: {
      fontSize: 26,
      fontWeight: '700',
      marginBottom: 50,
  },
});

export default SingleTapGull;
