import axios from "axios";
import { postApi } from "../../shared/api";


// Actions
const CREATE = 'post/CREATE';
const DELETE = 'post/DELETE';
const UPDATE = 'post/UPDATE';
const UPDATECHECK = "word/UPDATECHECK";

// 미들웨어 Actions
const LOAD = "post/LOAD"
const initialState = {
    is_loaded : false,
    list: [
        
    ],
};


// Action Creators
export function createPost(post) {
    return { type: CREATE, post };
}
export function UpdatePost(post) {
    return { type: UPDATE, post };
}
export function UpdateChecked(post) {
    return { type: UPDATECHECK, post }
}
export function deletePost(idx) {   // (bucket_index)
    return { type: DELETE, idx };         // bucket_index)
}

// 미들웨어 Action Creators
export function loadPost(posts) {
    return { type: LOAD, posts };
}


// middlewares,  리덕스와 파이어베이스랑 통신하는 부분= redux thunk
export const loadWordFB = () => {
    return async function (dispatch) {
        const data = await postApi.loadPost();
        dispatch(loadPost(data.data))

        // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
        // word_data.forEach((w) => {
        //     // 콘솔로 확인해요!
        //     word_list.push({ id: w.id, ...w.data() }); //원하는 data만 가져옴
        // });
        // 잘 만들어졌는 지 리스트도 확인해봐요! :)

        // dispatch(loadWord(word_list));
    }
}

export const createPostFB = (post) => {
    return async function (dispatch) {  
        postApi.addPost(post)
        dispatch(createPost(post))
        // const word = { id: docRef.id, ...word_data };       // 리덕스에만 id가 저장됨 ?         
        // dispatch(createWord(word))
        // console.log((await getDoc(docRef)).data()) 
        // const _word = await getDoc(docRef);                      // 방법2, 기다릴 필요 없다.
        // const word = {id:_word.id, ..._word.data()};           
        // dispatch(createWord(word))
    }
}
export const updatePostFB = (word_data) => {
    return async function (dispatch, getState) {
       

        // console.log(getState().word)
        // const _word_list = getState().word.list; // 기존 state 데이터 다 가져오기
        // const word_index = _word_list.findIndex((w)=>{
        //     return w.id === word_data.word_id;
        // })
        // dispatch(UpdateWord(_word))
    }
}

export const UpdateCheckedFB = (word) => {
    return async function (dispatch) {
       
    }
}

export const deletePostFB = (id) => {
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
        case "post/LOAD": {

            return { list: action.posts }
            // return { list: action.word_list, is_loaded : true }
        }
        case "post/CREATE": {
            return { list: [...state.list, action.post] }; // 새로운 배열 리턴
        }
        case "post/UPDATEWORD": {
            // const new_word_list = state.list.map((w, i) => {   //인덱스로 접근 값 하나만 바뀔때
            //     if (parseInt(action.idx) === i) {
            //         return {word:action.word, pinyin:action.pinyin, meaning:action.meaning,
            //             example:action.example, interpretation:action.interpretation,
            //         }
            //     }
            //     return {...w};
            // })
            const new_word_list = state.list.map((w, i) => {       // word로 접근, 값 다 바뀔때
                if (w.id === action.word_data.word_id) {
                    return {
                        word: action.word_data.word,
                        pinyin: action.word_data.pinyin,
                        meaning: action.word_data.meaning,
                        example: action.word_data.example,
                        interpretation: action.word_data.interpretation,
                        // checked: action.word_data.checked,
                    }
                }
                return { ...w }
            })
            // console.log({ list: new_word_list })
            return { list: new_word_list, is_loaded: true }; // 새로운 배열 리턴
        }

        case "post/UPDATECHECK": {
            const new_word_list = state.list.map((v) => {
                if (action.word.id === v.id) {

                    return { ...v, checked: v.checked ? false : true }
                } else {
                    return { ...v }
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



            return { list: new_word_list , is_loaded:true};
        }

        case "post/DELETE": {
            const new_word_list = state.list.filter((v, i) => {
                return parseInt(action.idx) !== i
            });
            // console.log({ list: new_word_list })
            return { list: new_word_list, is_loaded:true };
        }
        default: return state;
    }

}



