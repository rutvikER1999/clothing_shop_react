import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

import { persistStore } from 'redux-persist'

const middeleware = [];

if (process.env.NODE_ENV === 'development'){
    middeleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middeleware));

export const persistor = persistStore(store);

//export default {store, persistor};