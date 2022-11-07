import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={[styles.yellow, styles.justify]}>
          <Text>H: 100</Text>
        </View>
        <View style={styles.fitInRow}>
          <View style={[styles.blue, styles.justify]}>
            <Text>Row - Flex: 1</Text>
          </View>
          <View style={[styles.fitInColumn]}>
            <View style={styles.gray}>
              <Text>Row = Flex: 3 {'\n'} H: 120</Text>
            </View>
            <View style={[styles.green, styles.justify]}>
              <Text>Col - Flex: 1</Text>
            </View>
            <View style={[styles.white, styles.justify]}>
              <Text>H: 150</Text>
            </View>
          </View>
        </View>
        <View style={[styles.red, styles.justify, styles.align]}>
          <Text>H:100</Text>
        </View>
        {/* <View style={styles.yellow}/> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
  },
  yellow: {
    height: 100,
    backgroundColor: 'yellow',
  },
  fitInColumn: {
    flex: 3,
    flexDirection: 'column',
  },
  blue: {
    flex: 1,
    backgroundColor: 'blue',
  },
  gray: {
    backgroundColor: 'gray',
    height: 120,
  },
  red: {
    backgroundColor: 'red',
    height: 100,
  },
  green: {
    backgroundColor: 'green',
    flex: 1,
  },
  white: {
    height: 150,
    backgroundColor: 'white',
  },
  fitInRow: {
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  justify: {
    justifyContent: 'center',
  },
  align: {
    alignItems: 'center',
  },
});

export default App;
