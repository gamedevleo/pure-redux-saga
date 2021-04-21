import {takeEvery,put,take,call} from 'redux-saga/effects';

//workerSaga
function* workerSaga(){
  console.log('Hi from worker');
  yield put({type:'TEST'});   //put is used to dispatch an action
}

function* loginSaga(){
  console.log('Login saga');
}

function* logoutSaga(){
  console.log('Logout saga');
}

function* testSaga(){
  console.log('test saga');
}

//watcher saga
function* rootSaga(){
  yield takeEvery('HELLO',workerSaga);  //takeEvery will watch everytime the action dispatched
  yield takeEvery('TEST',testSaga);
  yield take('LOGIN');    //take only watch the action and call it once.
  yield call(loginSaga);  // call the saga once
  yield take('LOGOUT');
  yield call(logoutSaga);
}

export default rootSaga;
