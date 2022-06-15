// 스토어 
import {legacy_createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import post from './modules/post'
import comment from './modules/comment'
import user from './modules/user'
// export const history = createBrowserHistory();


const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({post, comment, user});  // 리듀서들 묶기 bucket:bucket 
const store = legacy_createStore(rootReducer,enhancer);  // 그걸로 스토어 만들기

export default store;

 