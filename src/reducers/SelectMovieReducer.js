import { SELECT_MOVIE } from '../actions';

export default (selectedMovie = null, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return action.payload.data;
    default:
      return selectedMovie;
  }
};