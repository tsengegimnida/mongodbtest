import React, {type PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MovieCard from './src/components/MovieCard';
import {Movies} from './src/api/MovieMock';

const App = () => {
  const movieItem = ({item}: {item: any}) => (
    <MovieCard
      movieTitle={item.title}
      pictureUrl={item.picture}
      releaseDate={item.releaseDate}
      rating={item.rating}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={Movies} renderItem={movieItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e2e2e',
  },
});

export default App;
