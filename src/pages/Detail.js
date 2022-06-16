import React, { useState } from 'react';
import styled from 'styled-components';
import { MyContainer, Image, CustomButton } from '../elements';
import { TabContent } from '../components';
import { BsStarFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { authApi, postApi } from '../shared/api';
import { useDispatch, useSelector } from 'react-redux';
import { loadComment, addCommentFB } from '../redux/modules/comment';
import { deletePostFB } from '../redux/modules/post';
const Detail = ({ data }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.list);
    const { id } = useParams();
    const navigate = useNavigate();
    const [commercial, setCommercial] = useState({});
    // const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');
    const [auth, setAuth] = useState(false);





    const authCheck = async () => {
        authApi.authCheck(response => {
            setAuth(true)
        }, (error) => {
            console.log(error);
        })
    }

    // handleClick 관련 테스트 코드 ////////
    // const user = useSelector ( state => state.user)
    ///////////////////////////////////////
    const handleComment = async () => {
        const _data = {
            comment: content,
            // name: user.name,
        }
        if (!content) {
            alert('댓글을 입력하세요!')
            return;
        }
        dispatch(addCommentFB(id, _data))
        setContent('');
        // call();
    }

    const deleteClick = (id) => {
        dispatch(deletePostFB(id));
        navigate(-1);
    }
    const call = async () => {
        const data = await postApi.loadOnePost(id);
        dispatch(loadComment(data.comments));
        setCommercial(data);
        // setComments(data.comments);
        // console.log(comments)
    }
    React.useEffect(() => {
        call();
        // authCheck()
    }, [])

    console.log(commercial);
    return (
        <>  <div style={{ margin: "70px auto 0 auto" }}>
            {/* { commercial.isEditable ? <CustomButton width="10vw" _onClick={() => { navigate(`/update/${commercial?.id}`) }} 
                style={{display : auth ? "" : "none"}}
            >수정하기</CustomButton> : null} */}


            {/* 실전에서 밑에 버튼 지우고 위에꺼 주석풀기 */}
            <CustomButton width="10vw" _onClick={() => { navigate(`/update/${commercial?.id}`) }}
                editable={commercial?.editable}
            >수정하기</CustomButton>
            <CustomButton width="10vw" _onClick={() => { deleteClick(id); }}
                          editable={commercial?.editable}
            >삭제하기</CustomButton>
            <CustomButton width="10vw" _onClick={() => { navigate(-1) }}>뒤로가기</CustomButton>
        </div>
            <MyContainer width="60vw">

                <TitleBox>
                    <strong>{commercial?.member}</strong>

                    <div>{commercial?.date}</div>

                </TitleBox>
                <ContentBox>
                    <Image src={commercial?.img} width="50%"></Image>
                    <div style={{ padding: "10px" }}>
                        <p><strong style={{ fontSize: "1.1rem" }}>{commercial?.device}</strong></p>
                        <p style={{ wordBreak: "break-all" }} >{commercial?.contents}</p>
                    </div>
                </ContentBox>
                <Center>
                    <div>
                        <Category>{commercial?.category === 1 ? "컴퓨터"
                            : (commercial?.category === 2 ? "노트북"
                                : (commercial?.category === 3 ? "웨어러블"
                                    : (commercial?.category === 4 ? "가전제품"
                                        : (commercial?.category === 5 ? "기타" : ""))))
                        }</Category>
                        {[1, 2, 3, 4, 5].map(el => (
                            <BsStarFill
                                key={el}
                                style={{
                                    fontSize: "30px",
                                    color: `${commercial?.score >= el ? "yellow" : "#dfdfdf"}`
                                }}
                            />
                        ))}
                    </div>
                </Center>
                <TabContent auth={auth} data={comments} postId={id} content={content} setContent={(e) => setContent(e.target.value)} onClick={() => handleComment()} />
                <SideMenu>상세 페이지</SideMenu>
            </MyContainer>
        </>
    )
}


const TitleBox = styled.div`
    display: flex;
    justify-content : space-between;
    padding : 8px;
`;

const ContentBox = styled.div`
    border:1px solid rgba(108,117,125,0.3);
    display:flex;

`;

const Center = styled.div`
    display:flex;
    margin : 13px 0;
    justify-content : space-between;
`;

const Category = styled.span`
    background-color: rgba(108,117,125,0.3);
    color: black;
    padding : 8px;
    border-radius: 1.2rem;
    font-size : 0.8rem;
    margin-right:5px;
`;

const SideMenu = styled.strong`
    position: absolute;
    top:3%;
    left:-21%;
    padding:10px;
    border-radius:5px;
    font-size : 1.5rem;
`;

export default Detail;