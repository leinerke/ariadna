import { createStore } from 'redux';
import { reducer } from '../reducers';

const initialState = {
  test: 'test'
};

const store = createStore(reducer, initialState);

export { store };