import axios from 'axios';
import { postApi } from '../../shared/api';

// Actions
const CREATE = 'post/CREATE';
const DELETE = 'post/DELETE';

// 미들웨어 Actions
const LOAD = "post/LOAD"
const UPDATE = 'post/UPDATE';
const initialState = {
    list: [

    ],
};


export function loadPost(posts) {
  return { type: LOAD, posts };
}
export function createPost(post) {
    return { type: CREATE, post };
}
export function updatePost(id, post) {
    return { type: UPDATE, id, post };
}
export function deletePost(id) {
    return { type: DELETE, id };
}



// middlewares
export const loadPostFB = () => {
    return async function (dispatch) {
        const data = await postApi.loadPost();
        dispatch(loadPost(data.data))
    }
}

export const createPostFB = (post) => {
    return async function (dispatch) {
        postApi.addPost(post)
        dispatch(createPost(post))
    }
}
export const updatePostFB = (id, post) => {
    return async function (dispatch, getState) {
        // console.log(getState().post.list)
        postApi.updatePost(id, post)        // 실전에서 주석 풀기
        dispatch(updatePost(id, post))

    }
}

export const deletePostFB = (id) => {
    return async function (dispatch, getState) {
        console.log(id);
        // postApi.deletePost(id);         실전에서 주석 풀기
        dispatch(deletePost(id))

// Reducer                        //이전 값
export default function reducer(state = initialState, action = {}) {
  //기존거 없애고,새로운거 추가하는 개념
  switch (action.type) {
    case 'post/LOAD': {
      return { list: action.posts };
      // return { list: action.word_list, is_loaded : true }
    }
}





// Reducer                                   
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/LOAD": {

            return { list: action.posts }
        }
        case "post/CREATE": {
            return { list: [...state.list, action.post] };
        }
        case "post/UPDATE": {

            const new_post_list = state.list.map((p, i) => {
                if (p.id === parseInt(action.id)) {
                    return {
                        device: action.post.device,
                        contents: action.post.contents,
                        category: action.post.category,
                        score: action.post.score,
                        img: action.post.img,
                    }
                }
                return { ...p }
            })
            return { list: new_post_list };
        }

        case "post/DELETE": {
            const new_post_list = state.list.filter((p) => {
                return parseInt(action.id) !== p.id
            });
            return { list: new_post_list };
        }
        default: return state;
    }

    case 'post/UPDATECHECK': {
      const new_word_list = state.list.map((v) => {
        if (action.word.id === v.id) {
          return { ...v, checked: v.checked ? false : true };
        } else {
          return { ...v };
        }
      });
      // if (parseInt(action.word.word_id) === w.id) {
      //     if (w.checked) {
      //         return { ...w, checked: false }
      //     }
      //     return { ...w, checked: true }
      // }
      // return { ...w }
      // })

      return { list: new_word_list, is_loaded: true };
    }

    case 'post/DELETE': {
      const new_word_list = state.list.filter((v, i) => {
        return parseInt(action.idx) !== i;
      });
      // console.log({ list: new_word_list })
      return { list: new_word_list, is_loaded: true };
    }
    default:
      return state;
  }
}
