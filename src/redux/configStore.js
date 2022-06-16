// 스토어 
import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import post from './modules/post'
import comment from './modules/comment'
import user from './modules/user'


const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ post, comment, user });
const store = legacy_createStore(rootReducer, enhancer);

export default store;

