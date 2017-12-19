import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import SelectMovieReducer from './SelectMovieReducer';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  selectMovie: SelectMovieReducer,
});

export default rootReducer;