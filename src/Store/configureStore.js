/**
 * Created by billyu on 2017/12/12.
 */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../Reducers/weather';
console.log('232323', reducers);

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(
      thunk,
    )
  )
}