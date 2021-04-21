import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from "redux-saga";

import rootReducer from './Reducers/index';
import rootSaga from './sagas/index';


const configureStore = ()=>{
  const sagaMilldeware = createSagaMiddleware();
  const store = createStore(rootReducer,
    compose(applyMiddleware(sagaMilldeware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

  sagaMilldeware.run(rootSaga);

  //This action won't be called because the logout saga is after login saga
  store.dispatch({type:'LOGOUT'});

  store.dispatch({type:'LOGIN'});

  //This action won't be called because the login action is watched once.
  store.dispatch({type:'LOGIN'});
  store.dispatch({type: 'HELLO'});
  store.dispatch({type: 'HELLO'});


  store.dispatch({type:'LOGOUT'});
  return store;
}


export default configureStore;
