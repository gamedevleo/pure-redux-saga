import {IMAGES} from './ActionTypes';


const loadImages = ()=>({
  type:IMAGES.LOAD,
})

const loadImageSuccess = images=>({
  type:IMAGES.LOAD_SUCCESS,
  images,
})

const loadImagesFail = error =>({
  type:IMAGES.LOAD_FAIL,
  error,
})
