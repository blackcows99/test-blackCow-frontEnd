import RESP from './response';
import axios from 'axios';

const authApi = {
    signup: (data) => {
        // instance.post("/api/signup")
        RESP.LOGIN.user.push(data);
        console.log(RESP.LOGIN.user);
    },
    authCheck: async (onsuccess, onerror) => {
        return await axios
            .get('/api/member', { withCredentials: true });

    }

};

const postApi = {
    loadPost: async () => {
        return await axios
            .get('/api/posts')
            .then((response) => {
                console.log(response.data);
                return response;
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data)
            });
    },

    addPost: async (data) => {
        await axios
            .post('/api/post', data)
            .then((res) => {
                alert('등록 완료!');
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data);
            });
    },

    loadOnePost: async (id) => {
        return await axios
            .get(`/api/post/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data);
            });
    },


    updatePost: async (id, data) => {
        await axios
            .patch(`/api/post/` + id, data)
            .then((res) => {
                alert('업데이트 완료!');
            })
            .catch((error) => {
                alert(error.response.data);
            });
    },

    deletePost: async (id) => {
        await axios.delete(`/api/post/` + id)
            .then((res) => {
                alert('post 삭제 완료!');
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data);
            });
    },

    addComment: async (id, data) => {
        return await axios
            .post(`/api/comment/` + id, data)

    },

    deleteComment: async (id) => {
        await axios.delete(`/api/comment/` + id)
            .then((res) => {
                alert('코멘트 삭제 완료!');
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data);
            });
    }

};

export { authApi, postApi };
