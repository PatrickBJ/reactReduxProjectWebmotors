import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import Reducers from './reducers/combinedReducers';
import { buscaMarca } from './actions/buscaMarca';

const store = createStore(Reducers, applyMiddleware(thunk));
store.dispatch(buscaMarca());

export default store;