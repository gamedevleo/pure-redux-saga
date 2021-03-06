import {combineReducers} from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  images:imagesReducer,
  error: errorReducer
})

export default rootReducer;
