import axios from 'axios';
import { authApi } from '../../shared/api';

const initialState = {
  is_login: false,
  // name: '아무개', // name, email 실전 때 ""
  // email: 'www@www.com',
};

// 미들웨어 Actions
const LOAD = 'user/LOAD';

// Action Creators
export function loadUser(user) {
  return { type: LOAD, user };
}

export const loadUserFB = () => {
  return async function (dispatch, getState) {
    let user
    await authApi.authCheck().then((response) => {
      // console.log('완료!');
      console.log(response.data);
      user=response.data;
    }).catch(error=>console.log(error));      // 실전 때 풀기
    console.log(user);
    if(user == undefined){
      user = {};
    }
    // const user = {
    //   // 실전 때 주석
    //   name: getState().user.name,
    //   email: getState().user.email,
    // };

    dispatch(loadUser(user));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'user/LOAD': {
      // console.log(action)
      return {
        name: action.user.name,
        email: action.user.email,
        is_login: true,
      };
    }

    default:
      return state;
  }
}
