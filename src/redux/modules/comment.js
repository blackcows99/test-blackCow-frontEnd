import axios from "axios";
import { postApi } from "../../shared/api";


// Actions
const CREATE = 'comment/CREATE';
const DELETE = 'comment/DELETE';

const initialState = {
    list: [
        
    ],
};
// 미들웨어 Actions

// Action Creators
export function createComment(comment) {
    return { type: CREATE, comment };
}
export function deleteComment(idx) {   
    return { type: DELETE, idx };   
}

// 미들웨어 Action Creators
// export function loadPost(posts) {
//     return { type: LOAD, posts };
// }


// middlewares,  리덕스와 파이어베이스랑 통신하는 부분= redux thunk


export const createCommentFB = (comment) => {
    return async function (dispatch) {  
        postApi.addPost(comment)
        dispatch(createComment(comment))
        // const word = { id: docRef.id, ...word_data };       // 리덕스에만 id가 저장됨 ?         
        // dispatch(createWord(word))
        // console.log((await getDoc(docRef)).data()) 
        // const _word = await getDoc(docRef);                      // 방법2, 기다릴 필요 없다.
        // const word = {id:_word.id, ..._word.data()};           
        // dispatch(createWord(word))
    }
}

export const deleteCommentFB = (id) => {
    return async function (dispatch, getState) {
        // if (!id){
        //     window.alert("아이디가 없네요");
        //     return;
        // }
      
        // const word_list = getState().word.list; // 기존 state 데이터 다 가져오기
        // const word_index = word_list.findIndex((w) => {
        //     return w.id === id;
        // })
        // console.log(word_index)
        // dispatch(deleteWord(word_index))




    }
}





// Reducer                        //이전 값              
export default function reducer(state = initialState, action = {}) { //기존거 없애고,새로운거 추가하는 개념
    switch (action.type) {
        case "comment/CREATE": {
            return { list: [...state.list, action.comment] }; // 새로운 배열 리턴
        }
  
        case "comment/DELETE": {
            const new_word_list = state.list.filter((v, i) => {
                return parseInt(action.idx) !== i
            });
            // console.log({ list: new_word_list })
            return { list: new_word_list, is_loaded:true };
        }
        default: return state;
    }

}



