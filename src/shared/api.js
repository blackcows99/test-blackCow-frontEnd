import RESP from './response';
import { storage } from '../shared/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { loadCommercial } from '../redux/modules/Commercial';
import axios from 'axios';

const authApi = {
    signup: (data) => {
        // instance.post("/api/signup")
        RESP.LOGIN.user.push(data);
        console.log(RESP.LOGIN.user);
    },
    authCheck: (onsuccess,onerror)=>{
        axios
            .get('/api_member')
            .then(onsuccess)
            .catch(onerror);
    }
    
};

const postApi = {
    loadPost: async () => {
        return await axios
            .get('/api_posts')
            // .get('/api/post')
            .then((response) => {
                // console.log('완료!');
                console.log(response.data);
                return response;
            })
            .catch((err) => {
                console.log('에러!');
            });
    },

    addPost: async (data) => {
        await axios
            .post('/api_posts', data)
            .then((res) => {
                alert('등록 완료!');
            })
            .catch((error) => {
                alert('에러 발생!');
            });
    },

    loadOnePost: async (id) => {
        return await axios
            .get(`/api_posts/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                alert('로드 에러 발생!');
            });
    },


    updatePost: async (id, data) => {
        return await axios
            .patch(`/api_post/` + id, data)
            .then((res) => {
                alert('업데이트 완료!');
            })
            .catch((error) => {
                alert(error.response.data);
            });
    },
    addComment: async (id, data) => {
        console.log(id, data)
        return await axios
            .post(`/api_comment/` +id, data)
            .then((res) => {
                alert('코멘트 등록 완료!');
            })
            .catch((error) => {
                alert('에러 발생!');
            });
    },
    deleteComment:  async (id) => {
        await axios.delete(`/api_comment/`+ id)
        .then((res) => {
            alert('코멘트 삭제 완료!');
        })
        .catch((error) => {
            alert('에러 발생!');
        });
    }

};

export { authApi, postApi };
