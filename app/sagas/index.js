import { call, put, take, actionChannel } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import fetch from 'isomorphic-fetch'

const URL = 'https://api.github.com/users/mralexgray/repos'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function getData() {
  return fetch(URL).then(response => response.json())
}

function* fetchData(index) {
  try {
    const data = yield call(getData);
    yield call(delay, 2000)
    yield put({type: 'FETCH_SUCCEEDED', data: data[index]});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error.toString()});
  }
}

function* fetchDataSaga() {
	let index = 0
  const requestChan = yield actionChannel('FETCH_ASYNC')
  while (true) {
    yield take(requestChan)
    yield index += 1
    yield call(fetchData, index)
  }
}

function* increment() {
	yield put({type: 'INCREMENT'})
}

function* counter() {
  yield takeEvery('FETCH_ASYNC', increment)
}

export default function* root() {
  yield [
  	counter(),
  	fetchDataSaga()
  ]
}