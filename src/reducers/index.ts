/**
 * @prettier
 */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducersList } from './reducersList';

// combine all reduceres to single one.
export const reducers = combineReducers(reducersList);



// create redux store based on the environment.
export let reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
if (__DEV__) {
  reduxStore = createStore(
    reducers,
    compose(applyMiddleware(ReduxThunk))
      );
}

export type RootState = ReturnType<typeof reducers>;
