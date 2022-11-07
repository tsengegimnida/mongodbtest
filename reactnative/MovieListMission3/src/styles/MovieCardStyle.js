import {StyleSheet} from 'react-native';

const movieStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#3c3c3c',
    margin: 20,
  },
  image: {
    height: 170,
    width: 110,
    borderRadius: 10,
  },
  descriptionView: {
    margin: 20,
    flex: 1,
    justifyContent: 'space-between'
  },
  movieTitle: {
    color: 'white',
    fontSize: 18,
  },
  rating: {
    color: 'pink',
    fontSize: 24,
    marginRight: 10
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  releaseDate: {
    color: 'white',
    fontSize: 10
  },
  likeButton: {
    justifyContent: 'center',
    margin: 20
  }
});

export default movieStyle;
