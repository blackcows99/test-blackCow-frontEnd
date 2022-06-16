import axios from "axios";
import { postApi } from "../../shared/api";
import RESP from "../../shared/response";

// Actions
const LOAD = 'comment/LOAD';
const DELETE = 'comment/DELETE';
const ADD = 'comment/ADD';
const initialState = {
    list: [

    ],
};

// Action Creators
export function loadComment(comments) {
    return { type: LOAD, comments };
}
export function deleteComment(id) {
    return { type: DELETE, id };
}

// 미들웨어 Action Creators
export function addComment(comment) {
    return { type: ADD, comment };
}


// middlewares,  리덕스와 파이어베이스랑 통신하는 부분= redux thunk



export const addCommentFB = (id, comment) => {
    return async function (dispatch) {
        let comments
        await postApi.addComment(id, comment)
            .then((response) => {
                console.log(response);
                alert('코멘트 등록 완료!');
                comments = response.data;
            })
            .catch((error) => {
                console.log(error);
                alert('에러 발생!');
            });;    // 실전에서 풀기
        // const comments = RESP.COMMENTS[0];  // 테스트 코드
        console.log(comments);
        dispatch(addComment(comments))
    }
}

export const deleteCommentFB = (id) => {
    return async function (dispatch, getState) {
        postApi.deleteComment(id);
        dispatch(deleteComment(id));


    }
}

// Reducer                        
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "comment/LOAD": {
            return { list: action.comments }
        }

        case "comment/ADD": {
            if (state.list)
                return { list: [...state.list, action.comment] };
            else
                return { list: [action.comment] };
        }

        case "comment/DELETE": {
            console.log(action.id)
            const new_comment_list = state.list.filter((c) => {
                console.log(c.id)
                return parseInt(action.id) !== parseInt(c.id); //  실전에선 c.id 의 parseInt 뺴기
            });
            console.log(new_comment_list)
            console.log({ list: new_comment_list })
            return { list: new_comment_list };
        }
        default: return state;
    }

}



