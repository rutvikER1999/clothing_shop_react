import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middeleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middeleware));

export default store;