import {IMAGES} from '../ActionTypes';

const loadingReducer = (state = false,action)=>{
  switch (action.type) {
    case 'TEST':
        return true;
    case IMAGES.LOAD:
        return true;
    case IMAGES.LOAD_SUCCESS:
    case IMAGES.LOAD_FAIL:
        return false;
    default:
      return state;
  }
}

export default loadingReducer;
