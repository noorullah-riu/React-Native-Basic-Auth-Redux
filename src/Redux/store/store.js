import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoryReducer from "../reducers/CategoryReducer";
//import {} from "react-redux"

const allReducers = combineReducers({
  category: CategoryReducer,
});

const configureStore = () => createStore(allReducers, applyMiddleware(thunk));

export default configureStore;

/* import React from "react";
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from '../../App';

import {Provider} from "react-redux";

import configureStore from "../../src/Redux/store/store";

const store= configureStore();


const ReduxHere =()=>
<Provider store={store}>
   <App />
</Provider>


registerRootComponent(ReduxHere); */
