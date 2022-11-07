import React from 'react';
import movieStyle from '../styles/MovieCardStyle';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {LikeIcon} from '../assets/icons/icons';

interface MovieCardProps {
  pictureUrl: string;
  movieTitle: string;
  rating: number;
  releaseDate: string;
}
const LeftSwipeActions = () => {
  return (
    <View>
      <Text>Bookmark</Text>
    </View>
  );
};

const RightSwipeActions = () => {
  return (
    <View style={styles.deleteContainer}>
      <Text style={styles.deleteText}>Delete</Text>
    </View>
  );
};
const MovieCard = (props: MovieCardProps) => {
  const {pictureUrl, movieTitle, rating, releaseDate} = props;
  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={RightSwipeActions}>
      <View style={movieStyle.container}>
        <Image style={movieStyle.image} source={{uri: pictureUrl}} />
        <View style={movieStyle.descriptionView}>
          <Text style={movieStyle.movieTitle}>{movieTitle}</Text>
          <View style={movieStyle.info}>
            <Text style={movieStyle.rating}>{rating}</Text>
            <Text style={movieStyle.releaseDate}>
              Released: {'\n'}
              {releaseDate}
            </Text>
          </View>
        </View>
        <View style={movieStyle.likeButton}>
          <TouchableOpacity>
            <LikeIcon />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  deleteContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    margin: 40,
  },
  deleteText: {
    color: 'white',
    fontWeight: '700',
  },
});
export default MovieCard;
