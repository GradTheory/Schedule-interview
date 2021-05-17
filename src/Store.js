import {createStore } from 'redux';
import interviewreducer from './Redux/Reducer'

const store = createStore(
    interviewreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store