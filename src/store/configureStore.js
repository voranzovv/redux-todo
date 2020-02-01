import { createStore } from "redux";
import tasksReducer from './../component/tasksReducer';
import { devToolsEnhancer } from 'redux-devtools-extension'

export const configureStore = () => {
  const store = createStore(tasksReducer,devToolsEnhancer());
  return store;
};
